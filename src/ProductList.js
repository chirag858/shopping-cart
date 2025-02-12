import React, { useState } from "react";
import AddProductModal from "./Modal";

function ProductList({ products, addToCart }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
        <button onClick={() => setModalIsOpen(true)}>Add Products</button>
      <h2>📦 Products 📦</h2>
      <div className="p-10">
        <AddProductModal isOpen={modalIsOpen} onRequestClose={() => { console.log("lollll"); setModalIsOpen(false) }} contentLabel="Example Modal" />

      </div>      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)} style={{ marginLeft: "10px" }}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
