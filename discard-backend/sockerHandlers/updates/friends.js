// const User = require('../../models/user')
const FriendInvitation = require("../../models/friendInvitation");
const serverStore = require("../../serverStore");

const updateFriendsPendingInvitations = async (userId) => {
  try {
    const pendingInvitations = await FriendInvitation.find({
      receiverId: userId,
    }).populate("senderId", "_id username mail");

    // find if user of specified userId has active connections
    // find all active connections of specified userId
    const receiverList = serverStore.getActiveConnections(userId);

    const io = serverStore.getSocketServerInstance();

    receiverList.forEach((receiverSocketId) => {
      io.to(receiverSocketId).emit("friends-invitations", {
        pendingInvitations: pendingInvitations ? pendingInvitations : [],
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  updateFriendsPendingInvitations,
};
