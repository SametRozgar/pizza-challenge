import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './tailwind.css'
import React, { useEffect, useState } from 'react';

export default function Pizzalar() {

    const [pizzaName, setPizzaName] = useState("");
    const [pizzaPrice, setPizzaPrice] = useState(0);
    const [pizzaStars, setPizzaStarts] = useState("");
    const[pizzaDescription,setPizzaDescription]=useState("");
    const[pizzaPictureSrc,setPizzaPictureSrc]=useState("");
    const history = useHistory();

   
    const handleClickOrderButton = (pizzaName, pizzaPrice, pizzaStars,pizzaDescription,pizzaPictureSrc) => {
        setPizzaName(pizzaName);
        setPizzaPrice(pizzaPrice);
        setPizzaStarts(pizzaStars);
        setPizzaDescription(pizzaDescription);
        setPizzaPictureSrc(pizzaPictureSrc);
        history.push({
            pathname: "/siparisformu",
            state: {
              pizzaName,
              pizzaPrice,
              pizzaStars,
              pizzaDescription,
              pizzaPictureSrc
            },
          });
    }

    return (
        <div className="flex justify-center space-x-8 py-8 pizzalar">

            <div className=" p-4 rounded-lg shadow-lg w-64 pizza-div">
                <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://media.istockphoto.com/id/184946701/tr/foto%C4%9Fraf/pizza.jpg?s=612x612&w=0&k=20&c=zCqc1tYcAlm-t6bHfD3l-V9s9P3mUXyQt4IZ4t4WNms=" alt="Margherita Pizza" />
                <h3 className="text-xl font-semibold mb-2">Margherita Pizza</h3>
                <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-gray-400">☆</span>
                </div>
                <p className="text-lg font-bold mt-2">$10</p>
                <button onClick={() => { handleClickOrderButton("Margherita Pizza",10, "4/5","Margherita Pizza is known as the simplest and most classic version of pizza. This delicious creation from Italian cuisine leaves an unforgettable impression on the palate with the perfect harmony of tomato sauce, fresh mozzarella cheese, and basil leaves. Featuring simplicity, Margherita Pizza is a must-try for those who appreciate the purest form of natural flavors.","./images/round-pizza-margarita.png") }} className="mt-4  w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors order-button">Add to Cart</button>
            </div>


            <div className="bg-white p-4 rounded-lg shadow-lg w-64 pizza-div">
                <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://img.freepik.com/premium-photo/traditional-italian-pizza-pepperoni-with-salami-cheese-dark-background-ai-generated_70626-15295.jpg" alt="Pepperoni Pizza" />
                <h3 className="text-xl font-semibold mb-2">Pepperoni Pizza</h3>
                <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                </div>
                <p className="text-lg font-bold mt-2">$12</p>
                <button onClick={() => { handleClickOrderButton("Pepperoni Pizza",12, "5/5","Pepperoni Pizza is a favorite for meat lovers! Thin and crispy pepperoni slices, rich tomato sauce, and melting mozzarella cheese combine to stir up anyone's appetite. With its spicy and satisfying taste, Pepperoni Pizza offers energy and joy in every bite.","./images/round-pizza-peproni.png") }} className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors order-button">Add to Cart</button>
            </div>


            <div className="bg-white p-4 rounded-lg shadow-lg w-64 pizza-div">
                <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://thumbs.dreamstime.com/b/fresh-vegetarian-pizza-slice-flying-ingredients-melted-cheese-bright-colors-digital-art-commercial-banner-copy-space-fresh-335985729.jpg" alt="Vegetarian Pizza" />
                <h3 className="text-xl font-semibold mb-2">Vegetarian Pizza</h3>
                <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className=  "text-gray-400">☆</span>
                </div>
                <p className="text-lg font-bold mt-2">$11</p>
                <button onClick={() => { handleClickOrderButton("Vegetarian Pizza",11, "4/5","Vegetarian Pizza offers a light option made with the freshest and most flavorful vegetables. This pizza is enhanced with ingredients like bell peppers, mushrooms, olives, tomatoes, and onions, blending perfectly with tomato sauce and mozzarella cheese to create a healthful and delicious feast. Vegetarian Pizza holds a special place in the hearts of vegetable lovers.","./images/round-pizza-vegeterian.png") }} className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors order-button">Add to Cart</button>
            </div>


            <div className="bg-white p-4 rounded-lg shadow-lg w-64 pizza-div">
                <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://img.freepik.com/premium-photo/levitating-pizza-vegetables-black-background_861875-174.jpg" alt="BBQ Chicken Pizza" />
                <h3 className="text-xl font-semibold mb-2">BBQ Chicken Pizza</h3>
                <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                </div>
                <p className="text-lg font-bold mt-2">$13</p>
                <button onClick={() => { handleClickOrderButton("BBQ Chicken Pizza",13, "5/5","BBQ Chicken Pizza brings together the sweet and smoky flavor of barbecue sauce with tender chicken. Grilled chicken pieces, red onions, mozzarella, and tasty barbecue sauce combine to delight the taste buds. With a subtle touch of spices, BBQ Chicken Pizza is an ideal choice for those seeking a unique and different taste experience.","./images/round-pizza-bbq.png") }} className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors order-button">Add to Cart</button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg w-64 pizza-div">
                <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://static.vecteezy.com/system/resources/previews/027/671/365/large_2x/pepperoni-pizza-on-the-wooden-board-with-dark-lighting-and-black-background-food-and-delivery-concept-generative-ai-free-photo.jpg" alt="BBQ Chicken Pizza" />
                <h3 className="text-xl font-semibold mb-2">Gamer Pizza</h3>
                <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                </div>
                <p className="text-lg font-bold mt-2">$13</p>
                <button onClick={() => { handleClickOrderButton("Gamer Pizza",16, "5/5","Gamer Pizza brings together the sweet and smoky flavor of barbecue sauce with tender chicken. Grilled chicken pieces, red onions, mozzarella, and tasty barbecue sauce combine to delight the taste buds. With a subtle touch of spices, BBQ Chicken Pizza is an ideal choice for those seeking a unique and different taste experience.","./images/round-pizza-bbq.png") }} className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors order-button">Add to Cart</button>
            </div>
        </div>

    );


}