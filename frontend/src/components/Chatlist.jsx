import React from "react";

const ChatList = ({ userList, selectedUser, handleUserClick }) => {
  return (
    <div className="w-1/4 p-4 bg-zinc-900">
      <h2 className="text-xl font-bold mb-6">Usuarios Conectados</h2>
      <ul>
        {userList.map((user, index) => (
          <li
            key={index}
            className={`mb-2 cursor-pointer ${
              selectedUser === user ? "bg-blue-500" : ""
            }`}
            onClick={() => handleUserClick(user)}
          >
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
