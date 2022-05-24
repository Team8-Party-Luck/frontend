import { Box } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { useRef } from "react";

const ChatInput = (props) => {
  const { msg, setMsg, onSend } = props;

  const ws = useRef();

  const token = sessionStorage.getItem("token");

  // console.log(msg);

  // let sock = new SockJS("http://121.139.34.35:8080/stomp/chat");
  // let ws = Stomp.over(sock);

  // //  웹소켓이 연결될 때 까지 실행
  //   function waitForConnection(ws, callback) {
  //     setTimeout(
  //         function () {
  //             // 연결되었을 때 콜백함수 실행
  //             if (ws.ws.readyState === 1) {
  //                 callback();
  //                 // 연결이 안 되었으면 재호출
  //             } else {
  //                 waitForConnection(ws, callback);
  //             }
  //         },
  //         10, // 밀리초 간격으로 실행
  //     );
  // }

  //메세지 보내는 함수
  //   const onSend = async () => {
  //     try {
  //         // send할 데이터
  //         const message = {
  //             roomId: roomId,
  //             message: msg,
  //             type: "TALK",
  //         };
  //         //값이 없으면 아무것도 실행 x
  //         if (msg === "") {
  //             return;
  //         }
  //         // 로딩 중
  //         waitForConnection(ws, function () {
  //             ws.send("/app/send", { token: token }, JSON.stringify(message));
  //             console.log(ws.ws.readyState);
  //             // setText("");
  //         });
  //     } catch (error) {
  //         console.log(error);
  //         console.log(ws.ws.readyState);
  //     }
  // };

  //엔터로 전송
  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      // console.log("엔터 눌렀당");
      onSend();
    }
  };

  const onClick = (e) => {
    onSend();
  };

  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "4.5em",
        padding: 2,
        paddingTop: "0.5em",
        background: "white",
        borderTop: "1px solid #dfdfdf",
      }}
    >
      <MsgInput
        id="msgInput"
        type="text"
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        onKeyDown={onKeyDownHandler}
        value={msg}
        maxLength={100}
      />
      <MsgButton onClick={onClick}>보내기</MsgButton>
    </Box>
  );
};

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
