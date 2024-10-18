import React, { useState } from "react";
import "./LoginForm.css"; // Add your styles here

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setError({ email: "", password: "" });

    let isValid = true;

    // Simple email validation
    if (!validateEmail(email)) {
      setError((prevError) => ({
        ...prevError,
        email: "Please enter a valid email address.",
      }));
      isValid = false;
    }

    // Check if password is too short
    if (password.length < 6) {
      setError((prevError) => ({
        ...prevError,
        password: "Password must be at least 6 characters long.",
      }));
      isValid = false;
    }

    // Perform authentication if validation passes
    if (isValid) {
      if (email === "user@example.com" && password === "password") {
        setMessage("Login Successful!");
      } else {
        setMessage("Invalid credentials, please try again.");
      }
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error.email ? "input-error" : ""}
            required
          />
          {error.email && <span className="error-text">{error.email}</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error.password ? "input-error" : ""}
            required
          />
          {error.password && (
            <span className="error-text">{error.password}</span>
          )}
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default LoginForm;
