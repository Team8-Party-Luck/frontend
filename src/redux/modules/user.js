import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 액션
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SET_USER = "SET_USER";
const SET_CODE = "SET_CODE";
const SAVE_INFO = "SAVE_INFO";

// 액션 크리에이터
const setLogin = createAction(LOGIN, (Login) => ({ Login }));
const setLogout = createAction(LOGOUT, (Logout) => ({ Logout }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const saveInfo = createAction(SAVE_INFO, (setting) => ({ setting }));
// const setCode = createAction(SET_CODE, (Code) => ({ Code }));

// 초기값
const initialState = {};

const token = sessionStorage.getItem("token");

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

        sessionStorage.setItem("token", KAKAO_TOKEN); //예시로 로컬에 저장함

        history.push("/setting"); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        history.replace("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
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

const getUserInfoDB = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get("http://3.38.180.96:8080/api/user/initial", {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
      })
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((err) => {
        console.log("회원가입 에러", err.response);
      });
  };
};

//세팅정보 전송
const sendSettingsData = (Settings_info) => {
  return function (dispatch, getState, { history }) {
    console.log(token);
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

// const sendAccessCodeDB = (Login_info) => {
//   return function (dispatch, getState, { history }) {
//     axios
//       .post("/api/user", Login_info, {
//         headers: {
//           "content-type": "application/json;charset=UTF-8",
//           accept: "application/json,",
//           // Authorization: token,
//         },
//       })
//       .then((res) => {
//         //console.log(res)
//         sessionStorage.clear();
//         dispatch(setLogout());
//         history.push("/login");
//       })
//       .catch((err) => {
//         console.log("로그아웃 에러", err.response);
//       });
//   };
// };

export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
    [SET_CODE]: (state, action) =>
      produce(state, (draft) => {
        draft.code = action.payload.code;
      }),
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
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
  signupDB,
  loginDB,
  // logoutDB,
  setLogout,
  kakaoLogin,
  // sendAccessCodeDB,
  getUserInfoDB,
  sendSettingsData,
  saveInfo,
};

export { actionCreators };
