import React from "react";
import { useNavigate } from "react-router-dom";
import icon from "../assets/chatbot.png";
import "./ChatbotIcon.css";

const ChatbotIcon = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chatbot");
  };

  return (
    <div>
      <img
        className="chatboticon"
        src={icon}
        alt="Chatbot Icon"
        onClick={handleClick}
      />
    </div>
  );
};

export default ChatbotIcon;
