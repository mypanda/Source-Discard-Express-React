import React, { useEffect } from "react";
import { styled } from "@mui/system";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Message from "./Message/Message";
import AppBar from "./AppBar/AppBar";
import { logout } from "../shared/utils/auth";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = ({ setUserDetails }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails))
    }
  }, []);

  return (
    <Wrapper>
      <SideBar></SideBar>
      <FriendsSideBar></FriendsSideBar>
      <Message></Message>
      <AppBar></AppBar>
    </Wrapper>
  );
};

const mapActionsToProps = (dispath) => {
  return {
    ...getActions(dispath),
  };
};
export default connect(null, mapActionsToProps)(Dashboard);
