import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (input.trim() !== "") {
      const userMessage = { text: input, sender: "user" };
      setMessages([...messages, userMessage]);
      setInput("");

      // Call the chatbot API
      try {
        const response = await fetch("https://api.example.com/chatbot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_API_KEY", // Replace YOUR_API_KEY with your actual key
          },
          body: JSON.stringify({ message: input }),
        });

        const data = await response.json();
        const botMessage = {
          text: data.reply || "Sorry, I can't respond to that yet.",
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        const errorMessage = {
          text: "Something went wrong. Please try again later.",
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
