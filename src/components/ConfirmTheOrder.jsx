import React from "react";

export default function ConfirmTheOrder({ finalOrderData }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <p className="text-lg"><strong>Pizza Name:</strong> {finalOrderData.pizzaName}</p>
        <p className="text-lg"><strong>Size:</strong> {finalOrderData.pizzaSize}</p>
        <p className="text-lg"><strong>Dough:</strong> {finalOrderData.pizzaDough}</p>
        <p className="text-lg"><strong>Quantity:</strong> {finalOrderData.pizzaCounter}</p>
        <p className="text-lg"><strong>Extras:</strong> {finalOrderData.selectedExtras.join(", ")}</p>
        <p className="text-lg"><strong>Order Note:</strong> {finalOrderData.orderNote}</p>
        <p className="text-lg"><strong>Customer Name:</strong> {finalOrderData.customerName}</p>
        <p className="text-lg font-semibold mt-4">Total Price: ${finalOrderData.totalPrice}</p>
        <p className="text-green-600 font-bold text-xl mt-6">Your order has been successfully received!</p>
      </div>
    </div>
  );
}
