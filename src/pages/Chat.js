import React from "react";
import ChatHeaderNav from "../components/Chat/ChatHeaderNav";
import MsgList from "../components/Chat/MsgList";
import BottomNav from "../shared/BottomNav";
import Header from "../shared/Header";

const Chat = () => {
  return (
    <React.Fragment>
      <Header name="메시지"/>
      <MsgList />
      <BottomNav></BottomNav>
    </React.Fragment>
  );
};

export default Chat;
