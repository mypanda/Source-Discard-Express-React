import { friendsActions } from "../actions/friendsActions";

const initState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

const reducer = (state = initState, actions) => {
  switch (actions.type) {
    case friendsActions.SET_PENDING_FRIENDS_INVITATIONS:
      return {
        ...state,
        pendingFriendsInvitations: actions.pendingFriendsInvitations,
      };
    case friendsActions.SET_FRIENTDS:
      return {
        ...state,
        friends: actions.friends,
      };
    case friendsActions.SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: actions.onlineUsers,
      };
    default:
      return state;
  }
};

export default reducer;
