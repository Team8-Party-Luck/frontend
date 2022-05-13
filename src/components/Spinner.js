import * as React from "react";
import { Typography, Box } from "@mui/material";

const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <Box sx={{ marginTop: 38 }}> */}
      {/* <img src="image/login/img_loading.png" alt="asdasd" /> */}
      {/* <img
          src={require("../../public/image/login/img_loading.png").default}
        /> */}
      {/* </Box> */}
      <Typography sx={{ marginTop: 3, color: "gray", fontWeight: "bold" }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default Spinner;
