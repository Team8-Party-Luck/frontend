import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Spinner from "../components/Spinner";
import { Box } from "@mui/material";

const OAuth2RedirectHandeler = () => {
  const dispatch = useDispatch();

  // 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  React.useEffect(async () => {
    await dispatch(userActions.kakaoLogin(code));
  }, []);

  return (
    <Box>
      <Spinner></Spinner>
    </Box>
  );
};

export default OAuth2RedirectHandeler;
