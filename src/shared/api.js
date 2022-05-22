import axios from "axios";

const api = axios.create({
  baseURL: "http://3.38.180.96",
});

// 유저 관련 API
export const userApi = {
  //초기 세팅정보 보내기
  settingsData: (Settings_info) =>
    api.post(`/api/user/initial`, Settings_info, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),

  // //유저 세팅정보 받아오기
  // userInfo:
};

// 실시간 알림 관련 API
export const alertApi = {};

// 크루 관련 API
export const crewApi = {
  //전체 데이터 받아오기
  getAllList: (pageNum) => api.get(`/api/parties/raw/${pageNum}`),
};

// 실시간채팅 관련 API
export const chatApi = {};
