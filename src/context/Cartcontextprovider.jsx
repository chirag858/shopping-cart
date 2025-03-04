import React, { useState } from "react";
import Cartcontext from "./Cartcontext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add products to the cart
  const addProduct = (productItem) => {
    setCart([...cart, productItem]);
  };

  return (
    <Cartcontext.Provider value={{ cart, addProduct }}>
      {children}
    </Cartcontext.Provider>
  );
};
export const useCart = () => useContext(Cartcontext);
