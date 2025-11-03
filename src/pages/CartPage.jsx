import React from "react";
import CartItem from "../components/CartItem";

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = total * 0.1;
  const finalTotal = total - discount;

  return (
    <div className="max-w-3xl mx-auto mt-15">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          ))}

          <div className="mt-6 border-t text-center pt-4">
            <p>Total: ${total.toFixed(2)}</p>
            <p>Discount (10%): -${discount.toFixed(2)}</p>
            <p className="font-bold text-lg">
              Final Total: ${finalTotal.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
