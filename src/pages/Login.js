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
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const login = () => {
    const Login_info = {
      email: values.email,
      password: values.password,
    };

    console.log(Login_info);

    dispatch(userActions.loginDB(Login_info));
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <img src="image/0.회원가입,로그인/img_login.png" />
        </div>
        <div>
          <img src="image/kakao/kakao_login_medium_wide.png" />
        </div>
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ marginTop: 2 }}
          onClick={() => {
            window.location.href = KAKAO_AUTH_URL;
          }}
        >
          카카오로 시작하기
        </Button>
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ marginTop: 2 }}
          onClick={() => {
            history.push("/signup");
          }}
        >
          파티럭이 처음이신가요? 회원가입하기
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default Login;
