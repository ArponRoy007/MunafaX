import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";

function Signup() {
  const navigate = useNavigate(); // ✅ must be inside component

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://munafax-api-by-roy.onrender.com/signup", formData);

      // Save authentication data to the Frontend's localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", formData.email);

      // ✅ FIX: Send the email and token in the URL to the Dashboard
      window.location.href = `https://munafax-dashboard-by-roy.onrender.com/?email=${formData.email}&token=${res.data.token}`;
      
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  
  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Create your Account
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            autoFocus
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#4184f3" }}
          >
            Sign Up
          </Button>

          <Box sx={{ textAlign: "center" }}>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#4184f3",
                fontSize: "0.9rem",
              }}
            >
              Create account and when you Logout our data will be Deleted.
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Signup;
