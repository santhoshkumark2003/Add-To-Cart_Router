import React from "react";

const ProductCard = ({ product, cart, addToCart }) => {
  const inCart = cart.some((item) => item.id === product.id);
  return (
    <div className="border rounded-lg shadow p-4 flex flex-col justify-between bg-[#5a9aa0]">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-3 "
      />
      <h2 className="font-semibold text-sm mb-2 text-center">
        {product.title}
      </h2>
      <p className="text-gray-600 text-xs mb-2 text-center">
        {product.description.slice(0, 80)}...
      </p>
      <p className="font-bold mb-3 text-center">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className={`${
          inCart
            ? "bg-[radial-gradient(circle_at_center_center,rgb(241,195,19),rgb(244,150,32),rgb(246,105,45),rgb(249,59,57),rgb(251,14,70))]"
            : "bg-[radial-gradient(circle_at_center_center,rgb(15,78,199),rgb(21,67,172),rgb(27,56,145),rgb(33,44,118),rgb(39,33,91))]"
        } text-white px-3 py-2 rounded hover:opacity-90`}
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
