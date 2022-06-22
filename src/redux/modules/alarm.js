import React, { useEffect } from "react";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import history from "../configStore";

import SockJS from "sockjs-client";
import * as Stomp from "stompjs";
const token = sessionStorage.getItem("token");
const userid = sessionStorage.getItem("userid");

//액션
const GET_ALARMLIST = "GET_ALARMLIST";
const GET_ALARM = "GET_ALARM";

//액션크레이터
const getAlarmList = createAction(GET_ALARMLIST, (list) => ({ list }));
const getAlarm = createAction(GET_ALARM, (alarm) => ({ alarm }));

// 초기값
const initialState = { alarm: [] };

// let sock = new SockJS("https://epocle.shop/ws-stomp");
let sock = new SockJS("http://54.180.88.119/ws-stomp");
let ws = Stomp.over(sock);

//실시간 알람 데이터 받아오기
//react-redux 로 알람 페이지에 뿌려주기
const ConnectSub = () => {
  return function (dispatch, getState, { history }) {
    try {
      ws.connect({ token: token }, () => {
        console.log("STOMP Connection");

        ws.subscribe(`/alarm/${userid}`, (res) => {
          console.log("받은 메세지", res);
          const newMessage = JSON.parse(res.body);


          dispatch(getAlarm(newMessage));
          alert(newMessage.alarms)
        });
      });
    } catch (error) {
      console.log(error.response);
      console.log(error);
    }
  };
};

const getAlarmData = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`http://54.180.88.119/alarmList`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        // const newMessage = JSON.parse(res.data);
        // console.log(newMessage);
        dispatch(getAlarmList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// s

function DisConnectUnsub() {
  try {
    ws.disconnect(() => {
      ws.unsubscribe("sub-0");
    });
  } catch (err) {
    console.log(err);
  }
}

//알람 읽었는지 안읽었는지 true, false 값으로 구분
// const sendFalse = async () => {
//   try {
//     const message = {
//       value: false,
//     };
//     ws.send("/app/send", { token: token }, JSON.stringify(message));
//   } catch (error) {
//     console.log(error);
//   }
// };

export default handleActions(
  {
    [GET_ALARMLIST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [GET_ALARM]: (state, action) =>
      produce(state, (draft) => {
        draft.alarm = action.payload.alarm;
      }),
  },
  initialState
);

const actionCreators = {
  ConnectSub,
  getAlarmData,
  getAlarmList,
  getAlarm,
  DisConnectUnsub,
};

export { actionCreators };
