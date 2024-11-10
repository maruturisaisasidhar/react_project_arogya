// CreateAccount.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Make a POST request to the signup endpoint
      await axios.post("http://localhost:5000/api/auth/signup", {
        username,
        password,
      });
      navigate("/"); // Redirect to login page after signup success
    } catch (error) {
      console.error(
        error.response ? error.response.data.message : error.message
      );
      alert(error.response ? error.response.data.message : "An error occurred"); // Show error message to user
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>{" "}
        {/* Use Link here too */}
      </p>
    </div>
  );
};

export default CreateAccount;
