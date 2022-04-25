import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import EmailAccess from "../components/EmailAccess";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const SignUp = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

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
              <Grid item xs={7.5}>
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
                xs={4.5}
                sx={{
                  marginTop: 2.5,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleClickOpen}
                >
                  인증번호발송
                </Button>
              </Grid>
            </Grid>
            {/* <Dialog open={open} onClose={handleClose}>
              <DialogTitle>인증번호확인</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  메일로 발송된 인증번호를 입력해주세요
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Access Code"
                  type="email"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>인증</Button>
                <Button onClick={handleClose}>취소</Button>
              </DialogActions>
            </Dialog> */}
            <EmailAccess open={open} setOpen={setOpen} />
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
