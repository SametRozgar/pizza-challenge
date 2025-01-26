import { useLocation } from "react-router-dom";
import "./tailwind.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SiparisFormu() {
  const location = useLocation();
  const { pizzaName, pizzaPrice, pizzaStars, pizzaDescription } =
    location.state || {};
  const [finalPrice, setFinalPrice] = useState(pizzaPrice);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [isFormAvailable, setIsFormAvailable] = useState(false);
  const [pizzaSize, setPizzaSize] = useState("");
  const [pizzaDough, setPizzaDough] = useState("thin");
  const [orderNote, setOrderNote] = useState("");
  const [extraCounter, setExtraCounter] = useState(0);
  const [pizzaCounter, setPizzaCounter] = useState(1);
  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    setIsFormAvailable(pizzaSize && pizzaDough && customerName.length >= 3);
  }, [pizzaSize, pizzaDough, customerName]);

  const addToExtras = (e) => {
    const extra = e.target.value;

    if (selectedExtras.includes(extra)) return;

    if (selectedExtras.length >= 10) {
      alert("You can only select up to 10 extras!");
      return;
    }

    setFinalPrice((prevPrice) => prevPrice + 5);
    setExtraCounter((prevPrice) => prevPrice + 5);
    setSelectedExtras([...selectedExtras, extra]);
  };

  const removeFromExtras = (extra) => {
    setSelectedExtras(selectedExtras.filter((item) => item !== extra));
    setFinalPrice((prevPrice) => prevPrice - 5);
    setExtraCounter((prevPrice) => prevPrice - 5);
  };

  const addSize = (e) => {
    const size = e.target.value;
    setPizzaSize(size);
  };

  const addDough = (e) => {
    setPizzaDough(e.target.value);
  };

  const addNote = (e) => {
    setOrderNote(e.target.value);
  };

  const pizzaUpper = () => {
    setPizzaCounter((prevcount) => prevcount + 1);
    setFinalPrice((prevcount) => prevcount + pizzaPrice);
  };
  const pizzaDowner = () => {
    if (pizzaCounter > 1) {
      setPizzaCounter((prevcount) => prevcount - 1);
      setFinalPrice((prevcount) => prevcount - pizzaPrice);
    }
  };

  const handleNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      pizzaName,
      pizzaSize,
      pizzaDough,
      pizzaCounter,
      selectedExtras,
      orderNote,
      customerName,
      totalPrice: finalPrice,
    };

    try {
      const response = await axios.post("https://reqres.in/api/pizza", orderData);
      console.log("Order Summary:", response.data);
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  const toppings = [
    "Pepperoni",
    "Sausage",
    "Grilled Chicken",
    "Onion",
    "Corn",
    "Salami",
    "Garlic",
    "Pepper",
    "Pineapple",
    "Zucchini",
    "Canadian Ham",
    "Tomato",
    "Jalapeno",
    "Sucuk",
  ];

  return (
    <div className="form-div">
      <form
        className="w-[600px] p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-4">Order: {pizzaName}</h1>
        <div className="flex justify-between mb-4">
          <p className="text-lg">{pizzaPrice}$</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`text-$
                  {index < pizzaStars ? "yellow" : "gray"}-500`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <p className="mb-6">{pizzaDescription}</p>

        <div className="flex space-x-8 mb-6">
          <div className="w-full">
            <h4 className="text-xl font-bold pl-4 mb-2">
              Please Select Size <span className="text-red-500 text-xl">*</span>
            </h4>
            <div className="space-y-2">
              {[
                { label: "Small", value: "Small" },
                { label: "Medium", value: "Medium" },
                { label: "Large", value: "Large" },
              ].map((size) => (
                <label key={size.value} className="flex items-center">
                  <input
                    type="radio"
                    name="size"
                    className="mr-2"
                    value={size.value}
                    onChange={addSize}
                  />
                  {size.label}
                </label>
              ))}
            </div>
          </div>

          <div className="w-full">
            <h4 className="text-xl font-bold pl-4 mb-2">
              Please Select Dough <span className="text-red-500 text-xl">*</span>
            </h4>
            <select
              className="block w-full bg-white border border-gray-200 py-3 px-4 rounded"
              onChange={addDough}
            >
              <option value="thin">Thin</option>
              <option value="extra thick">Extra Thick</option>
              <option value="thick">Thick</option>
            </select>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Select Up to 10 Toppings</h3>
          {toppings.map((topping) => (
            <label key={topping} className="flex items-center mb-2">
              <input
                type="checkbox"
                value={topping}
                onChange={addToExtras}
                checked={selectedExtras.includes(topping)}
                disabled={
                  selectedExtras.length >= 10 &&
                  !selectedExtras.includes(topping)
                }
                className="mr-2"
              />
              {topping}
            </label>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-bold">Selected Extras:</h3>
          <ul>
            {selectedExtras.map((extra, index) => (
              <li key={index}>
                {extra}
                <button
                  onClick={() => removeFromExtras(extra)}
                  className="ml-2 text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-bold">Order Note</h3>
          <textarea
            onChange={addNote}
            placeholder="Do you have any message about your order?"
            className="w-full border rounded p-2"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="customerName" className="text-lg font-bold">
            Enter Your Name <span className="text-red-500 text-xl">*</span>
          </label>
          <input
            type="text"
            id="customerName"
            onChange={handleNameChange}
            className="w-full border rounded p-2"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <p>Order Total</p>
          <p>Extras: {extraCounter}$</p>
          <p>Total Price: {finalPrice}$</p>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <button
            type="button"
            className="bg-gray-200 px-4 py-2 rounded"
            onClick={pizzaUpper}
          >
            +
          </button>
          <span>{pizzaCounter}</span>
          <button
            type="button"
            className="bg-gray-200 px-4 py-2 rounded"
            onClick={pizzaDowner}
          >
            -
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            disabled={!isFormAvailable}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Proceed to Order
          </button>
        </div>
      </form>
    </div>
  );
}
