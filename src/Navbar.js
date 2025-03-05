import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center" style={{display : "flex" , width : "1534px" , backgroundColor : "Black"}}>
      <img src="https://ultragyms3.s3.ap-south-1.amazonaws.com/portl%2Fimages%2F4c6f86c4-283e-40cf-b055-2864a048337a-shopping.png" style={{width: "50px",height : "50px", borderRadius:"2%" , marginLeft : "50px",marginTop : "10px"}}/>
        <h1 className="text-white text-2xl font-extrabold" style={{marginLeft : "15px",color : "white"}}>ShopEase</h1>
        <ul className="flex space-x-6"style={{display : "flex" , width : "80%" , justifyContent : "space-between", marginTop : "30px",textDecoration: "none"}}>
          <li>
            <Link to="/" className="text-white text-lg font-medium hover:text-gray-300 transition duration-300" style={{color : "white",textDecoration: "none"}}>Home</Link>
          </li>
          <li>
            <Link to="/aboutus" className="text-white text-lg font-medium hover:text-gray-300 transition duration-300"style={{color : "white",textDecoration: "none"}}>About Us</Link>
          </li>
          <li>
            <Link to="/products" className="text-white text-lg font-medium hover:text-gray-300 transition duration-300"style={{color : "white",textDecoration: "none"}}>Products</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white text-lg font-medium hover:text-gray-300 transition duration-300"style={{color : "white",textDecoration: "none"}}>Contact</Link>
          </li>
        </ul>
        <img src="https://ultragyms3.s3.ap-south-1.amazonaws.com/portl%2Fimages%2F39646165-c2ef-4be2-8c1e-acd989f9525a-blue-circle-with-white-user_78370-4707.jpg" style={{width: "50px",height : "50px", borderRadius:"100%" , marginRight : "20px",marginLeft : "20px",marginTop : "10px"}}/>

      </div>
    </nav>
  );
};

export default Navbar;
