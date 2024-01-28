import { connectedUsers } from "../sockets/chatSocket.js";

// conexion a usuarios
const getConnectedUsers = (req, res) => {
  const users = Object.values(connectedUsers);
  res.json(users);
};

export const chatController = {
  getConnectedUsers
};
