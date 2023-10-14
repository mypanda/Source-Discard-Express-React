import React, { useEffect } from "react";
import { styled } from "@mui/system";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { logout } from "../shared/utils/auth";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";
import Room from "./Room/Room";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = ({ setUserDetails, isUserInRoom }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, []);

  return (
    <Wrapper>
      <SideBar></SideBar>
      <FriendsSideBar></FriendsSideBar>
      <Messenger></Messenger>
      <AppBar></AppBar>
      {isUserInRoom && <Room />}
    </Wrapper>
  );
};

const mapStoteStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapActionsToProps = (dispath) => {
  return {
    ...getActions(dispath),
  };
};

export default connect(mapStoteStateToProps, mapActionsToProps)(Dashboard);
