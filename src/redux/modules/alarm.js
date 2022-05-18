import React, { useEffect } from "react";
import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import history from "../configStore";

import SockJS from "sockjs-client";
import * as Stomp from "stompjs";

const token = sessionStorage.getItem("token");
const userid = sessionStorage.getItem("userid");

//액션
const GET_ALARM = "GET_ALARM";

//액션크레이터
const getAlarm = createAction(GET_ALARM, (alarm) => ({ alarm }));

// 초기값
const initialState = { alarm: [] };

let sock = new SockJS("http://121.141.140.148:8080/ws-stomp");
let ws = Stomp.over(sock);

//실시간 알람 데이터 받아오기
//react-redux 로 알람 페이지에 뿌려주기
const ConnectSub = () => {
  return function (dispatch, getState, { history }) {
    try {
      ws.connect(
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json;charset=UTF-8",
            accept: "application/json,",
          },
        },
        () => {
          console.log("STOMP Connection");

          ws.subscribe(`/userAlarm/get/${userid}`, (response) => {
            console.log("받은 메세지", response);
            const newMessage = JSON.parse(response.body);

            dispatch(getAlarm(newMessage));
            // let messageAl = newMessage.messageAl;
            // let partyId = newMessage.messageAl;
            // let title = newMessage.messageAl;
            // let store = newMessage.messageAl;
            // let image = newMessage.messageAl;

            // let str = `<AlarmCard></AlarmCard>`;
            // $("alarm").append(str);
          });
        }
      );
    } catch (error) {
      console.log(error.response);
      console.log(error);
    }
  };
};

const onSend = async () => {
  try {
    if (!token) {
      alert("문제가 발생했습니다. 다시 로그인 해주세요.");
      history.replace("/");
    }
    // // send할 데이터
    // const message = {
    //   messageAl: messageAl,
    //   partyId: partyId,
    //   title: title,
    //   store: store,
    //   image: image,
    // };
    // // 로딩 중
    // waitForConnection(ws, function () {
    //   ws.send(
    //     `/userAlarm/send/${userid}`,
    //     { token: token },
    //     JSON.stringify(message)
    //   );
    //   console.log(ws.ws.readyState);
    //   console.log(message);
    // });
  } catch (error) {
    console.log(error);
    console.log(ws.ws.readyState);
  }
};

// 웹소켓이 연결될 때 까지 실행
function waitForConnection(ws, callback) {
  setTimeout(
    function () {
      // 연결되었을 때 콜백함수 실행
      if (ws.ws.readyState === 1) {
        callback();
        // 연결이 안 되었으면 재호출
      } else {
        waitForConnection(ws, callback);
      }
    },
    1 // 밀리초 간격으로 실행
  );
}

export { ConnectSub, DisConnectUnsub, onSend };

// 연결 해제 => 로그아웃시 실행
function DisConnectUnsub() {
  try {
    ws.disconnect(
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type":
            "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
        },
      },
      () => {
        ws.unsubscribe(`/userAlarm/del/${userid}`);
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type":
            "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
        },
      }
    );
  } catch (error) {
    console.log(error.response);
  }
}

export default handleActions(
  {
    [GET_ALARM]: (state, action) =>
      produce(state, (draft) => {
        draft.alarm = action.payload.alarm;
      }),
  },
  initialState
);

const actionCreators = {
  ConnectSub,
  getAlarm,
  onSend,
  DisConnectUnsub,
};

export { actionCreators };
