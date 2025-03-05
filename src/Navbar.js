import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center" style={{display : "flex" , width : "1500px"}}>
        <h1 className="text-white text-2xl font-extrabold" style={{marginLeft : "15px"}}>ShopEase</h1>
        <ul className="flex space-x-6"style={{display : "flex" , width : "80%" , justifyContent : "space-between", marginTop : "30px"}}>
          <li>
            <Link to="/" className="text-white text-lg font-medium hover:text-gray-300 transition duration-300" style={{color : "blue"}}>Home</Link>
          </li>
          <li>
            <Link to="/aboutus" className="text-white text-lg font-medium hover:text-gray-300 transition duration-300">About Us</Link>
          </li>
          <li>
            <Link to="/products" className="text-white text-lg font-medium hover:text-gray-300 transition duration-300">Products</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white text-lg font-medium hover:text-gray-300 transition duration-300">Contact</Link>
          </li>
        </ul>
        <img src="https://customsbuckets.s3.us-west-2.amazonaws.com/0a954356-6f6a-4254-a1c1-a98891778415-_AVR8620.png" style={{width: "50px",height : "50px", borderRadius:"100%" , marginLeft : "50px"}}/>

      </div>
    </nav>
  );
};

export default Navbar;
