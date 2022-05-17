import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 액션
const LOGIN = "LOGIN";

const GET_USER_INFO = "GET_USER_INFO";
// const SET_CODE = "SET_CODE";
const SAVE_INFO = "SAVE_INFO";
const USER_CHECK = "USER_CHECK";

// 액션 크리에이터
const setLogin = createAction(LOGIN, (Login) => ({ Login }));
// const setLogout = createAction(LOGOUT, (Logout) => ({ Logout }));
const saveInfo = createAction(SAVE_INFO, (setting) => ({ setting }));
const getUserInfo = createAction(GET_USER_INFO, (user) => ({ user }));
const userCheck = createAction(USER_CHECK, (user) => ({ user }));
// const setCode = createAction(SET_CODE, (Code) => ({ Code }));

// 초기값
const initialState = {};

//

//미들웨어
//로그인요청
const loginDB = (Login_info) => {
  return function (dispatch, getState, { history }) {
    axios
      .post(`http://3.38.180.96:8080/user/login`, Login_info, {
        headers: {
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
          // Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        sessionStorage.setItem(
          "token",
          res.headers.authorization.split(" ")[1]
        );
        dispatch(setLogin(Login_info));
        history.push("/home");
      })
      .catch((err) => {
        alert("이메일 혹은 비밀번호가 일치하지 않습니다");
        console.log(err.response, "로그인 에러");
      });
  };
};

const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "GET",
      url: `http://3.38.180.96:8080/auth/kakao?code=${code}`,
    })
      .then((res) => {
        console.log(res.data); // 토큰이 넘어올 것임
        const KAKAO_TOKEN = res.data;

        sessionStorage.setItem("token", KAKAO_TOKEN); //세션에 저장

        axios
          .get("http://3.38.180.96:8080/api/user", {
            headers: {
              Authorization: `Bearer ${res.data}`,
              "content-type": "application/json;charset=UTF-8",
              accept: "application/json,",
            },
          })
          .then((res) => {
            console.log(res.data, "여기까지는 성공");
            sessionStorage.setItem("userid", res.data.result.userid);
            res.data.ok
              ? history.replace("/home")
              : history.replace("/setting");
          })
          .catch((err) => {
            console.log("두번 호출 실패", err.response);
          });
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        history.replace("/"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };
};

//회원가입 기능
const signupDB = (Signup_info) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://3.38.180.96:8080/api/user", Signup_info, {
        headers: {
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
          // Authorization: token,
        },
      })
      .then((res) => {
        alert("가입이 완료되었습니다");
        history.replace("/login");
        console.log(res.data);
      })
      .catch((err) => {
        console.log("회원가입 에러", err.response);
      });
  };
};

const sendSettingsData = (Settings_info) => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  return function (dispatch, getState, { history }) {
    axios
      .post("http://3.38.180.96:8080/api/user/initial", Settings_info, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
      })
      .then((res) => {
        console.log(res.data);
        history.push("/home");
      })
      .catch((err) => {
        console.log("에러", err.response);
      });
  };
};


//유저 세팅정보 받아오기
const getUserInfoDB = () => {
  const token = sessionStorage.getItem("token");
  return  async function (dispatch, getState, { history }) {
    try {
      const res =  await axios
      .get("http://3.38.180.96:8080/api/user/initial", {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
      })
       console.log(res.data);
       dispatch(getUserInfo(res.data));
    } catch(error) {
      console.log(error);
    }
   
      // .then((res) => {
      //   console.log(res.data);
      //   dispatch(getUserInfo(res.data));
      // })
      // .catch((err) => {
      //   console.log("에러", err.response);
      // });
  };
};

const updateSettingsData = (Update_info) => {
  const token = sessionStorage.getItem("token");
  return function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    axios
      .put("http://3.38.180.96:8080/api/user/initial", Update_info, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type":
            "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
        },
      })
      .then((res) => {
        console.log(res.data);
        history.push("/profile");
      })
      .catch((err) => {
        console.log("에러", err.response);
      });
  };
};

const userCheckDB = () => {
  const token = sessionStorage.getItem("token");
  return function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    axios
      .get("http://3.38.180.96:8080/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
      })
      .then((res) => {
        dispatch(userCheck(res.data));
      })
      .catch((err) => {
        console.log("에러", err.response);
      });
  };
};

export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
    [GET_USER_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
    [SAVE_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.setting = action.payload.setting;
      }),
    [USER_CHECK]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
  },
  initialState
);

const actionCreators = {
  signupDB,
  loginDB,
  kakaoLogin,
  saveInfo,
  sendSettingsData,
  getUserInfoDB,
  updateSettingsData,
  userCheck,
  userCheckDB,
};

export { actionCreators };
