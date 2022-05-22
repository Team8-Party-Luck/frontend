import axios from "axios";

const api = axios.create({
  baseURL: "http://3.38.180.96",
});

// 유저 관련 API
export const userApi = {
  //kakao 로그인
  kakaoLogin: (code) => api.get(`/auth/kakao?code=${code}`),

  //초기 세팅정보 보내기
  settingsData: (Settings_info) =>
    api.post(`/api/user/initial`, Settings_info, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),

  //유저 초기 세팅정보 받아오기
  userInfo: () =>
    api.get(`/api/user/initial`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),

  //유저 정보 업데이트
  updateSettings: (Update_info) =>
    api.put(`/api/user/initial`, Update_info, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type":
          "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
      },
    }),
  //유저 정보 체크
  userCheck: () =>
    api.get(`/api/user`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),
};

// 실시간 알림 관련 API
export const alertApi = {};

// 크루 관련 API
export const crewApi = {
  //전체 데이터 받아오기
  getAllList: (pageNum) => api.get(`/api/parties/raw/${pageNum}`),
};

// 실시간채팅 관련 API
export const chatApi = {
  //채팅페이지에서 보여줄 여러 유저들 리스트
  chatList: () =>
    api.get(`/chatroom/get`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),

  //채팅방에서 나눴던 과거의 메시지 리스트
  msgList: (chatRoomId) =>
    api.get(`/chatroom/get/${chatRoomId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),

  //채팅방 번호 받아오기
  roomIdDB: (roomId) =>
    api.post(
      `/chatroom/create`,
      {
        otherId: roomId,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    ),
  //채팅방에 속해있는 유저정보 불러오기
  chatUser: (roomId) =>
    api.get(`/chatroom/user/${roomId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),
};
