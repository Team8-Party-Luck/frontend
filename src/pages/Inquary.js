import React from "react";
import Header from "../shared/Header";
import { Box } from "@mui/material";
import BottomNav from "../shared/BottomNav";

const Inquary = () => {
  return (
    <div>
      <Header name={"문의하기"} />
      <Box sx={{ padding: 2.5, paddingTop: "5.5em" }}></Box>
      <BottomNav />
    </div>
  );
};

export default Inquary;
