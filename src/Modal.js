import React, { useState } from "react";
import Modal from "react-modal";
import ProductList from "./ProductList";
import { useCart } from "./context/CartContextProvider";

const AddProductModal = ({ isOpen, onRequestClose, onSave }) => {
      const { products, cart, addProduct, addToCart, removeFromCart } = useCart();
      console.log(products);
      console.log("products is ");
    let [inputValue, setInputValue] = useState("");
    let [inputNumber, setInputNumber] = useState(0);
    const handleKeyPress = (e) => {
        onSave({
            name: inputValue,
            price: inputNumber
        })
        onRequestClose(false)
        // if (e.key === "Enter") {
        // }
    };
    if (!isOpen) return null;
    return (
        <div>
            <Modal isOpen={isOpen} onRequestClose={(val) =>onRequestClose(val)} contentLabel="Example Modal">
                <button onClick={onRequestClose} style={{ display: "flex", float: "right" }}>Close</button>
                <h2>Add Products here</h2>
                <input
                    className="input-text"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    // onKeyDown={handleKeyPress}
                    placeholder="Enter a new Product..."
                />
                <input
                    className="input-text"
                    type="number"
                    value={inputNumber}
                    onChange={(e) => setInputNumber(e.target.value)}
                    // onKeyDown={handleKeyPress}
                    placeholder="Enter a Price"
                />
                <button disabled={!inputNumber || !inputValue} onClick={handleKeyPress}>Add Product</button>
                <br></br>
                <ProductList products={products} addToCart={addToCart} />
                </Modal>
        </div>
    );
};

export default AddProductModal;