import React , {useState} from "react";
import Modal from "react-modal";

const AddProductModal = ({ isOpen, onRequestClose }) => {
    let [modalIsOpen,setModalIsOpen] = useState(false);
    console.log(isOpen);
    // setModalIsOpen(isOpen);
    console.log("hjdhsdh");

    if (!isOpen) return null;
    return (
        <Modal isOpen={isOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Example Modal">
                <h2>Modal Title</h2>
                <p>Modal content goes here...</p>
                <button onClick={() => onRequestClose()}>Close</button>
              </Modal>
    );
};

export default AddProductModal;