import React from "react";
import MsgList from "../components/Chat/MsgList";
import BottomNav from "../shared/BottomNav";
import Header from "../shared/Header";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as chatActions } from "../redux/modules/chat";
import NullData from "../shared/NullData";
import styled from "styled-components";

const Chat = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(chatActions.getChatListDB());
  }, []);

  const msgList = useSelector((state) => state?.chat?.list);
  // console.log(msgList);

  if (msgList?.length === 0) {
    return (
      <ChatDiv>
        <Header name={"메시지"} />
        <ListBox>
          <NullData title={"앗! 메시지 내역이 없습니다"} />
        </ListBox>
        <BottomNav />
      </ChatDiv>
    );
  } else {
    return (
      <ChatDiv>
        <Header name="메시지" />
        <MsgList msgList={msgList} />
        <BottomNav />
      </ChatDiv>
    );
  }
};
const ListBox = styled.div`
  width: 100%;
  padding: 1.5em;
  padding-top: 20em;
  padding-bottom: 5em;
  overflow-y: auto;
`;

const ChatDiv = styled.div`
  height: calc(var(--vh, 1vh) * 100);
`;

export default Chat;
