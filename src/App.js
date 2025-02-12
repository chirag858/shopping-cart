import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import AddProductModal from "./Modal";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [products,setProducts] = useState([
    
  ])

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]); 
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };
  const handleClose = (val)=>{
    
    setModalIsOpen(false);
  }
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>🛒 Shopping Cart 🛒</h1>
      <button className="add-product-button" onClick={() => setModalIsOpen(true)}>
        Add Products
      </button>
      
      <AddProductModal
          isOpen={modalIsOpen}
          onRequestClose={handleClose}
          contentLabel="Example Modal"
          onSave={val => setProducts(prev => ([...prev,{
            id:products.length +1,
            name:val.name,
            price:val.price
          }]))}
        />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
