//유저와 채팅을 나눌수 있는 페이지
import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

//리덕스
import { actionCreators as chatActions } from "../redux/modules/chat";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";

//StompJs
import SockJs from "sockjs-client";
import Stomp from "stompjs";

//컴포넌트
import ChatBox from "../components/Chat/ChatBox";
import ChatInput from "../components/Chat/ChatInput";
import Popup from "../shared/Popup";

//이미지
import BackIcon from "../static/images/icon/back.png";
import DefaultImg from "../static/images/profile/default.png";

//컬러시스템
import { color } from "../shared/ColorSystem";

const ChatDetail = () => {
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  //메세지 인풋 관리하는 ref
  const msg = useRef("");

  //스크롤 이벤트 관리하는 ref
  const scrollRef = useRef();

  //params값으로 방아이디를 받아와 소켓에 사용
  const { roomId } = useParams();

  //나가기 버튼 모달
  const [openEsc, setOpenEsc] = useState(false);

  // 소켓 연결
  React.useEffect(() => {
    wsConnect();

    //페이지를 나가면 소켓 연결 끊어주기
    return () => {
      wsDisConnect();
    };
  }, []);

  //채팅페이지에 들어오면 룸아이디를 서버로 보내 이전 메세지들과 유저 정보를 호출
  React.useEffect(() => {
    dispatch(chatActions.getMsgListDB(roomId));
    dispatch(chatActions.getChatUserDB(roomId));
  }, []);

  //상대 유저와 과거에 나누었던 메세지들
  const messages = useSelector((state) => state?.chat?.msg);

  //상대유저와 유저 본인의 대한 정보
  const chatInfo = useSelector((state) => state?.chat?.user);

  // 방 입장 시 스크롤 아래로 이동
  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);

  // 메시지 state 변경 시 스크롤 아래로 이동
  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  // stomp 프로토콜 위에서 sockJS 가 작동되도록 클라이언트 생성
  // let sock = new SockJs("http://54.180.88.119/ws-stomp");
  let sock = new SockJs("https://epocle.shop/ws-stomp");
  let ws = Stomp.over(sock);

  // 연결 및 구독
  function wsConnect() {
    try {
      ws.connect({ token: token, type: "ENTER" }, () => {
        ws.subscribe(`/queue/${roomId}`, (res) => {
          const newMessage = JSON.parse(res.body);
          dispatch(chatActions.subMsg(newMessage));
        });
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

  //메세지 전송
  const onSend = async () => {
    try {
      // send할 데이터
      const message = {
        chatRoomId: roomId,
        message: msg.current.value,
        type: "TALK",
      };
      //값이 없으면 아무것도 실행 x
      if (msg.current.value === "") {
        return;
      }
      ws.send("/app/send", { token: token }, JSON.stringify(message));

      //메세지를 보내고 나면 ref로 관리하던 값을 초기화t
      msg.current.value = "";
    } catch (error) {
      // console.log(error);
    }
  };
  //채팅 인풋에 아무것도 없다면 전송 x
  if (messages === null) {
    return;
  }

  return (
    <RelativeBox>
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
    </RelativeBox>
  );
};

const WrapBox = styled.div`
  width: 100%;
  height: 3.5em;
  display: flex;
  border-bottom: 1px solid ${color.line};
  justify-content: space-between;
  position: fixed;
  background: white;
  align-items: center;
  padding: 0 1em;
`;

const RelativeBox = styled.div`
  position: relative;
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
