import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { history } from "../configStore";

//액션
const GET_CREW = "GET_CREW";
const GET_DETAIL = "GET_PARTYDETAIL";
const GET_JOINED = "GET_JOINED";
const GET_SCRAP = "GET_SCRAP";

//액션크레이터
const getCrew = createAction(GET_CREW, (crew) => ({ crew }));
const getDetail = createAction(GET_DETAIL, (info) => ({ info }));
const getJoined = createAction(GET_JOINED, (joined) => ({ joined }));
const getScrap = createAction(GET_SCRAP, (scrap) => ({ scrap }));

// 초기값
const initialState = {};

//토큰 가져오기
const token = sessionStorage.getItem("token");

//미들웨어
//등록하기
const regiWriteSend = (Write_info) => {
  return function (dispatch, getState, { history }) {
    const file = new FormData();
    // file.append("image", Write_info.image);
    file.append("title", Write_info.title);
    file.append("store", Write_info.store);
    file.append("address", Write_info.address);
    file.append("capacity", Write_info.capacity);
    file.append("meeting", Write_info.meeting);
    file.append("date", Write_info.date);
    file.append("time", Write_info.time);
    file.append("desc", Write_info.desc);

    Array.from(Write_info.image).forEach((a) => {
      file.append('image', a);
    })

    console.log(file);
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

const reviseSend = (Write_info, partyId) => {
  return function (dispatch, getState, { history }) {
    const file = new FormData();
    file.append("title", Write_info.title);
    file.append("store", Write_info.store);
    file.append("capacity", String(Write_info.capacity));
    file.append("meeting", Write_info.meeting);
    file.append("date", Write_info.date);
    file.append("time", Write_info.time);
    file.append("desc", Write_info.desc);

    axios
      .put(`http://3.38.180.96/api/party/${partyId}`, file, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type":
            "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log("성공");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//등록한 글 삭제기능
const deleteSend = (partyId) => {
  return function (dispatch, getState, { history }) {
    axios
      .delete(`http://3.38.180.96/api/party/${partyId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
      })
      .then((response) => {
        console.log(response.data);
        history.push("/home");
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
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//상세정보 받아오기
const getDetailInfo = (partyId) => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`http://3.38.180.96:8080/api/party/details/${partyId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
      })
      .then((res) => {
        dispatch(getDetail(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
// 내가 참여한 파티 조회
const getJoinedData = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get("http://3.38.180.96:8080/api/parties/history/in", {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(getJoined(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//내가 찜한 파티 조회
const getScrapData = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get("http://3.38.180.96:8080/api/parties/sub", {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(getScrap(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//파티 찜하기 기능
const sendScrapData = (partyId) => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`http://3.38.180.96:8080/api/party/sub/${partyId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
      })
      .then((res) => {
        dispatch(getDetail(res.data));
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
    [GET_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.info = action.payload.info;
      }),
    [GET_JOINED]: (state, action) =>
      produce(state, (draft) => {
        draft.joined = action.payload.joined;
      }),
    [GET_SCRAP]: (state, action) =>
      produce(state, (draft) => {
        draft.scrap = action.payload.scrap;
      }),
  },
  initialState
);

const actionCreators = {
  regiWriteSend,
  deleteSend,
  reviseSend,
  getCrew,
  getDataDB,
  getDetailInfo,
  getDetail,
  getJoined,
  getJoinedData,
  getScrap,
  getScrapData,
  sendScrapData,
};

export { actionCreators };
