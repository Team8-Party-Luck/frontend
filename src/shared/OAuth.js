const CLIENT_ID = "69e09d88a64e1a73b8fe2357f551ef81";

// 웹
const REDIRECT_URI = "https://www.eatsring.com/auth/kakao";
// 로컬
// const REDIRECT_URI = "http://localhost:3000/auth/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
