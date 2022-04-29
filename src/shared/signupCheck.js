//이메일 유효성 검사
export const checkEmail = (email) => {
  let regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  return regEmail.test(email);
};

// 사용자 닉네임 체크 2자-6자이하
export const checkNickname = (nickname) => {
  let regName = /^.{2,6}$/;
  return regName.test(nickname);
};

// 특수문자 영문, 숫자 포함, 최소 8자 이상
export const checkPassword = (password) => {
  let regPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  return regPassword.test(password);
};
