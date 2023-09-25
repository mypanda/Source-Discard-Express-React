const User = require('../../models/user')
const FriendInvatation = require('../../models/friendInvitation')
const serverStore = require('../../serverStore')

const updateFriendsPendingInvitations = async (userId) => {
  try {
    const pendingInvations = await FriendInvatation.find({
      receiverId: userId
    }).populate('senderId', '_id username mail')

    // find if user of specified userId has active connections
    // find all active connections of specified userId
    const receiverList = serverStore.getActiveConnections(userId)

    const io = serverStore.getSocketServerInstance()
    receiverList.forEach(receiverSocketId => {
      io.to(receiverSocketId).emit('friends-invations', {
        pendingInvations: pendingInvations ? pendingInvations : []
      })
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  updateFriendsPendingInvitations
}