import "./SiparisFormu.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function SiparisFormu({
  pizzaName,
  pizzaPrice,
  pizzaStars,
  pizzaDescription,
  pizzaPictureSrc,
  orderRender,
}) {
  const [finalPrice, setFinalPrice] = useState(pizzaPrice);
  const [pizzaPriceCounter, setPizzaPriceCounter] = useState(0);
  const [extraPriceCounter, setExtraPriceCounter] = useState(0);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [isFormAvailable, setIsFormAvailable] = useState(false);
  const [pizzaSize, setPizzaSize] = useState("");
  const [pizzaDough, setPizzaDough] = useState("thin");
  const [orderNote, setOrderNote] = useState("");
  const [extraCounter, setExtraCounter] = useState(0);
  const [pizzaCounter, setPizzaCounter] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsFormAvailable(pizzaSize && pizzaDough && customerName.length >= 3);
  }, [pizzaSize, pizzaDough, customerName]);

  useEffect(() => {
    setExtraCounter(selectedExtras.length * 5 * pizzaCounter);
  }, [selectedExtras, pizzaCounter]);

  const addToExtras = (extra) => {
    const extraCost = 5;
    setSelectedExtras([...selectedExtras, extra]);
    setFinalPrice((prevPrice) => prevPrice + extraCost * pizzaCounter);
  };

  const removeFromExtras = (extra) => {
    const extraCost = 5;
    setSelectedExtras(selectedExtras.filter((item) => item !== extra));
    setFinalPrice((prevPrice) => prevPrice - extraCost * pizzaCounter);
  };

  const handleToppingSelection = (e) => {
    const topping = e.target.value;
    if (selectedExtras.includes(topping)) {
      removeFromExtras(topping);
    } else {
      if (selectedExtras.length >= 10) {
        return;
      }
      addToExtras(topping);
    }
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
    setPizzaCounter((prevCount) => prevCount + 1);
    setFinalPrice((prevPrice) => prevPrice + pizzaPrice + extraCounter);
  };

  const pizzaDowner = () => {
    if (pizzaCounter > 1) {
      const extraCostPerPizza = selectedExtras.length * 5; 
      const totalReduction = pizzaPrice + extraCostPerPizza; 
  
      setPizzaCounter((prevCount) => prevCount - 1);
      setFinalPrice((prevPrice) => Math.max(0, prevPrice - totalReduction));
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
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        orderData
      );
      console.log("Order Summary:", response.data);
    } catch (error) {
      console.error("Error submitting order:", error);
    }
    orderRender(orderData);
    history.push("/confirmtheorder");
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
    <div className="form-container">
      <div className="form-div">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="form-title">Order: {pizzaName}</h1>
          <div className="form-header">
            <p className="pizza-price">{pizzaPrice}$</p>
            <div className="stars-container">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`star ${index < pizzaStars ? "star-filled" : ""}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <p className="pizza-description">{pizzaDescription}</p>

          <div className="form-section">
            <div className="form-group">
              <h4 className="form-label">
                Please Select Size <span className="required">*</span>
              </h4>
              <div className="radio-group">
                {["Small", "Medium", "Large"].map((size) => (
                  <label key={size} className="radio-label">
                    <input
                      type="radio"
                      name="size"
                      className="radio-input"
                      value={size}
                      onChange={addSize}
                    />
                    {size}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <h4 className="form-label">
                Please Select Dough <span className="required">*</span>
              </h4>
              <select className="select" onChange={addDough}>
                <option value="thin">Thin</option>
                <option value="extra thick">Extra Thick</option>
                <option value="thick">Thick</option>
              </select>
            </div>
          </div>

          <h3 className="extras-heading">Select Up to 10 Toppings</h3>
          <div className="extras">
            {toppings.map((topping) => (
              <label key={topping} className="checkbox-label">
                <input
                  type="checkbox"
                  value={topping}
                  onChange={handleToppingSelection}
                  checked={selectedExtras.includes(topping)}
                  disabled={
                    selectedExtras.length >= 10 &&
                    !selectedExtras.includes(topping)
                  }
                />
                {topping}
              </label>
            ))}
          </div>

          <div className="form-group">
            <h3 className="form-label">Order Note</h3>
            <textarea
              onChange={addNote}
              placeholder="Do you have any message about your order?"
              className="textarea"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="customerName" className="form-label">
              Enter Your Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="customerName"
              onChange={handleNameChange}
              className="input"
              placeholder="Your Name"
            />
          </div>

          <div className="order-details">
            <div className="counter-container">
              <button
                type="button"
                className="counter-btn"
                onClick={pizzaUpper}
              >
                +
              </button>
              <span className="counter-value">{pizzaCounter}</span>
              <button
                type="button"
                className="counter-btn"
                onClick={pizzaDowner}
              >
                -
              </button>
            </div>
            <div className="price-container">
              <p className="price-title">Order Total</p>
              <div className="price-details">
                <div className="price-row">
                  <p>Extras:</p>
                  <span>{extraCounter}$</span>
                </div>
                <div className="price-row">
                  <p>Total Price:</p>
                  <span>{finalPrice}$</span>
                </div>
              </div>
            </div>
          </div>

          <div className="form-footer">
            <button
              type="submit"
              disabled={!isFormAvailable}
              className="submit-btn"
            >
              Proceed to Order
            </button>
          </div>
        </form>
      </div>
      <div className="spinner-image">
        <img src={pizzaPictureSrc} alt="Pizza" />
      </div>
    </div>
  );
}