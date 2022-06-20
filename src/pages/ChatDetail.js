import React, { useRef, useState } from "react";
import SockJs from "sockjs-client";
import Stomp from "stompjs";
import ChatBox from "../components/Chat/ChatBox";
import ChatInput from "../components/Chat/ChatInput";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { history } from "../redux/configStore";
import { actionCreators as chatActions } from "../redux/modules/chat";
import { actionCreators as userActions } from "../redux/modules/user";
import { Box } from "@mui/material";
import styled from "styled-components";
import BackIcon from "../static/images/icon/back.png";
import DefaultImg from "../static/images/profile/default.png";
import { color } from "../shared/ColorSystem";
import Popup from "../shared/Popup";

const ChatDetail = () => {
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  const [openEsc, setOpenEsc] = useState(false);

  //채팅 메시지
  const msg = React.useRef("");

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
  let sock = new SockJs("http://54.180.88.119/ws-stomp"); //형빈님
  // let sock = new SockJs("https://epocle.shop/ws-stomp"); //차혁님

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
      // console.log(error);
    }
  }

  // const ClearFields = () => {
  //   document.getElementById("msgInput").value = "";
  // };

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
      msg.current.value = "";
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
        <FlexBox>
          <BackBox
            onClick={() => {
              history.push("/chat");
            }}
          >
            <img src={BackIcon} alt="뒤로가기" style={{ width: 12 }} />
          </BackBox>
          <ProfileImgBox>
            <ProfileImg
              src={chatInfo?.otherProfile ? chatInfo?.otherProfile : DefaultImg}
            />
          </ProfileImgBox>

          <NicknameText>{chatInfo?.otherNickname}</NicknameText>
        </FlexBox>
        <FlexBox>
          <ExitButton
            onClick={() => {
              setOpenEsc(true);
            }}
          >
            나가기
          </ExitButton>
        </FlexBox>
        <React.Fragment>
          {openEsc && (
            <Popup
              title={"채팅방을 나가시겠습니까?"}
              subTitle={"채팅방을 나가시면 채팅 목록에서 사라집니다"}
              type={"채팅나가기"}
              close={() => setOpenEsc(false)}
              event={() => {
                dispatch(chatActions.exitChatDB(roomId));
              }}
              confirm={"나가기"}
              back={"뒤로가기"}
            />
          )}
        </React.Fragment>
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
      <ChatInput onSend={onSend} msg={msg} />
    </Box>
  );
};

const WrapBox = styled.div`
  width: 100%;
  height: 3.5em;
  display: flex;
  border-bottom: 1px solid #dfdfdf;
  justify-content: space-between;
  position: fixed;
  background: white;
  align-items: center;
  padding: 0 1em;
`;

const BackBox = styled.div`
  cursor: pointer;
  margin-right: 1em;
`;

const ProfileImg = styled.img`
  width: 2em;
  height: 2em;
  border-radius: 100%;
`;

const ProfileImgBox = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 2em;
  margin-right: 0.5em;
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

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExitButton = styled.button`
  border: none;
  font-size: 1em;
  color: ${color.primary};
  background-color: white;
  cursor: pointer;
`;

export default ChatDetail;
