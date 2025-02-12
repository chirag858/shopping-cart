import React, { useState } from "react";
import AddProductModal from "./Modal";

function ProductList({ products, addToCart }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="product-list-container">
      <button className="add-product-button" onClick={() => setModalIsOpen(true)}>
        Add Products
      </button>
      <h2 className="product-list-header">📦 Products 📦</h2>
      <div className="modal-container">
        <AddProductModal
          isOpen={modalIsOpen}
          onRequestClose={() => {
            console.log("lollll");
            setModalIsOpen(false);
          }}
          contentLabel="Example Modal"
        />
      </div>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <span className="product-name">{product.name}</span>
            <span className="product-price">${product.price}</span>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;