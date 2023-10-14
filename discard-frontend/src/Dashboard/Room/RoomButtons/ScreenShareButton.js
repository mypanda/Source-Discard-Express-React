import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";

const ScreenShareButton = () => {
  const [isScreenShareActive, setScreenShareActive] = useState(true);

  const handleToggleScreenShare = () => {
    setScreenShareActive(!isScreenShareActive);
  };

  return (
    <IconButton onClick={handleToggleScreenShare} style={{ color: "white" }}>
      {isScreenShareActive ? <StopScreenShareIcon /> : <ScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;
