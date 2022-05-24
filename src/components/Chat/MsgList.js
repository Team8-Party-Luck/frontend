import { history } from "../../redux/configStore";

import styled from "styled-components";

import React from "react";
import DefaultImage from "../../static/images/profile/default.png";

const MsgList = (props) => {
  const { msgList } = props;

  // console.log(msgList);

  // console.log(msgList.image);

  return (
    <WrapBox>
      {msgList?.map((cur, idx) => {
        return (
          <MsgBox
            onClick={() => {
              history.push(`/chatdetail/${cur?.chatRoomId}`);
            }}
            key={idx}
          >
            <ImgBox src={cur?.image ? cur?.image : DefaultImage} />
            <DetailBox>
              <NameText>{cur?.senderNickname}</NameText>
              <MsgText>{cur?.lastMessage}</MsgText>
              <DateText>{cur?.createdAt}</DateText>
            </DetailBox>
          </MsgBox>
        );
      })}
    </WrapBox>
  );
};
const WrapBox = styled.div`
  width: 100%;
  padding-top: 3.7em;
`;

const MsgBox = styled.div`
  display: flex;
  border-bottom: 1px solid #dfdfdf;
  padding: 0.75em;
  cursor: pointer;
`;

const ImgBox = styled.img`
  width: 2.7em;
  height: 2.7em;
  border-radius: 2.7em;
  margin-right: 0.7em;
`;

const DetailBox = styled.div`
  width: 100%;
  position: relative;
  padding-top: 0.1em;
`;

const NameText = styled.p`
  font-size: 1em;
  margin-bottom: 0.25em;
`;
const MsgText = styled.p`
  font-size: 0.7em;
  color: gray;
`;
const DateText = styled.p`
  color: gray;
  font-size: 0.2em;
  position: absolute;
  top: 1.5em;
  right: 0.5em;
`;

export default MsgList;
