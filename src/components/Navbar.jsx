import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-[linear-gradient(45deg,rgba(36,36,36,0.05)_0%,rgba(36,36,36,0.05)_4%,rgba(22,22,22,0.05)_4%,rgba(22,22,22,0.05)_100%),linear-gradient(45deg,rgba(60,60,60,0.1)_0%,rgba(60,60,60,0.1)_29%,rgba(96,96,96,0.1)_29%,rgba(96,96,96,0.1)_100%),linear-gradient(90deg,rgba(222,222,222,0.1)_0%,rgba(222,222,222,0.1)_35%,rgba(109,109,109,0.1)_35%,rgba(109,109,109,0.1)_100%),linear-gradient(0deg,rgba(206,206,206,0.09)_0%,rgba(206,206,206,0.09)_14%,rgba(10,10,10,0.09)_14%,rgba(10,10,10,0.09)_100%),linear-gradient(135deg,rgba(234,234,234,0.06)_0%,rgba(234,234,234,0.06)_15%,rgba(18,18,18,0.06)_15%,rgba(18,18,18,0.06)_100%),linear-gradient(90deg,rgba(237,237,237,0.01)_0%,rgba(237,237,237,0.01)_55%,rgba(206,206,206,0.01)_55%,rgba(206,206,206,0.01)_100%),linear-gradient(90deg,hsl(200,100%,36%),hsl(200,100%,36%))] fixed w-full text-white px-2 md:px-6 py-8 mt-0 flex justify-between items-center">
      <h1 className="text-3xl font-bold">
        <Link to="/">Shopsy &#128722;</Link>
      </h1>
      <div className="space-x-3 md:space-x-6">
        <Link to="/" className="hover:text-lime-400">
          Products
        </Link>
        <Link to="/cart" className="hover:text-lime-400">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
