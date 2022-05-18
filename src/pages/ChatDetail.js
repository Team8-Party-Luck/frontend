import React from "react";
import SockJs from "sockjs-client";
import Stomp from "stompjs";
import ChatHeaderNav from "../components/Chat/ChatHeaderNav";
import ChatBox from "../components/Chat/ChatBox";
import ChatInput from "../components/Chat/ChatInput";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { history } from "../redux/configStore";
import { actionCreators as chatActions } from "../redux/modules/chat";
import { Box, Typography, Avatar } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { red } from "@mui/material/colors";
import styled from "styled-components";
import { style } from "@mui/system";
import { useState } from "react";

const ChatDetail = () => {
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  const [msg, setMsg] = useState("");

  const { roomId } = useParams();

  // 소켓 연결
  React.useEffect(() => {
    dispatch(chatActions.getMsgListDB(chatRoomId));
    dispatch(chatActions.getRoomIdDB(roomId));
    wsConnect();

    return () => {
      wsDisConnect();
    };
  }, []);

  console.log(roomId);

  // 채팅방 이전 메시지 가져오기
  // useEffect(() => {
  //   dispatch(chatActions.getMsgListDB(chatRoomId));
  //   dispatch(chatActions.getRoomIdDB(roomId));
  // }, []);

  const chatRoomId = useSelector((state) => state?.chat?.id?.chatRoomId);
  console.log(chatRoomId);

  // const messages = useSelector((state) => state?.chat);
  const messages = [];
  console.log(messages);

  // stomp 프로토콜 위에서 sockJS 가 작동되도록 클라이언트 생성
  let sock = new SockJs("http://3.38.180.96:8080/ws-stomp");
  let ws = Stomp.over(sock);
  console.log(ws);

  // 연결 및 구독
  function wsConnect() {
    try {
      ws.connect({ token: token, type: "ENTER" }, () => {
        console.log(chatRoomId);
        ws.subscribe(
          `queue/${chatRoomId}`,
          (res) => {
            const newMessage = JSON.parse(res.body);
            console.log(res);
            console.log(newMessage);
            // dispatch(subMessage(newMessage));
          }
          // {},
        );
      });
      console.log(ws.ws.readyState);
    } catch (error) {
      console.log(error);
    }
  }

  //소켓 연결 끊기
  function wsDisConnect() {
    try {
      ws.disconnect(() => {
        ws.unsubscribe("sub-0");
      });
    } catch (error) {
      console.log(error);
    }
  }

  //메세지 전송
  const onSend = async () => {
    try {
      // send할 데이터
      const message = {
        chatRoomId: chatRoomId,
        message: msg,
        type: "TALK",
      };
      //값이 없으면 아무것도 실행 x
      if (msg === "") {
        return;
      }
      ws.send("/app/send", { token: token }, JSON.stringify(message));
      console.log(ws.ws.readyState);
      setMsg("");
    } catch (error) {
      console.log(error);
      console.log(ws.ws.readyState);
    }
  };
  if (messages === null) {
    return;
  }

  return (
    <Box position={"relative"}>
      <Box
        sx={{
          width: "100%",
          // height: "3.5em",
          padding: 2,
          display: "flex",
          borderBottom: "1px solid #dfdfdf",
          position: "fixed",
          background: "white",
          paddingTop: 2.2,
          zIndex: 1000,
        }}
      >
        <Box
          onClick={() => {
            history.push("/chat");
          }}
        >
          <ArrowBackIosIcon fontSize="medium" />
        </Box>
        <Avatar
          sx={{
            bgcolor: red[400],
            width: "1.2em",
            height: "1.2em",
            marginRight: "0.5em",
          }}
          aria-label="recipe"
          //   src={}
        />
        <Typography
          component="p"
          variant="p"
          sx={{
            fontWeight: "bold",
            color: "black",
            fontSize: "1.2em",
          }}
        >
          유저 닉네임
        </Typography>
        {/* <ExitButton>나가기</ExitButton> */}
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: 1,
          paddingBottom: "4em",
          paddingTop: "3.5em",
        }}
      >
        {/* {messages?.map((cur, idx) => {
          return (
            <ChatBox
              key={idx}
              message={cur?.message}
              userId={cur?.userId}
              createdAt={cur?.createdAt}
            />
          );
        })} */}
        <ChatBox />
      </Box>
      <ChatInput msg={msg} setMsg={setMsg} onSend={onSend} />
    </Box>
  );
};

// const ExitButton = styled.div`
//   color: gray;
//   width: fit-content;
// `;

export default ChatDetail;
