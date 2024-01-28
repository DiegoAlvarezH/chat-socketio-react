import React, { useState } from "react";

const Chat = ({ nick }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = () => {
    // Puedes implementar la lógica para enviar el mensaje al servidor aquí
  };

  return (
    <div>
      <div>
        <strong>{nick}</strong>: Bienvenido al chat
      </div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.from}:</strong> {msg.body}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleMessageSubmit}>Enviar mensaje</button>
      </div>
    </div>
  );
};

export default Chat;
