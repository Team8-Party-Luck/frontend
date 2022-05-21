import { Box, Typography } from "@mui/material";
import React from "react";
import { history } from "../redux/configStore";
import BackIcon from "../static/images/icon/back.png";
import styled from "styled-components";

const Header = (props) => {
  return (
    <WrapBox>
      <Box
        onClick={() => {
          if(props.name==="파티등록"){
            props.modal()
          }
          history.goBack();
        }}
        sx={{ position: "absolute" }}
      >
        <img src={BackIcon} alt="뒤로가기" style={{ width: 12, height: 22 }} />
      </Box>
      <HeaderText>{props.name}</HeaderText>
      {props.type === "완료" ? (
        <CompleteText onClick={props.event}>{props.type}</CompleteText>
      ) : null}
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
  z-index: 100;
`;

const HeaderText = styled.p`
  font-weight: bold;
  font-size: 1.2em;
  margin: 0 auto;
`;

const CompleteText = styled.p`
  font-size: 1.2em;
  margin: 0 auto;
  color: #ff6853;
  position: absolute;
  right: 1em;
`;

export default Header;
