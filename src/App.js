import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import AboutUs from "./Aboutus.js";
import Navbar from "./Navbar"; // Adjust the path as needed
import Products from "./Products.js";

function App() {
  return (
      <Router>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/aboutus" exact element={<AboutUs />} />
            <Route path="/products" exact element={<Products />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
