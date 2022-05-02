import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 초기값
const initialState = {};

//토큰 가져오기
const token = sessionStorage.getItem("token");

const regiWriteSend = (Write_info) => {
  axios
    .post("http://3.38.180.96/api/party", Write_info, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type":
          "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
      },
    })
    .then((response) => {
      console.log(response.data);
      //메인페이지에서 데이터를 불러오는 함수
    })
    .catch((error) => {
      console.log(error);
    });
};

export default handleActions({}, initialState);

const actionCreators = {
  regiWriteSend,
};

export { actionCreators };
