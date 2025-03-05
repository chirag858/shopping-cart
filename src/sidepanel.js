import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (flexValue, heightValue) => {
    return (
        <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg" style={{ flex: flexValue }}>
            <div className="max-w-6xl mx-auto flex justify-between items-center" style={{ display: "flex", heigth: "500px", width: "234px", backgroundColor: "Black" }}>
                <h1 className="text-white text-2xl font-extrabold" style={{ marginLeft: "15px", color: "white" }}></h1>
                <ul className="flex justify-between w-4/5 h-[585px] mt-[30px]" style={{ width: "80%", height: "585px",  marginTop: "30px", textDecoration: "none" }}>
    {[
        { to: "/", label: "Dashboard" },
        { to: "/aboutus", label: "Orders" },
        { to: "/products", label: "Categories" },
        { to: "/analytics", label: "Analytics" },
        { to: "/reports", label: "Reports" },
        { to: "/promocode", label: "Promo Code" },
        { to: "/logout", label: "Logout" }
    ].map((item, index) => (
        <li key={index} style={{height: "55px"}}>
            <Link 
                to={item.to} 
                className="text-white text-lg font-medium hover:text-gray-300 transition duration-300"
                style={{ textDecoration: "none", fontSize: "large", color: "White" }}
            >
                {item.label}
            </Link>
        </li>
    ))}
</ul>


            </div>
        </nav>
    );
};

export default Sidebar;
