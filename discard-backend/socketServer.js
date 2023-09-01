const authSocket = require("./middleware/authSocket");
const newConnectionHandler = require("./sockerHandlers/newConnectionHandler");
const disconnectHandler = require("./sockerHandlers/disconnectHandler");

const registerSockerServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.use((socket, next) => {
    authSocket(socket, next);
    next()
  });

  io.on("connection", (socket) => {
    console.log("user conne", socket.id);

    newConnectionHandler(socket, io);

    socket.on('disconnect', () => {
      disconnectHandler(socket)
    })
  });
};

module.exports = {
  registerSockerServer,
};
