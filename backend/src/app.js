import express from "express";
import http from "http";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import { resolve } from "path";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:3001",
  },
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(resolve("frontend/dist")));

const connectedUsers = {};

io.on("connection", (socket) => {
  console.log(`${socket.id} connected`);

  socket.on("setNick", (nick) => {
    socket.nick = nick;
    connectedUsers[socket.id] = nick;
    console.log(`${socket.id} estableció el Nick como: ${nick}`);
    io.emit("updateUserList", Object.values(connectedUsers));
  });

  socket.on("message", (message) => {
    if (socket.nick && message.to) {
      const recipientSocket = Object.keys(connectedUsers).find(
        (socketId) => connectedUsers[socketId] === message.to
      );

      if (recipientSocket) {
        io.to(recipientSocket).emit("message", {
          body: message.body,
          from: socket.nick,
          to: message.to,
        });
      }
    } else {
      socket.broadcast.emit("message", {
        body: message.body,
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
});

app.get("*", (req, res) => {
  res.sendFile(resolve("frontend/dist/index.html"));
});

server.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
