import React, { useState } from "react";
import ProductList from "./ProductList";
import { useCart } from "./context/CartContextProvider";
import { Box, Typography, Container } from "@mui/material";

const Products = () => {
  const [onlyList, setOnlyList] = useState(true);
  const { products, cart, addProduct, addToCart, removeFromCart } = useCart();

  return (
    <Container maxWidth="md" sx={{ py: 4, px: { xs: 2, sm: 4 } }}>
      <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
        Product List
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="semibold" gutterBottom>
          Who We Are
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome to ShopEase, your number one source for all things fashion and lifestyle.
          We're dedicated to providing you the best shopping experience, with a focus on quality,
          affordability, and customer satisfaction.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="semibold" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Our mission is to make shopping easy and enjoyable for everyone. We strive to bring
          the latest trends and premium products to our customers at the best prices.
        </Typography>
      </Box>

      <ProductList products={products} addToCart={addToCart} onlyList={onlyList} />
    </Container>
  );
};

export default Products;