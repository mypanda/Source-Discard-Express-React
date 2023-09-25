const serverStore = require('../serverStore')

const newConnectionHandler = async (socket, io) => {
  console.log('socketsocket', socket.userId)
  const userDetails = socket.user
  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails.userId
  })
}

module.exports = newConnectionHandler