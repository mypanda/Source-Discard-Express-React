import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem.js";
import { connect } from "react-redux";
// const DUMMY_FRIENDS = [
//   { id: 1, username: 'Mark', isOnline: true },
//   { id: 2, username: 'Anna', isOnline: false },
//   { id: 3, username: 'John', isOnline: false },
// ]
const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
  friends.forEach((f) => {
    const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
    f.isOnline = isUserOnline ? true : false;
  });
  return friends
};

const FriendsList = ({ friends, onlineUsers }) => {
  return (
    <MainContainer>
      {checkOnlineUsers(friends, onlineUsers).map((f) => (
        <FriendsListItem
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
        ></FriendsListItem>
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps)(FriendsList);
