import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const token = sessionStorage.getItem("token");

//액션
const GET_CHAT_LIST = "GET_CHAT_LIST";
const GET_MSG_LIST = "GET_CHAT_LIST";

//액션크레이터
const getChatList = createAction(GET_CHAT_LIST, (chat) => ({ chat }));
const getMsgList = createAction(GET_MSG_LIST, (msg) => ({ msg }));

// 초기값
const initialState = {};

// 채팅 페이지에서 채팅 리스트 데이터 받아오기
const getChatListDB = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`http://3.38.180.96/chatroom/get`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(getChatList(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//과거에 나눴던 채팅들 받아오기
const getMsgListDB = (roomId) => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`http://3.38.180.96/chatroom/get/${roomId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(getMsgList(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default handleActions(
  {
    [GET_CHAT_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.chat = action.payload.chat;
      }),
    [GET_MSG_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.msg = action.payload.msg;
      }),
  },
  initialState
);

const actionCreators = {
  getChatList,
  getChatListDB,
  getMsgList,
  getMsgListDB,
};

export { actionCreators };
