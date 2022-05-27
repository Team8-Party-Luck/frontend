import axios from "axios";

const api = axios.create({
  baseURL: "https://epocle.shop", //우창님
  // baseURL: "http://13.125.216.238", //형빈님
  // baseURL: "http://54.180.88.119", //로컬
});

// 유저 관련 API
export const userApi = {
  //kakao 로그인
  kakaoLogin: (code) => api.get(`/auth/kakao?code=${code}`),

  //회원 탈퇴
  userSecession: () =>
    api.delete(`/api/user`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),

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
  //유저 신고 기능
  userReport: (Report_info) =>
    api.post(`/api/user/report`, Report_info, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),
};

// 실시간 알림 관련 API
export const alertApi = {};

// 크루 관련 API
export const crewApi = {
  //파티등록
  partyRegi: (file) =>
    api.post(`/api/party`, file, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type":
          "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
      },
    }),

  //파티수정
  partyRevise: (partyId, file) =>
    api.put(`api/party/${partyId}`, file, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type":
          "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
      },
    }),

  //파티삭제
  partyDelete: (partyId) =>
    api.delete(`api/party/${partyId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),

  // 홈 화면에서 전체 파티 데이터
  getAllList: (pageNum) =>
    api.get(`api/parties/raw/${pageNum}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),

  //지역필터
  partyRegionData: (file) =>
    api.post(`home/parties/local`, file, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type":
          "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
      },
    }),

  //파티 상세정보
  partyDetailInfo: (partyId) =>
    api.get(`api/party/details/${partyId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),

  //파티 신청한 유저 조회
  partySubUser: (partyId) =>
    api.get(`api/party/userlist/${partyId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),

  //내가 참가한 파티 조회
  partyMeTake: () =>
    api.get(`api/parties/history/in`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),

  //내가 찜한 파티 조회
  partyMeLike: () =>
    api.get(`api/parties/sub`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),

  //파티 찜
  partyLike: (partyId) =>
    api.get(`api/party/sub/${partyId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),

  //파티 신청
  partySub: (partyId) =>
    api.get(`api/party/in/${partyId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),

  //파티 신청 취소
  partySubCancel: (partyId) =>
    api.delete(`api/party/out/${partyId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),

  //참여할 파티 조회
  partySubMe: () =>
    api.get(`home/parties/join`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }),
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
