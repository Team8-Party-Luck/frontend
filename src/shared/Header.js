import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box bgcolor={"#FF6853"} sx={{ width: "100%", height: "6em", padding: 2 }}>
      <Typography
        component="h3"
        variant="p"
        sx={{
          fontWeight: "bold",
          paddingTop: 3,
          color: "white",
          fontSize: "1.5em",
        }}
      >
        잇츨링 로고
      </Typography>
    </Box>
  );
};

export default Header;
