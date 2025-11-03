import React from "react";

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className="flex justify-between items-center border-b py-4">
      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-16 object-contain"
      />
      <div className="flex-1 px-4">
        <h2 className="font-semibold text-sm">{item.title}</h2>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item.id, -1)}
          className="bg-red-300 px-2 rounded"
        >
          -
        </button>
        <span className="px-2">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, 1)}
          className="bg-green-300 px-2 rounded"
        >
          +
        </button>
      </div>
      <p className="w-20 text-right">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-4 text-red-700 hover:bg-red-700 hover:text-white rounded-md px-3 py-1"
      >
        Remove
      </button>
    </div>
  );
};
export default CartItem;
