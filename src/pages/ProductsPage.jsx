import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductsPage = ({ cart, addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3  bg-[#bbd0fa] lg:grid-cols-4 gap-6 p-4 mt-23">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
