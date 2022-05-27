//이메일 유효성 검사
export const checkEmail = (email) => {
  let regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  return regEmail.test(email);
};

// 사용자 닉네임 체크 2자-10자이하
export const checkNickname = (nickname) => {
  let regName = /^.{2,10}$/;
  return regName.test(nickname);
};

// 사용자 자기소개 체크 5자-100자이하
export const checkIntro = (intro) => {
  let regIntro = /^.{5,100}$/;
  return regIntro.test(intro);
};
