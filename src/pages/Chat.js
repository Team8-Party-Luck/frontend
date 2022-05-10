import React from 'react';
import ChatHeaderNav from '../components/Chat/ChatHeaderNav';
import BottomNav from '../shared/BottomNav';

const Chat = () => {
  return(<React.Fragment>
    <ChatHeaderNav name="메시지"/>
    <BottomNav></BottomNav>
  </React.Fragment>)
}

export default Chat