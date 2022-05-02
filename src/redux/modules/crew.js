import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 초기값
const initialState = {};

//토큰 가져오기
const token = sessionStorage.getItem("token");

const regiWriteSend = (Write_info) => {
  const file = new FormData();
  file.append("image", Write_info.photos);
  file.append("title", Write_info.title);
  file.append("store", Write_info.store);
  file.append("capacity", Write_info.capacity);
  file.append("meeting", Write_info.meeting);
  file.append("date", Write_info.date);
  file.append("time", Write_info.time);
  file.append("desc", Write_info.desc);

  axios
    .post("http://3.38.180.96/api/party", file, {
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
