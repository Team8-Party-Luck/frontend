import * as React from "react";
import { Typography, Box } from "@mui/material";
import LoadingImg from "../static/images/logo/img_loading.png";

const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ marginTop: 38 }}>
        <img src={LoadingImg} alt="asdasd" />
      </Box>
      <Typography sx={{ marginTop: 3, color: "gray", fontWeight: "bold" }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default Spinner;
