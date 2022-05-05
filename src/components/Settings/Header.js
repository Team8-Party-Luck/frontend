import { Box, Typography } from "@mui/material";
import React from "react";

const Header = (props) => {
  return (
    <Box sx={{ background: "#FF6853", height: "8em", padding: 2 }}>
      <Typography
        component="h3"
        variant="p"
        sx={{
          fontWeight: "bold",
          marginTop: 3,
          color: "white",
          fontSize: "1.5em",
        }}
      >
        잇츨링에 오신 것을 환영해요!😊
      </Typography>
      <Typography
        component="p"
        variant="p"
        sx={{ color: "white", marginTop: 2 }}
      >
        프로필에서 보여줄 정보를 입력해주세요!
      </Typography>
    </Box>
  );
};

export default Header;
