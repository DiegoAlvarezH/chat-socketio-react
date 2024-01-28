import React from "react";

const MessageInput = ({ message, setMessage, handleSubmit, placeholder }) => {
  return (
    <form onSubmit={handleSubmit} className="bg-zinc-900 p-4">
      <input
        name="message"
        type="text"
        placeholder={placeholder}
        onChange={(e) => setMessage(e.target.value)}
        className="border-2 border-zinc-500 p-2 w-full text-black"
        value={message}
        autoFocus
      />
      <button type="submit" className="bg-blue-500 text-white p-2 ml-2">
        Enviar
      </button>
    </form>
  );
};

export default MessageInput;
