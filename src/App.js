import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import AboutUs from "./Aboutus.js";
import Navbar from "./Navbar"; // Adjust the path as needed
import Products from "./Products.js";
import Sidebar from "./sidepanel.js";
import Categories from "./Categories.js";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ display: "flex", height: "628px" }}>
        <Sidebar flex={"0.2"} height={"628px"} />
        <div
          style={{
            flex: "0.9",
            overflowY: "scroll",
            padding: "16px",
            scrollbarWidth: "thin", // For Firefox
            scrollbarColor: "#888 transparent", // For Firefox
          }}
          className="custom-scrollbar" // Add a class for custom scrollbar styling
        >
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/aboutus" exact element={<AboutUs />} />
            <Route path="/products" exact element={<Products />} />
            <Route path="/Categories" exact element={<Categories />} />
          </Routes>
        </div>
      </div>

      {/* Add custom scrollbar styles */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px; /* Width of the scrollbar */
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent; /* Track color */
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #888; /* Thumb color */
            border-radius: 4px; /* Rounded corners */
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #555; /* Thumb color on hover */
          }
        `}
      </style>
    </Router>
  );
}

export default App;