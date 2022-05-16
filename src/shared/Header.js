import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import { useHistory } from "react-router-dom";
import BackIcon from "../static/images/icon/back.png";

const Header = (props) => {
  const history = useHistory();

  return (
    <Box
      sx={{
        width: "100%",
        padding: 2,
        display: "flex",
        borderBottom: "1px solid #dfdfdf",
        position: "fixed",
        background: "white",
        paddingTop: 2.2,
        zIndex: 1000,
      }}
    >
      <Box
        onClick={() => {
          history.goBack();
        }}
        sx={{ position: "absolute" }}
      >
        <img src={BackIcon} alt="뒤로가기" style={{ width: 12, height: 22 }} />
      </Box>
      <Typography
        component="p"
        variant="p"
        sx={{
          fontWeight: "bold",
          color: "black",
          fontSize: "1.2em",
          margin: "0 auto",
        }}
      >
        {props.name}
      </Typography>
    </Box>
  );
};

export default Header;
