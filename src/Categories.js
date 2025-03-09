import React from "react";
import { IoIosAddCircle } from "react-icons/io";

const Categories = () => {
    return (
        <div className="max-w-4xl mx-auto p-6" style={{ paddingLeft: "50px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1 className="text-3xl font-bold text-center mb-6">Categories List</h1>
                <IoIosAddCircle style={{ marginTop: "35px", cursor: "pointer" }} size={32} />
            </div>
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
                <p className="text-gray-700 mt-2"> Categories and Categories
                    Our mission is to make shopping easy and enjoyable for everyone. We strive to bring
                    the latest trends and premium products to our customers at the best prices.
                </p>
            </section>
            {/* <ProductList products={products} addToCart={addToCart} onlyList={onlyList} /> */}

        </div>
    );
};

export default Categories;
