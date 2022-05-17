import axios from "axios";

const token = sessionStorage.getItem("token");

const api = axios.create({
  baseURL: "http://3.38.180.96",
  headers: {
    Authorization: `Bearer ${token}`,
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});

const apis = axios.create({
  baseURL: "http://3.38.180.96",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type":
      "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
  },
});

// 유저 관련 API
export const userApi = {};

// 실시간 알림 관련 API
export const alertApi = {};

// 크루 관련 API
export const crewApi = {};

// 실시간채팅 관련 API
export const chatApi = {};
