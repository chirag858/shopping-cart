import React from "react";
import { Typography, Box, Button, List, ListItem, ListItemText, Divider } from "@mui/material";

function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((total, item) => total + Number(item.price), 0);

  if (!cartItems.length) {
    return (
      <Typography variant="body1" align="center" sx={{ mt: 2 }}>
        Your cart is empty.
      </Typography>
    );
  }

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        🛍️ Your Cart
      </Typography>

      <List>
        {Array.isArray(cartItems) &&
          cartItems.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem>
                <ListItemText
                  primary={item.name}
                  secondary={`$${item.price}`}
                />
                <Button
                  onClick={() => removeFromCart(item.id)}
                  sx={{ color: "error.main", ml: 2 }}
                >
                  Remove
                </Button>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
      </List>

      <Typography variant="h6" fontWeight="bold" align="right" sx={{ mt: 2 }}>
        Total: ${totalPrice.toFixed(2)}
      </Typography>
    </Box>
  );
}

export default Cart;