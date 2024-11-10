// LoginForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom"; // Import Link for navigation

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        }
      );
      console.log("API Response:", response); // Log the entire response
      localStorage.setItem("token", response.data.token); // Store token in local storage
      navigate("/home"); // Redirect to home page
    } catch (error) {
      console.error("Error during login:", error); // Log the error for debugging
      alert(error.response ? error.response.data.message : "An error occurred"); // Show error message to user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/CreateAccount">Sign up</Link>{" "}
        {/* Use Link instead of a */}
      </p>
    </div>
  );
};

export default LoginForm;
