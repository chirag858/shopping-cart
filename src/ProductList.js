import React from "react";
import { Typography, Box, Button } from "@mui/material";

function ProductList({ products, addToCart, onlyList }) {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", textAlign: "center", p: 3 }}>
      <Typography variant="h4" fontWeight="700" color="primary" mb={3}>
        📦 Products 📦
      </Typography>

      <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
        {Array.isArray(products) &&
          products.map((product) => (
            <Box
              component="li"
              key={product.id}
              sx={{
                p: 2,
                mb: 1.5,
                borderRadius: 1,
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
                boxShadow: 1,
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6" fontWeight="600">
                  {product.name}
                </Typography>
                <Typography variant="h6" fontWeight="600" color="success.main">
                  ${product.price}
                </Typography>
              </Box>

              {!onlyList && (
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              )}
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default ProductList;