const serverStore = require('../serverStore')

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user
  console.log('---', socket.id)
  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails.userId
  })
}

module.exports = newConnectionHandler