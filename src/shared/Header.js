import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import { useHistory } from "react-router-dom";
import BackIcon from "../static/images/icon/back.png";
import styled from "styled-components";

const Header = (props) => {
  const history = useHistory();

  return (
    <WrapBox>
      <Box
        onClick={() => {
          history.goBack();
        }}
        sx={{ position: "absolute" }}
      >
        <img src={BackIcon} alt="뒤로가기" style={{ width: 12, height: 22 }} />
      </Box>
      <HeaderText>{props.name}</HeaderText>
      {/* {props.classname ? } */}
    </WrapBox>
  );
};

const WrapBox = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  border-bottom: 1px solid #dfdfdf;
  position: fixed;
  background: white;
  paddingtop: 1.1em;
  z-index: 1000;
`;

const HeaderText = styled.p`
  font-weight: bold;
  font-size: 1.2em;
  margin: 0 auto;
`;

const CompleteText = styled.p`
  font-weight: bold;
  font-size: 1.2em;
  margin: 0 auto;
  color: #ff6853;
`;

export default Header;
