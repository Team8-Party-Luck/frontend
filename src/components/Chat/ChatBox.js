import { Box, Avatar, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ChatBox = (props) => {
  const { message, userId, createdAt, image, userInfo } = props;

  // console.log(userInfo);

  const user = userId === userInfo ? true : false;
  // console.log(user);

  return (
    <WrapBox user={user}>
      {user ? null : (
        <Avatar
          sx={{
            bgcolor: red[400],
            width: "2em",
            height: "2em",
            marginRight: "0.5em",
          }}
          aria-label="recipe"
          src={image}
        />
      )}
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
`;

export default ChatBox;
