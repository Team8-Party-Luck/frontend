import React from "react";
import ChatHeaderNav from "../components/Chat/ChatHeaderNav";
import BottomNav from "../shared/BottomNav";

// import SockJS from "sockjs-client";
// import * as Stomp from "@stomp/stompjs";

const UserChat = () => {
  // let sock = new SockJS("http://121.141.140.148:8088/gs-guide-websocket");
  // let ws = Stomp.over(sock);

  // const enterMessage = {
  //   roomId: roomId,
  //   username: sender,
  //   type: 'ENTER',
  // }

  // function ConnectSub() {
  //   try {
  //     ws.connect({}, () => {
  //       ws.subscribe(
  //         `/topic/greetings/${roomId}`,
  //         (response) => {
  //           console.log("받은 메세지", response);
  //           const newMessage = JSON.parse(response.body);
  //           console.log("받은 메세지", newMessage);
  //           // newM = newMessage
  //           if (newMessage.length === 1){
  //             dispatch(sockActions.sendMessage(newMessage));
  //           }else {
  //             dispatch(sockActions.getMessageDB(newMessage));
  //           }
  //         },
  //       )
  //         ws.send(
  //           `/app/hello`,
  //           {token: token},
  //           JSON.stringify(enterMessage)
  //         )
  //     });
  //   } catch (error) {
  //     console.log("fdfdfdfdf", error.response);
  //     console.log(error);
  //   }
  // }
  //   // 연결 해제
  //   function DisConnectUnsub() {
  //     try {
  //       ws.disconnect( {
  //         token: token
  //       }, () => {
  //           ws.unsubscribe(`/topic/greetings/${roomId}`);
  //         },
  //         { token: token }
  //       );
  //     } catch (error) {
  //       console.log(error.response);
  //     }
  //   }

  //   React.useEffect(() => {
  //     ConnectSub();
  //     // dispatch(sockActions.getMessageDB(newM));
  //     return () => {
  //       DisConnectUnsub();
  //     };
  //   }, [roomId]);

  return (
    <React.Fragment>
      <ChatHeaderNav name="이상민" />
      <BottomNav></BottomNav>
    </React.Fragment>
  );
};

export default UserChat;
