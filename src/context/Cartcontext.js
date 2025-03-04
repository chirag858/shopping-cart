import React from "react";
const cartContext = React.createContext();
export default cartContext;

// import React, { createContext, useContext, useState } from "react";

// // Create Context
// const CartContext = createContext();

// // Provider Component
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // Function to add products to the cart
//   const addProduct = (productItem) => {
//     setCart([...cart, productItem]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addProduct }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);