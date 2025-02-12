import React, { useState } from "react";
import Modal from "react-modal";

const AddProductModal = ({ isOpen, onRequestClose }) => {
    let [modalIsOpen, setModalIsOpen] = useState(false);
    let [inputValue, setInputValue] = useState("");
    let [inputNumber, setInputNumber] = useState(0);
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
        }
    };
    if (!isOpen) return null;
    return (
        <div>
            <Modal isOpen={isOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Example Modal">
                <button onClick={() => onRequestClose()} style={{ display: "flex", float: "right" }}>Close</button>
                <h2>Add Products here</h2>
                <input
                    className="input-text"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Enter a new Product..."
                />
                <input
                    className="input-text"
                    type="number"
                    value={inputNumber}
                    onChange={(e) => setInputNumber(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Enter a Price"
                />
                <button disabled={!inputNumber || !inputValue} onClick={handleKeyPress}>Add Product</button>
                <br></br>
            </Modal>
        </div>
    );
};

export default AddProductModal;