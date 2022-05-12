import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configStore";
import { KAKAO_AUTH_URL } from "../shared/OAuth";
import styled from "styled-components";

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
          <img src="image/login/img_login.png" />
        </Box>
        <Box
          sx={{
            marginTop: 16,
          }}
          onClick={() => {
            window.location.href = KAKAO_AUTH_URL;
          }}
        >
          <img src="image/kakao/kakao_login_medium_wide.png" />
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
`;

export default Login;
