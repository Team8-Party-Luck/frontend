import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//액션
const GET_CREW = "GET_CREW";

//액션크레이터
const getCrew = createAction(GET_CREW, (crew) => ({ crew }));

// 초기값
const initialState = {};

//토큰 가져오기
const token = sessionStorage.getItem("token");

//미들웨어
//등록하기
const regiWriteSend = (Write_info) => {
  return function (dispatch, getState, { history }) {
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
};

//홈화면에서 전체 데이터 받아오기
const getDataDB = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get("http://3.38.180.96/api/parties")
      .then((res) => {
        dispatch(getCrew(res.data));
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default handleActions(
  {
    [GET_CREW]: (state, action) =>
      produce(state, (draft) => {
        draft.crew = action.payload.crew;
      }),
  },
  initialState
);

const actionCreators = {
  regiWriteSend,
  getCrew,
  getDataDB,
};

export { actionCreators };
