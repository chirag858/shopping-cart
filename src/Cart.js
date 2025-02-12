import React from "react";

function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  if (!cartItems.length) {
    return <p>Your cart is empty.</p>
  }

  return (
    <div>
      <h2>🛍️ Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "10px", color: "red" }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
}

export default Cart;
