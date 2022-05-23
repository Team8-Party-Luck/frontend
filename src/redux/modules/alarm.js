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

let sock = new SockJS("https://epocle.shop/ws-stomp");
// let sock = new SockJS("http://54.180.88.119/ws-stomp");
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

          ws.subscribe(`/alarm/${userid}`, (res) => {
            console.log("받은 메세지", res);
            const newMessage = JSON.parse(res.body);

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
  DisConnectUnsub,
};

export { actionCreators };
