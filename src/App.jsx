import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

const App = () => {
  const [cart, setCart] = useState([]);

  // ✅ Add / Remove Item
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // ✅ Remove Item
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // ✅ Update Quantity
  const updateQuantity = (id, change) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

return (
    <div className="p-[0.1px]">
      <BrowserRouter>
        <div>
          <Navbar cartCount={cart.length} />
        </div>
        <Routes>
          {/* Products page */}
          <Route
            path="/"
            element={
              <ProductsPage
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          {/* Cart page */}
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          {/* Page not found page */}
          <Route
            path="*"
            element={
              <div className="mt-20">
                <img src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg?semt=ais_hybrid&w=740&q=80" alt="error" className="mx-auto" />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
