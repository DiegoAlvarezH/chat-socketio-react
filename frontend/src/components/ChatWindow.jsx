import React from "react";

const ChatWindow = ({ messages, selectedUser, nick }) => {
  return (
    <div className="flex-1 p-4 overflow-auto">
      <div
        className="flex flex-col h-full"
        style={{ maxHeight: "calc(100vh - 8rem)", overflowY: "scroll" }}
      >
        <ul>
          {messages
            .filter(
              (msg) =>
                msg.from === selectedUser ||
                (msg.to === selectedUser && msg.from === nick)
            )
            .map((msg, index) => (
              <li
                key={index}
                className={`my-2 p-2 table text-sm rounded-md ${
                  msg.from === nick ? "bg-sky-700 ml-auto" : "bg-black"
                }`}
              >
                <b>{msg.from}</b>: {msg.body}
                <br />
                <span className="text-xs text-gray-400">{msg.timestamp}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatWindow;
