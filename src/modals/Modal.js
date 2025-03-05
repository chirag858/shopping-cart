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
        setInputCategoryValue("");
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
            <div style={{display : "flex", justifyContent :"space-between", width : "1300px"}}>
            <div style={{display : "flex", justifyContent :"space-between", width : "100%"}}>
            <input
                className="input-text"
                type="text"
                style={{width : "300px",height : "20px"}}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a product name..."
            />
            <input
                className="input-text"
                type="text"
                style={{width : "300px",height : "20px"}}
                value={inputCategoryValue}
                onChange={(e) => setInputCategoryValue(e.target.value)}
                placeholder="Catgory"
            />
            <input
                className="input-text"
                type="number"
                style={{width : "300px",height : "20px"}}
                value={inputNumber}
                onChange={(e) => setInputNumber(e.target.value)}
                placeholder="Enter a price"
            />
            </div>
            <div style={{display : "flex", justifyContent : "space-around" , width : "300px"}} >
            <button
                disabled={!inputValue || !inputNumber || !inputCategoryValue}
                onClick={handleSave}
            >
                Add Product
            </button>
            </div>
            </div>
            <br />
            <ProductList products={products} addToCart={addToCart} onlyList />
        </Modal>
    );
};

export default AddProductModal;
