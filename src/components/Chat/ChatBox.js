import { Box, Avatar, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DefaultImg from "../../static/images/profile/default.png";

const ChatBox = (props) => {
  const { message, userId, createdAt, image, chatInfo } = props;

  // console.log(userInfo);

  const user = userId === chatInfo?.userId ? true : false;
  // console.log(user);

  return (
    <WrapBox user={user}>
      <ImgBox>
        {user ? null : <ProfileImg src={image ? image : DefaultImg} />}
      </ImgBox>
      <MsgBox user={user}>
        <Msg user={user}>{message}</Msg>
        <SendTime>{createdAt}</SendTime>
      </MsgBox>
    </WrapBox>
  );
};

const WrapBox = styled.div`
  display: flex;
  width: 100%;
  align-items: ${(props) => (props.user ? "flex-end" : "flex-start")};
  margin-top: 1em;
`;

const MsgBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${(props) => (props.user ? "row-reverse" : "row")};
  align-items: flex-end;
`;

const Msg = styled.div`
  max-width: 80%;
  padding: 0.8em;
  border-radius: 1.5em;
  background-color: ${(props) => (props.user ? "#ff6853" : "white;")};
  flex-direction: ${(props) => (props.user ? "row-reverse" : "row")};
  border: ${(props) => (props.user ? "none" : "1px solid #dfdfdf;")};
  word-break: break-all;
  color: ${(props) => (props.user ? "white" : "black")};
  font-size: 1em;
`;

const SendTime = styled.div`
  font-size: 0.7em;
  color: gray;
  margin-left: ${(props) => (props.user ? "0" : "0.5em")};
  margin-right: ${(props) => (props.user ? "0" : "0.5em")};
  padding-bottom: 0.7em;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.2em;
`;

const ProfileImg = styled.img`
  width: 2.5em;
  height: 2.5em;
  margin-right: 0.5em;
  border-radius: 2.5em;
`;

export default ChatBox;
