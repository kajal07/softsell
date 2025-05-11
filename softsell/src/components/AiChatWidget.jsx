// components/ChatWidget.js
import React, { useState } from 'react';
import '../assets/chatwidget.css'

const predefinedResponses = {
  "how do I sell my license": "You can upload your license using our contact form, and we'll provide a valuation shortly.",
  "what licenses do you accept": "We accept a wide range of enterprise software licenses like Microsoft, Adobe, Oracle, and more.",
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    const userMessage = input.toLowerCase();
    const botResponse = predefinedResponses[userMessage] || "Sorry, I didn't understand that. Please contact support.";

    setMessages([...messages, { from: 'user', text: input }, { from: 'bot', text: botResponse }]);
    setInput("");
  };

  return (
    <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
      <button className="chat-toggle btn btn-primary" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>
      {isOpen && (
        <div className="chat-box shadow">
          <div className="chat-header">SoftSell Assistant</div>
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask something..."
            />
            <button className="btn btn-success" onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
