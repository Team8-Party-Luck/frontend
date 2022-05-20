import React from "react";
import ChatHeaderNav from "../components/Chat/ChatHeaderNav";
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
  console.log(msgList);

  if (msgList?.length === 0) {
    return (
      <React.Fragment>
        <Header name={"메시지"} />
        <ListBox>
          <NullData title={"앗! 메시지 내역이 없습니다"} />
        </ListBox>
        <BottomNav />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Header name="메시지" />
        <MsgList msgList={msgList} />
        <BottomNav />
      </React.Fragment>
    );
  }
};
const ListBox = styled.div`
  width: 100%;
  height: 60em;
  padding: 1.5em;
  padding-top: 3em;
  padding-bottom: 5em;
  overflow-y: auto;
`;

export default Chat;
