const User = require("../../models/user");
const FriendInvitation = require("../../models/friendInvitation");
const friendsUpdates = require("../../sockerHandlers/updates/friends");

const postAccept = async (req, res) => {
  try {
    const { id } = req.body;
    const invitation = await FriendInvitation.findById(id);

    if (!invitation) {
      return res.status(401).send("Error occured. Please try again");
    }

    const { senderId, receiverId } = invitation;

    // add friends to both users
    const senderUser = await User.findById(senderId);
    senderUser.friends = [...senderUser.friends, receiverId];

    const receiverUser = await User.findById(receiverId);
    receiverUser.friends = [...receiverUser.friends, senderId];

    await senderUser.save();
    await receiverUser.save();

    // delete invitaion
    await FriendInvitation.findByIdAndDelete(id);

    // update list of the friends if the users are online
    friendsUpdates.updateFriends(senderId.toString())
    friendsUpdates.updateFriends(receiverId.toString())

    // update list of friends pending invitations
    friendsUpdates.updateFriendsPendingInvitations(receiverId.toString());

    return res.status(200).send("Friend successfully added");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Something went wrong please try again");
  }
  return res.send("accept handler");
};

module.exports = postAccept;
