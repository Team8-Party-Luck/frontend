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
        <Box>
          <img src="image/0.회원가입,로그인/img_login.png" />
        </Box>
        <Box
          sx={{
            marginTop: 20,
          }}
          onClick={() => {
            window.location.href = KAKAO_AUTH_URL;
          }}
        >
          <img src="image/kakao/kakao_login_medium_wide.png" />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Login;
