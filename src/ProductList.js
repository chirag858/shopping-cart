import React from "react";

function ProductList({ products, addToCart , onlyList }) {
  return (
    <div className="product-list-container">
      <h2 className="product-list-header">📦 Products 📦</h2>
      <ul className="product-list">
        {Array.isArray(products) && products.map((product) => (
          <li key={product.id} className="product-item">
            <span className="product-name">{product.name}</span>
            <span className="product-price">${product.price}</span>
            {/* <button className="add-to-cart-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button> */}
            {!onlyList && (
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              )}

          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;