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
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          여기는 로고
        </Typography>
        <form>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            autoFocus
            onChange={handleChange("email")}
          />
          <TextField
            required
            fullWidth
            label="Password"
            type="password"
            onChange={handleChange("password")}
          />
        </form>
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ marginTop: 2 }}
          onClick={login}
        >
          로그인하기
        </Button>
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
