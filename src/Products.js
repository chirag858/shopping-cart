import React, { useState } from "react";
import ProductList from "./ProductList";
import { useCart } from "./context/CartContextProvider";

const Products = () => {
  let [onlyList, setOnlyList] = useState(true);
  const { products, cart, addProduct, addToCart, removeFromCart } = useCart();
  return (
    <div className="max-w-4xl mx-auto p-6" style={{  paddingLeft : "50px"}}>
      <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Who We Are</h2>
        <p className="text-gray-700 mt-2">
          Welcome to ShopEase, your number one source for all things fashion and lifestyle.
          We're dedicated to providing you the best shopping experience, with a focus on quality,
          affordability, and customer satisfaction.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-gray-700 mt-2">
          Our mission is to make shopping easy and enjoyable for everyone. We strive to bring
          the latest trends and premium products to our customers at the best prices.
        </p>
      </section>
      <ProductList products={products} addToCart={addToCart} onlyList={onlyList} />

    </div>
  );
};

export default Products;
