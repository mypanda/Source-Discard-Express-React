import Tooltip from "@mui/material/Tooltip";
import React, { useState } from "react";
import Avatar from "../../../shared/components/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InvitationDecisionButtons from "./InvitationDecisionButtons";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/friendsActions";

const PendingInvitationsListItem = ({
  id,
  username,
  mail,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handlerAcceptInvitation = () => {
    console.log('xxx')
    acceptFriendInvitation({ id });
    setButtonDisabled(true);
  };
  
  const handleRejectInvitation = () => {
    console.log('aaa')
    rejectFriendInvitation({ id });
    setButtonDisabled(true);
  };
  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <InvitationDecisionButtons
            display={buttonDisabled}
            acceptInvitationHandler={handlerAcceptInvitation}
            rejectInvitationHandler={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(PendingInvitationsListItem);
