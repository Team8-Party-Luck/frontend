import React, {useRef} from "react";
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
import { actionCreators as userActions } from "../redux/modules/user";
import { Box, } from "@mui/material";
import styled from "styled-components";
import BackIcon from "../static/images/icon/back.png";
import DefaultImg from "../static/images/profile/default.png";

const ChatDetail = () => {
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  //채팅 메시지
  const msg = React.useRef('');

  // const [msg, setMsg] = useState("");
  const scrollRef = useRef();

  const { roomId } = useParams();
  // console.log(roomId);

  // 소켓 연결
  React.useEffect(() => {
    wsConnect();
    

    return () => {
      wsDisConnect();
    };
  }, []);

  React.useEffect(() => {
    dispatch(chatActions.getMsgListDB(roomId));
    dispatch(chatActions.getChatUserDB(roomId));
   
  }, []);

  const messages = useSelector((state) => state?.chat?.msg);
  // console.log(messages);

  const chatInfo = useSelector((state) => state?.chat?.user);
  // console.log(chatInfo);

  // 방 입장 시 스크롤 아래로 이동
  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      
  }, []);


  // 메시지 state 변경 시 스크롤 아래로 이동
  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  // stomp 프로토콜 위에서 sockJS 가 작동되도록 클라이언트 생성
  // let sock = new SockJs("http://54.180.88.119:8080/ws-stomp"); //형빈님
  // let sock = new SockJs("https://epocle.shop/ws-stomp"); //차혁님
  let sock = new SockJs("http://54.180.88.119/ws-stomp"); //형빈님
  let ws = Stomp.over(sock);

  // console.log(ws);

  // 연결 및 구독
  function wsConnect() {
    try {
      ws.connect({ token: token, type: "ENTER" }, () => {
        // console.log(roomId);
        ws.subscribe(
          `/queue/${roomId}`,
          (res) => {
            const newMessage = JSON.parse(res.body);
            // console.log(res);
            // console.log(newMessage);
            dispatch(chatActions.subMsg(newMessage));
          }
          // {},
        );
        // console.log(ws.ws.readyState);
      });
    } catch (error) {
      // console.log(error);
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

  const ClearFields = () => {
    document.getElementById("msgInput").value = "";
  };

  //메세지 전송
  const onSend = async () => {
    try {
      // send할 데이터
      const message = {
        chatRoomId: roomId,
        message: msg.current.value,
        type: "TALK",
      };
      // console.log(msg.current.value);
      //값이 없으면 아무것도 실행 x
      if (msg.current.value === "") {
        return;
      }
      ws.send("/app/send", { token: token }, JSON.stringify(message));
      // console.log(JSON.stringify(message));
      // console.log(ws.ws.readyState);
      // setMsg("");
      // document.getElementById("msgInput").value = "";
      msg.current.value = '';
      
    } catch (error) {
      // console.log(error);
      // console.log(ws.ws.readyState);
    }
  };
  if (messages === null) {
    return;
  }

  return (
    <Box position={"relative"}>
      <WrapBox>
        <BackBox
          onClick={() => {
            history.push("/chat");
          }}
        >
          <img src={BackIcon} alt="뒤로가기" style={{ width: 12 }} />
        </BackBox>
        <SmallProfile
          src={chatInfo?.otherProfile ? chatInfo?.otherProfile : DefaultImg}
        />
        <NicknameText>{chatInfo?.otherNickname}</NicknameText>
        {/* <ExitButton>나가기</ExitButton> */}
      </WrapBox>
      <MsgWrapBox>
        {messages?.length > 0 &&
          messages?.map((cur, idx) => {
            return (
              <ChatBox
                key={idx}
                message={cur?.message}
                image={cur?.imageUrl}
                userId={cur?.userId}
                createdAt={cur?.createdAt}
                chatInfo={chatInfo}
              />
            );
          })}
        <div style={{ marginTop: "5em" }} ref={scrollRef} />
      </MsgWrapBox>
      <ChatInput  onSend={onSend} msg={msg}/>
    </Box>
  );
};

const WrapBox = styled.div`
  width: 100%;
  height: 3.5em;
  display: flex;
  border-bottom: 1px solid #dfdfdf;
  position: fixed;
  background: white;
  align-items: center;
  padding: 0 1em;
  zindex: 1000;
`;

const BackBox = styled.div`
  cursor: pointer;
  margin-right: 1em;
`;

const SmallProfile = styled.img`
  width: 2em;
  height: 2em;
  margin-right: 0.5em;
  border-radius: 2em;
`;

const NicknameText = styled.p`
  font-weight: bold;
  color: black;
  font-size: 1.2em;
`;

const MsgWrapBox = styled.div`
  width: 100%;
  padding: 0.5em;
  padding-top: 3.5em;
`;

export default ChatDetail;
