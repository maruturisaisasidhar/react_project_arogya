import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import arogya from "../assets/arogya.jpg";

const Navbar = () => {
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login form route
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={arogya} alt="Arogya Logo" className="logo-image" />
        </div>
        <h1>Aarogya Selfcare & Diagnosis</h1>
        <ul>
          <li className="in1">
            <Link to="/Home">Home</Link>
          </li>
          <li className="in2">
            <Link to="/services">Services</Link>
          </li>
          <li className="in3">
            <Link to="/about">About</Link>
          </li>
          <li className="in4">
            <Link to="/profile">
              <i className="fas fa-user-circle fa-3x profile-icon"></i>
            </Link>
          </li>
          <li>
            <button onClick={handleLoginClick} className="login">
              Login
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
