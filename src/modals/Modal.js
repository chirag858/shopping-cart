import React, { useState } from "react";
import Modal from "react-modal";
import ProductList from "../ProductList";
import { useCart } from "../context/CartContextProvider";

const AddProductModal = ({ isOpen, onRequestClose, onSave }) => {
    const { products, addToCart } = useCart();
    const [inputValue, setInputValue] = useState("");
    const [inputCategoryValue, setInputCategoryValue] = useState("");
    const [inputNumber, setInputNumber] = useState("");
    const [ProductImages, setProductImages] = useState([]);

    const handleSave = () => {
        onSave({
            name: inputValue,
            category: inputCategoryValue,
            price: parseFloat(inputNumber) || 0,
            images : ProductImages
        });
        console.log(ProductImages);
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
            <div style={{ display: "flex", justifyContent: "space-between", width: "1350px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <input
                        className="input-text"
                        type="text"
                        style={{ width: "250px", height: "25px" }}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter a product name..."
                    />
                    <select
                        className="input-select"
                        style={{ width: "250px", height: "30px" }}
                        value={inputCategoryValue}
                        onChange={(e) => setInputCategoryValue(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Cosmetics">Cosmetics</option>
                        <option value="HouseHold">HouseHold</option>
                    </select>
                    <input
                        className="input-text"
                        type="number"
                        style={{ width: "250px", height: "25px" }}
                        value={inputNumber}
                        onChange={(e) => setInputNumber(e.target.value)}
                        placeholder="Enter a price"
                    />
                    <div style={{ position: "relative", width: "250px" }}>
                        <label
                            htmlFor="file-upload"
                            style={{
                                display: "block",
                                width: "100%",
                                height: "30px",
                                lineHeight: "25px",
                                textAlign: "center",
                                border: "1px solid Black",
                                cursor: "pointer",
                                fontSize: "14px",
                                color: "#555"
                            }}
                        >
                            Add Images
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            multiple
                            accept="image/*"
                            className="input-file"
                            style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                opacity: "0",
                                cursor: "pointer",
                            }}
                            onChange={(e) => setProductImages((prevImage) => [...prevImage,...e.target.files])}
                        />
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", width: "300px" }} >
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
