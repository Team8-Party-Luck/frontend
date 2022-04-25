import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const SignUp = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const signup = () => {
    const Signup_info = {
      nickname: values.nickname,
      email: values.email,
      password: values.password,
      passwordCheck: values.passwordCheck,
    };

    console.log(Signup_info);

    // dispatch(userActions.signupDB(Signup_info));
  };
  return (
    <React.Fragment>
      <Container maxWidth="xs" component="main">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <form>
            <TextField
              margin="normal"
              required
              fullWidth
              label="nickname"
              autoFocus
              onChange={handleChange("nickname")}
            />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Email"
                  onChange={handleChange("email")}
                />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  marginTop: 2.5,
                }}
              >
                <Button variant="contained" size="large">
                  이메일 확인
                </Button>
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={handleChange("password")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password Check"
              onChange={handleChange("passwordCheck")}
            />
          </form>
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={signup}
          >
            회원가입
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default SignUp;
