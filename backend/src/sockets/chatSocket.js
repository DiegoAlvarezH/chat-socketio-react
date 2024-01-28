const connectedUsers = {};

// Define la logica para cuando el usuario se conecta a traves del socket
const chatSocket = (io, socket) => {
  console.log(`${socket.id} connected`);

  socket.on("setNick", (nick) => {
    socket.nick = nick;
    connectedUsers[socket.id] = nick;
    console.log(`${socket.id} estableció el Nick como: ${nick}`);
    io.emit("updateUserList", Object.values(connectedUsers));
  });

  socket.on("message", (body) => {
    if (socket.nick) {
      socket.broadcast.emit("message", {
        body,
        from: socket.nick,
      });
    }
  });

  socket.on("disconnect", () => {
    if (socket.nick) {
      delete connectedUsers[socket.id];
      io.emit("updateUserList", Object.values(connectedUsers));
    }
    console.log(`${socket.id} disconnected`);
  });
};

export { connectedUsers, chatSocket };
