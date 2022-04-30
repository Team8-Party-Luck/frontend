import { Box, Typography } from "@mui/material";
import React from "react";

const Header = (props) => {
  return (
    <Box sx={{ background: "#eee", height: "8em", padding: 2 }}>
      <Typography
        component="h3"
        variant="p"
        sx={{ fontWeight: "bold", marginTop: 6 }}
      >
        미아초이님 반갑습니다!😊
      </Typography>
      <Typography component="p" variant="p">
        프로필에서 보여줄 정보를 입력해주세요!
      </Typography>
    </Box>
  );
};

export default Header;
