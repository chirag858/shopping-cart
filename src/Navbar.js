import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-extrabold">ShopEase</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white text-lg font-medium hover:text-gray-300 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white text-lg font-medium hover:text-gray-300 transition duration-300">About Us</Link>
          </li>
          <li>
            <Link to="/products" className="text-white text-lg font-medium hover:text-gray-300 transition duration-300">Products</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white text-lg font-medium hover:text-gray-300 transition duration-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
