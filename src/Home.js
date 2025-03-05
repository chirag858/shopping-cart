import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import AddProductModal from "./modals/Modal";
import { useCart } from "./context/CartContextProvider";

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { products, cart, addProduct, addToCart, removeFromCart } = useCart();

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleSaveProduct = (newProduct) => {
    addProduct(newProduct); // Adds the product globally
    setModalIsOpen(false); // Close modal after saving
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>🛒 Shopping Cart 🛒</h1>
      <button className="add-product-button" onClick={() => setModalIsOpen(true)}>
        Add Products
      </button>
      <AddProductModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Add Product Modal"
        onSave={handleSaveProduct}
      />
      <ProductList products={products} addToCart={addToCart} onlyList={false} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default Home;
