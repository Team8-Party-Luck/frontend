import React from "react";
import SockJs from "sockjs-client";
import Stomp from "stompjs";
import ChatHeaderNav from "../components/Chat/ChatHeaderNav";
import ChatBox from "../components/Chat/ChatBox";
import ChatInput from "../components/Chat/ChatInput";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { actionCreators as chatActions } from "../redux/modules/chat";
import { Box } from "@mui/material";

const ChatDetail = () => {
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  const { roomId } = useParams();

  console.log(roomId);

  // 채팅방 이전 메시지 가져오기
  // useEffect(() => {
  //   dispatch(chatActions.getMsgListDB(roomId));
  // }, []);

  // const messages = useSelector((state) => state?.chat);
  const messages = [];
  console.log(messages);

  // 소켓 연결
  // React.useEffect(() => {
  //   wsConnect();

  //   return () => {
  //     wsDisConnect();
  //   };
  // }, []);

  // 1. stomp 프로토콜 위에서 sockJS 가 작동되도록 클라이언트 생성
  let sock = new SockJs("http://3.38.180.96:8080/ws-stomp");
  let ws = Stomp.over(sock);

  // 연결 및 구독. 파라미터로 토큰 넣어야 함
  function wsConnect() {
    try {
      ws.connect({ token: token, type: "CHAT" }, () => {
        ws.subscribe(
          `app/hello/${roomId}}`,
          (res) => {
            const newMessage = JSON.parse(res.body);
            console.log(res);
            console.log(newMessage);
            // dispatch(subMessage(newMessage));
          }
          // {},
        );
      });
    } catch (error) {
      console.log(error);
    }
  }

  function wsDisConnect() {
    try {
      ws.disconnect(() => {
        ws.unsubscribe("sub-0");
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <React.Fragment>
      <ChatHeaderNav name="메시지" />
      <Box
        sx={{
          border: "1px solid black",
          width: "100%",
          height: "85vh",
          padding: 1,
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
      <ChatInput />
    </React.Fragment>
  );
};

export default ChatDetail;
