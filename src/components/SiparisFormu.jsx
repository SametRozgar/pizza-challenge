import { useLocation } from "react-router-dom";
import './tailwind.css'
import { useState } from "react";
export default function SiparisFormu() {
   
    const location = useLocation();
    const { pizzaName, pizzaPrice, pizzaStars, pizzaDescription } = location.state || {};
    console.log(pizzaName);
    const[finalprice,setFinalPrice]=useState(pizzaPrice);

    return (

        <div className="form-div">
        <div className="w-[600px] p-6 rounded-lg shadow-lg">
      
        
          <h1 className="text-2xl font-bold mb-4">Order: {pizzaName}</h1>
          <div className="flex justify-between mb-4">
            <p className="text-lg">{pizzaPrice}</p>
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-gray-400">☆</span>
            </div>
          </div>
          <p className="mb-6">{pizzaDescription}</p>
      
        
          <div className="flex space-x-8 mb-6">
            
            
            <div className="w-full">
              <h4 className="text-xl font-bold pl-4 mb-2">
                Please Select Size <span className="text-red-500 text-xl">*</span>
              </h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="size" id="size-small" className="mr-2" />
                  Small
                </label>
                <label className="flex items-center">
                  <input type="radio" name="size" id="size-medium" className="mr-2" />
                  Medium
                </label>
                <label className="flex items-center">
                  <input type="radio" name="size" id="size-large" className="mr-2" />
                  Large
                </label>
              </div>
            </div>
      
        
            <div className="w-full">
              <h4 className="text-xl font-bold pl-4 mb-2">
                Please Select Dough <span className="text-red-500 text-xl">*</span>
              </h4>
              <div className="relative">
                <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>thin</option>
                  <option>extra thick</option>
                  <option>thick</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
      
          </div>
      
          <div className="mt-6 text-center">
            <button className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors">
              Proceed to Order
            </button>
          </div>
      
        </div>
      </div>
      

      

    )

}