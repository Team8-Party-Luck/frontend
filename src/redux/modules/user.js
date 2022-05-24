import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { userApi } from "../../shared/api";

// 액션
const GET_USER_INFO = "GET_USER_INFO";
const SAVE_INFO = "SAVE_INFO";
const USER_CHECK = "USER_CHECK";

// 액션 크리에이터
const getUserInfo = createAction(GET_USER_INFO, (user) => ({ user }));
const userCheck = createAction(USER_CHECK, (check) => ({ check }));

// 초기값
const initialState = {};

  
//미들웨어
//카카오로그인
const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    // axios
    //   .get(`http://3.38.180.96/auth/kakao?code=${code}`)
    userApi
      .kakaoLogin(code)
      .then((res) => {
        console.log("성공");
        console.log(res.data); // 토큰이 넘어올 것임
        const KAKAO_TOKEN = res.data;
        sessionStorage.setItem("token", KAKAO_TOKEN); //세션에 저장

        // axios
        //   .get("http://3.38.180.96:8080/api/user", {
        //     headers: {
        //       Authorization: `Bearer ${res.data}`,
        //       "content-type": "application/json;charset=UTF-8",
        //       accept: "application/json,",
        //     },
        //   })

        userApi
          .userCheck()
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

//세팅 데이터 보내기
const sendSettingsData = (Settings_info) => {
  return function (dispatch, getState, { history }) {
    userApi
      .settingsData(Settings_info)
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
  return function (dispatch, getState, { history }) {
    userApi
      .userInfo()
      .then((res) => {
        dispatch(getUserInfo(res.data));
      })
      .catch((err) => {
        console.log("에러", err.response);
      });
  };
};

//유저 정보 업데이트
const updateSettingsData = (Update_info) => {
  return function (dispatch, getState, { history }) {
    userApi
      .updateSettings(Update_info)
      .then((res) => {
        console.log(res.data);
        history.push("/profile");
      })
      .catch((err) => {
        console.log("에러", err.response);
      });
  };
};

// //유저 정보 업데이트
// const updateSettingsData = (Update_info) => {
//   const token = sessionStorage.getItem("token");
//   return async function (dispatch, getState, { history }) {
//     try {
//       const res = await axios.put(
//         "http://3.38.180.96:8080/api/user/initial",
//         Update_info,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type":
//               "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
//           },
//         }
//       );
//       console.log(res.data);
//       history.push("/profile");
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

//파티 유저가 호스트인지,좋아요를 눌렀는지 등 확인
const userCheckDB = () => {
  return function (dispatch, getState, { history }) {
    userApi
      .userCheck()
      .then((res) => {
        console.log(res.data);
        dispatch(userCheck(res.data));
      })
      .catch((err) => {
        console.log(err.res);
      });
  };
};
// //파티 유저가 호스트인지,좋아요를 눌렀는지 등 확인
// const userCheckDB = () => {
//   const token = sessionStorage.getItem("token");
//   return function (dispatch, getState, { history }) {
//     axios
//       .get("http://3.38.180.96:8080/api/user", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "content-type": "application/json;charset=UTF-8",
//           accept: "application/json,",
//         },
//       })
//       .then((res) => {
//         console.log(res.data);
//         dispatch(userCheck(res.data));
//       })
//       .catch((err) => {
//         console.log(err.res);
//       });
//   };
// };

//회원탈퇴
const userSecessionDB = () => {
  return function (dispatch, getState, { history }) {
    userApi
      .userSecession()
      .then((res) => {
        console.log(res.data);
        history.push(`/`);
      })
      .catch((err) => {
        console.log(err.res);
      });
  };
};

export default handleActions(
  {
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
        draft.check = action.payload.check;
      }),
  },
  initialState
);

const actionCreators = {
  kakaoLogin,
  sendSettingsData,
  getUserInfoDB,
  updateSettingsData,
  userCheck,
  userCheckDB,
  userSecessionDB,
};

export { actionCreators };
