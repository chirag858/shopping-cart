import React, { useState } from "react";
// import AddProductModal from "./Modal";

function ProductList({ products, addToCart }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="product-list-container">
      <h2 className="product-list-header">📦 Products 📦</h2>
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