import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import AboutUs from "./Aboutus.js";

function App() {
  return ( <Router>
      <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/aboutus" exact element={<AboutUs/>} />
      </Routes>

    </Router>
  
  );
}

export default App;
