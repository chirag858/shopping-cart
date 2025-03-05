import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import AboutUs from "./Aboutus.js";
import Navbar from "./Navbar"; // Adjust the path as needed
import Products from "./Products.js";
import Sidebar from "./sidepanel.js";

function App() {
  return (
      <Router>
        <Navbar />
        <div style={{display : "flex" , height: "630px"}}>
        <Sidebar flex={"0.2"}  height={"630px"} />
        <div className="container mx-auto p-4" style={{flex:"0.8"}}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/aboutus" exact element={<AboutUs />} />
            <Route path="/products" exact element={<Products />} />
          </Routes>
        </div>
        </div>
      </Router>
  );
}

export default App;
