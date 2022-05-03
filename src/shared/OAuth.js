const CLIENT_ID = "69e09d88a64e1a73b8fe2357f551ef81";

const REDIRECT_URI = "http://localhost:3000/auth/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

// https://kauth.kakao.com/oauth/authorize?client_id=c4f01d9a0b79af30e7fa9225a1419b3b&redirect_uri=http://localhost:3000/user/kakao/callback&response_type=code