import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Profile from "./components/Profile";
import Cover from "./components/Cover";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import Chatbot from "./components/Chatbot";
import CreateAccount from "./components/CreateAccount";
import ChatbotIcon from "./components/ChatbotIcon"; // Import ChatbotIcon

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Ensure ChatbotIcon appears on every page */}
        <ChatbotIcon />

        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/services" element={<Services />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
