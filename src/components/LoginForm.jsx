import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoginForm.css"; // Link to the CSS file you provided

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., authentication, API calls)
    console.log("Email:", email);
    console.log("Password:", password);

    // Redirect to the chatbot page
    navigate("/chatbot"); // Redirect to the chatbot page
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome to Arogya!</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="actions">
            <div className="remember-me">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="/" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <div className="signup-section">
          <p>
            New on our platform?{" "}
            <a href="#" onClick={() => navigate("/create-account")}>
              Create an account
            </a>
          </p>
        </div>
        <div className="social-login">
          <p>or</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-google"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
