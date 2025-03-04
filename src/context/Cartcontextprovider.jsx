import React, { useState, useContext } from "react";
import CartContext from "./Cartcontext"; // Ensure the correct casing of the file name

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add products to the cart
  const addProduct = (productItem) => {
    setCart([...cart, productItem]);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
