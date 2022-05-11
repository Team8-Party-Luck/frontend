import React from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ChatDetail = () => {
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();
  const params = useParams();

  const roomId = params.id;

  console.log(roomId);

  React.useEffect(() => {
    wsConnect();

    return () => {
      wsDisConnect();
    };
  }, []);

  // 1. stomp 프로토콜 위에서 sockJS 가 작동되도록 클라이언트 생성
  let sock = new SockJS("http://3.38.180.96:8080/ws-stomp");
  let ws = Stomp.over(sock);

  // // 연결 및 구독. 파라미터로 토큰 넣어야 함
  function wsConnect() {
    try {
      ws.connect({}, () => {
        // enterMessage();
        ws.subscribe(
          `/sub/chat/room/${roomId}`,
          (response) => {
            const newMessage = JSON.parse(response.body);
            console.log(response);
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

  return <div></div>;
};

export default ChatDetail;
