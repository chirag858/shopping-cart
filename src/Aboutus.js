import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6" style={{  paddingLeft : "50px"}}>
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>

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

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Wide range of high-quality products</li>
          <li>Affordable pricing and great deals</li>
          <li>Fast and reliable delivery</li>
          <li>Excellent customer support</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="text-gray-700 mt-2">
          Have any questions? We'd love to hear from you! Reach out to us at:
        </p>
        <p className="text-blue-600 mt-1">support@shopease.com</p>
      </section>
    </div>
  );
};

export default AboutUs;
