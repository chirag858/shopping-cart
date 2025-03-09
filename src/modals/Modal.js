import React, { useState } from "react";
import Modal from "react-modal";
import ProductList from "../ProductList";
import { useCart } from "../context/CartContextProvider";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


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
            images: ProductImages
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
            <Button
                onClick={onRequestClose}
                style={{ display: "flex", float: "right" }}
            >
                Close
            </Button>
            <h2>Add Products</h2>
            <div style={{ display: "flex", justifyContent: "space-between", width: "1350px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <TextField
                        className="input-text"
                        type="text"
                        style={{ width: "250px", height: "25px" }}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter a product name..."
                    />
                    <FormControl >
                    <InputLabel id="demo-simple-select-label" style={{color: "#A2A2A2"}}>Categories</InputLabel>

                    <Select
                        className="input-select"
                        style={{ width: "250px", height: "57px" }}
                        value={inputCategoryValue}
                        label="Categories"
                        onChange={(e) => setInputCategoryValue(e.target.value)}
                    >
                        <MenuItem value="">Select Category</MenuItem>
                        <MenuItem value="Electronics">Electronics</MenuItem>
                        <MenuItem value="Cosmetics">Cosmetics</MenuItem>
                        <MenuItem value="HouseHold">HouseHold</MenuItem>
                    </Select>
                    </FormControl>
                    <TextField
                        className="input-text"
                        type="number"
                        style={{ width: "250px", height: "25px" }}
                        value={inputNumber}
                        onChange={(e) => setInputNumber(e.target.value)}
                        placeholder="Enter a price"
                    />
                    <div style={{ position: "relative", width: "250px" }}>
                        <Button
                            htmlFor="file-upload"
                            style={{
                                display: "block",
                                width: "100%",
                                height: "55px",
                                lineHeight: "25px",
                                textAlign: "center",
                                border: "1px solid #B9B8B8",
                                cursor: "pointer",
                                fontSize: "14px",
                                color: "#A2A2A2"
                            }}
                        >
                            Add Images
                        </Button>
                        <TextField
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
                            onChange={(e) => setProductImages((prevImage) => [...prevImage, ...e.target.files])}
                        />
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", width: "300px" }} >
                    <Button
                        disabled={!inputValue || !inputNumber || !inputCategoryValue}
                        onClick={handleSave}
                    >
                        Add Product
                    </Button>
                </div>
            </div>
            <br />
            <ProductList products={products} addToCart={addToCart} onlyList />
        </Modal>
    );
};

export default AddProductModal;
