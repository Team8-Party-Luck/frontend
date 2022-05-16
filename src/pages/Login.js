import React, { useState } from "react";
import Box from "@mui/material/Box";
import { history } from "../redux/configStore";
import { KAKAO_AUTH_URL } from "../shared/OAuth";
import styled from "styled-components";
import LoginImg from "../static/images/logo/img_login.png";

const Login = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            marginTop: 20,
          }}
        >
          <img src={LoginImg} alt="로그인 이미지" />
        </Box>
        <Box
          sx={{
            marginTop: 16,
          }}
          onClick={() => {
            window.location.href = KAKAO_AUTH_URL;
          }}
        >
          <img
            src="image/kakao/kakao_login_medium_wide.png"
            alt="카카오 로그인 버튼"
          />
        </Box>
        <JustSee
          onClick={() => {
            history.push("/home");
          }}
        >
          둘러보기
        </JustSee>
      </Box>
    </React.Fragment>
  );
};

const JustSee = styled.button`
  width: 300px;
  height: 43px;
  border-radius: 5px;
  border: none;
  margin-top: 1em;
  background: #dfdfdf;
`;

export default Login;
