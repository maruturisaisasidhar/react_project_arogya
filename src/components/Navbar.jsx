// Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import arogya from "../assets/arogya.jpg";
import icon from "../assets/icon.jpg";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <img src={arogya} alt="Arogya Logo" className="logo-image" />
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
            <img src={icon} alt="profile icon" className="profile-icon-img" />
          </Link>
        </li>
        <li>
          <button onClick={handleLoginClick} className="login">
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
