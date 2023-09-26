const FriendInvitation = require("../../models/friendInvitation");
const friendsUpdates = require("../../sockerHandlers/updates/friends");

const postReject = async (req, res) => {
  try {
    const {id} = req.body
    const {userId}  = req.user

    // remove that invitation from friend invitation collection
    const invitationExists = await FriendInvitation.exists({_id:id})

    if (invitationExists) {
      await FriendInvitation.findByIdAndDelete(id)
    }

    // update pending invitations
    friendsUpdates.updateFriendsPendingInvitations(userId)

    return res.status(200).send('Invitation succesfully rejected')
  } catch (error) {
    console.log(error)
    return res.status(500).send('Something went wrong please try again')
  }
};

module.exports = postReject;