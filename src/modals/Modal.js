import React, { useState } from "react";
import Modal from "react-modal";
import ProductList from "../ProductList";
import { useCart } from "../context/CartContextProvider";

const AddProductModal = ({ isOpen, onRequestClose, onSave }) => {
    const { products, addToCart } = useCart();
    const [inputValue, setInputValue] = useState("");
    const [inputCategoryValue, setInputCategoryValue] = useState("");
    const [inputNumber, setInputNumber] = useState("");

    const handleSave = () => {
        onSave({
            name: inputValue,
            category: inputCategoryValue,
            price: parseFloat(inputNumber) || 0,
        });
        setInputValue("");
        setInputNumber("");
    };

    if (!isOpen) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Add Product Modal"
        >
            <button
                onClick={onRequestClose}
                style={{ display: "flex", float: "right" }}
            >
                Close
            </button>
            <h2>Add Products</h2>
            <div style={{display : "flex", justifyContent :"space-between", width : "800px"}}>
            <input
                className="input-text"
                type="text"
                style={{width : "320px",height : "20px"}}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a product name..."
            />
            <input
                className="input-text"
                type="text"
                style={{width : "320px",height : "20px"}}
                value={inputCategoryValue}
                onChange={(e) => setInputCategoryValue(e.target.value)}
                placeholder="Catgory"
            />
            <input
                className="input-text"
                type="number"
                style={{width : "320px",height : "20px"}}
                value={inputNumber}
                onChange={(e) => setInputNumber(e.target.value)}
                placeholder="Enter a price"
            />
            <button
                disabled={!inputValue || !inputNumber}
                onClick={handleSave}
            >
                Add Product
            </button>
            </div>
            <br />
            <ProductList products={products} addToCart={addToCart} onlyList />
        </Modal>
    );
};

export default AddProductModal;
