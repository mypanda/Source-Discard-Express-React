import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const RedirctText = styled("span")({
  color: "#00aff4",
  fontWeight: 500,
  cursor: "pointer",
});

const RedirectInfo = ({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}) => {
  return (
    <Typography
      sx={{ color: "#72727d" }}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirctText onClick={redirectHandler}>{redirectText}</RedirctText>
    </Typography>
  );
};

export default RedirectInfo;
