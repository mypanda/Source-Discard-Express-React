const connectedUsers = new Map();

const addNewConnectedUser = ({ sockedId, userId }) => {
  connectedUsers.set(sockedId, { userId });
};

module.exports = {
  addNewConnectedUser,
};
