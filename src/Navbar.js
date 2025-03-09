import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Avatar, Stack, Box, Button } from "@mui/material";

const Navbar = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/aboutus", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(to right,rgb(0, 0, 0),rgb(0, 0, 0))",
        boxShadow: 3,
      }}
    >
      <Toolbar sx={{  width: "100%" }}>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 ,paddingLeft: "26px" ,maxWidth:"850px"}}>
          <Avatar
            src="https://ultragyms3.s3.ap-south-1.amazonaws.com/portl%2Fimages%2F4c6f86c4-283e-40cf-b055-2864a048337a-shopping.png"
            alt="ShopEase Logo"
            sx={{ width: 50, height: 50, borderRadius: "2%", mr: 2 }}
          />
          <Typography variant="h5" fontWeight="bold" color="white" >
            ShopEase
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 5, mx: 2 }}>
          {navItems.map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={item.to}
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "medium",
                "&:hover": { color: "grey.300" },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* User Avatar */}
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="User"
            src="https://ultragyms3.s3.ap-south-1.amazonaws.com/portl%2Fimages%2F39646165-c2ef-4be2-8c1e-acd989f9525a-blue-circle-with-white-user_78370-4707.jpg"
            sx={{ width: 50, height: 50 }}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;