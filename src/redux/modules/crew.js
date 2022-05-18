import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { history } from "../configStore";

const token = sessionStorage.getItem("token");

//액션
const GET_CREW = "GET_CREW";
const GET_DETAIL = "GET_PARTYDETAIL";
const GET_JOINED = "GET_JOINED";
const GET_SCRAP = "GET_SCRAP";
const GET_DETAILUSER = "GET_DETAILUSER";
const GET_WILL = "GET_WILL";
const GET_REGION = "GET_REGION";

//액션크레이터
const getCrew = createAction(GET_CREW, (crew) => ({ crew }));
const getDetail = createAction(GET_DETAIL, (info) => ({ info }));
const getJoined = createAction(GET_JOINED, (joined) => ({ joined }));
const getScrap = createAction(GET_SCRAP, (scrap) => ({ scrap }));
const getDetailUser = createAction(GET_DETAILUSER, (detailUser) => ({
  detailUser,
}));
const getWill = createAction(GET_WILL, (will) => ({ will }));
const getRegion = createAction(GET_REGION, (region) => ({ region }));

// 초기값
const initialState = { crew: [] };

//미들웨어

//파티생성
const regiWriteSend = (Write_info) => {
  return function (dispatch, getState, { history }) {
    const file = new FormData();
    file.append("defaultImage", Write_info.defaultImage);
    file.append("title", Write_info.title);
    file.append("store", Write_info.store);
    file.append("address", Write_info.address);
    file.append("place_url", Write_info.place_url);
    file.append("xy", Write_info.xy);
    file.append("capacity", Write_info.capacity);
    file.append("age", Write_info.age);
    file.append("gender", Write_info.gender);
    file.append("date", Write_info.date);
    file.append("time", Write_info.time);
    file.append("meeting", Write_info.meeting);
    file.append("desc", Write_info.desc);

    Array.from(Write_info.image).forEach((a) => {
      file.append("image", a);
    });

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
        alert("파티를 등록하시겠습니까?");
        history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//파티수정
const reviseSend = (Write_info, partyId) => {
  return function (dispatch, getState, { history }) {
    const file = new FormData();
    file.append("title", Write_info.title);
    file.append("store", Write_info.store);
    file.append("address", Write_info.address);
    file.append("place_url", Write_info.place_url);
    file.append("xy", Write_info.xy);
    file.append("capacity", Write_info.capacity);
    file.append("age", Write_info.age);
    file.append("gender", Write_info.gender);
    file.append("date", Write_info.date);
    file.append("time", Write_info.time);
    file.append("meeting", Write_info.meeting);
    file.append("desc", Write_info.desc);

    // Array.from(Write_info.image).forEach((a) => {
    //   file.append("image", a);
    // });

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

        alert("수정 성공했습니다");
        history.replace(`/partyInfo/${partyId}`);
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

// 홈화면에서 전체 데이터 받아오기
const getDataDB = (pageNum) => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await axios.get(`http://3.38.180.96/api/parties/raw/${pageNum}`);
      console.log(res.data.results);
      dispatch(getCrew(res.data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

//지역필터
const getRegionData = (answer) => {
  
  return async function (dispatch, getState, { history }) {
    try {
      const res = await axios.get('/home/parties/local/${pageid}', {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
        data: { answer: answer },
      });
      // console.log(res.data.results);
      // dispatch(getRegion(res.data.results));
    } catch (err) {
      console.log(err);
    }
  };
};

//상세정보 받아오기
const getDetailInfo = (partyId) => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await axios.get(
        `http://3.38.180.96:8080/api/party/details/${partyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json;charset=UTF-8",
            accept: "application/json,",
          },
        }
      );
      dispatch(getDetail(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

//파티 유저리스트 조회
const getUserList = (partyId) => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await axios.get(
        `http://3.38.180.96:8080/api/party/userlist/${partyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json;charset=UTF-8",
            accept: "application/json,",
          },
        }
      );
      dispatch(getDetailUser(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

// 내가 참여한 파티 조회
const getJoinedData = () => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await axios.get("http://3.38.180.96:8080/api/parties/history/in", {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
      });
      console.log(res.data);
      dispatch(getJoined(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

//내가 찜한 파티 조회
const getScrapData = () => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await axios.get("http://3.38.180.96:8080/api/parties/sub", {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
      });
      console.log(res.data);
      dispatch(getScrap(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

//파티 찜하기 기능
const sendScrapData = (partyId) => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await axios.get(
        `http://3.38.180.96:8080/api/party/sub/${partyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json;charset=UTF-8",
            accept: "application/json,",
          },
        }
      );
      dispatch(getDetail(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

//파티 신청
const sendJoinData = (partyId) => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await axios.get(`http://3.38.180.96:8080/api/party/in/${partyId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
      });
      alert("파티신청이 완료되었습니다");
      dispatch(getDetail(res.data));
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
};

//파티 신청 취소
const sendCancelData = (partyId) => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await axios.delete(
        `http://3.38.180.96:8080/api/party/out/${partyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json;charset=UTF-8",
            accept: "application/json,",
          },
        }
      );
      alert("파티취소가 완료되었습니다");
      dispatch(getDetail(res.data));
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
};

//참여할 파티 조회
const getWillData = () => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await axios.get("http://3.38.180.96:8080/home/parties/join", {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
      });
      console.log(res.data.results);
      dispatch(getWill(res.data.results));
    } catch (err) {
      console.log(err);
    }
  };
};

export default handleActions(
  {
    [GET_CREW]: (state, action) =>
      produce(state, (draft) => {
        draft.crew.push(...action.payload.crew);
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
    [GET_DETAILUSER]: (state, action) =>
      produce(state, (draft) => {
        draft.detailUser = action.payload.detailUser;
      }),
    [GET_WILL]: (state, action) =>
      produce(state, (draft) => {
        draft.will = action.payload.will;
      }),
    [GET_REGION]: (state, action) =>
      produce(state, (draft) => {
        draft.region = action.payload.region;
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
  sendJoinData,
  sendCancelData,
  getUserList,
  getDetailUser,
  getWillData,
  getWill,
  getRegionData,
  getRegion,
};

export { actionCreators };
