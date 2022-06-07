//채팅 인풋
import React, { useEffect } from "react";
import styled from "styled-components";

//컬러시스템
import { color } from "../../shared/ColorSystem";

const ChatInput = (props) => {
  const { onSend, msg } = props;

  useEffect(() => {
    msg.current.focus();
  }, [msg]);

  //엔터로 전송
  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      onSend();
    }
  };

  const onClick = (e) => {
    onSend();
  };

  return (
    <WrapBox>
      <MsgInput
        ref={msg}
        id="msgInput"
        type="text"
        onKeyDown={onKeyDownHandler}
        maxLength={100}
      />
      <MsgButton onClick={onClick}>보내기</MsgButton>
    </WrapBox>
  );
};

const WrapBox = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4.5em;
  padding: 2;
  padding-top: 0.5em;
  background-color: white;
  border-top: 1px solid ${color.line};
`;

const MsgInput = styled.input`
  width: 100%;
  height: 4em;
  padding: 0.5em;
  padding-right: 4em;
  border: 2px solid #e3e3e3;
  border-radius: 0.5em;
  position: relative;
`;

const MsgButton = styled.button`
  position: absolute;
  top: 35%;
  right: 8%;
  border: none;
  background: white;
  font-size: 1em;
  color: #ff6853;
`;

export default ChatInput;
