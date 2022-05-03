import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { history } from "../configStore";

// 액션
const SAVE_INFO = "SAVE_INFO";

// 액션 크리에이터
const saveInfo = createAction(SAVE_INFO, (setting) => ({ setting }));

// 초기값
const initialState = {};

//토큰
const token = sessionStorage.getItem("token");

//미들웨어

//세팅정보 전송
const sendSettingsData = (Settings_info) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://3.38.180.96:8080/api/user/initial", Settings_info, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type":
            "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
        },
      })
      .then((res) => {
        console.log(res.data);
        history.push("/");
      })
      .catch((err) => {
        console.log("에러", err.response);
      });
  };
};

export default handleActions(
  {
    [SAVE_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.setting = action.payload.setting;
        console.log(draft.setting);
        // history.push("/setting2");
      }),
  },
  initialState
);

const actionCreators = {
  saveInfo,
  sendSettingsData,
};

export { actionCreators };
