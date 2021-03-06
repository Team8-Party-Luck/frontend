import React from "react";
import styled from "styled-components";

//이미지
import DefaultImg from "../../static/images/profile/default.png";

//컬러시스템
import { color } from "../../shared/ColorSystem";

const ChatBox = (props) => {
  const { message, userId, createdAt, image, chatInfo } = props;

  //유저의 아이디를 비교해 메세지의 색상과 방향을 결정
  const user = userId === chatInfo?.userId ? true : false;
  // console.log(user);

  return (
    <WrapBox user={user}>
      <ProfileImgBox>
        {user ? null : <ProfileImg src={image ? image : DefaultImg} />}
      </ProfileImgBox>
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
  background-color: ${(props) => (props.user ? `${color.primary}` : "white;")};
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

const ProfileImg = styled.img`
  width: 2.5em;
  height: 2.5em;
  border-radius: 100%;
`;

const ProfileImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.2em;
  width: 2.5em;
  height: 2.5em;
  border-radius: 2.5em;
  margin-right: 0.5em;
`;

export default ChatBox;
