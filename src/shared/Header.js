import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <Box bgcolor={"#FF6853"} sx={{ width: "100%", height: "6em", padding: 2 }}>
      <Box
        onClick={() => {
          history.goBack();
        }}
      >
        <ArrowBackIosIcon fontSize="medium" style={{ color: "white" }} />
      </Box>
      <Typography
        component="h3"
        variant="p"
        sx={{
          fontWeight: "bold",
          paddingTop: 1,
          color: "white",
          fontSize: "1.3em",
        }}
      >
        잇츨링 로고
      </Typography>
    </Box>
  );
};

export default Header;
