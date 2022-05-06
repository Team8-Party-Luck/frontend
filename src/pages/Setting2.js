import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Header from "../components/Settings/Header";
import { actionCreators as userActions } from "../redux/modules/user";

const Setting2 = (props) => {
  const settingInfo = useSelector((state) => state?.user?.setting);

  console.log(settingInfo);
  console.log(Object.values(settingInfo?.food));

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    nickname: "",
    sns: "",
    intro: "",
  });

  console.log(values);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const sendSettings = () => {
    const Settings_info = {
      gender: settingInfo?.gender,
      age: settingInfo?.age,
      city: settingInfo?.city,
      region: settingInfo?.region,
      food: Object.values(settingInfo?.food),
      nickname: values.nickname,
      sns: values.sns,
      intro: values.intro,
    };
    console.log(Settings_info);

    dispatch(userActions.sendSettingsData(Settings_info));
  };

  return (
    <React.Fragment>
      <Header></Header>
      <Box
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography component="h4" variant="p" position={"relative"}>
          닉네임
        </Typography>
        <TextField
          id="outlined-basic"
          label="닉네임을 입력해주세요"
          variant="outlined"
          sx={{ marginTop: 1 }}
          onChange={handleChange("nickname")}
        />
        <Typography component="h4" variant="p" sx={{ marginTop: 3 }}>
          SNS
        </Typography>
        <TextField
          id="outlined-basic"
          label="URL을 입력해주세요"
          variant="outlined"
          sx={{ marginTop: 1 }}
          onChange={handleChange("sns")}
        />
        <Typography
          component="h4"
          variant="p"
          sx={{ marginTop: 3, marginBottom: 1 }}
        >
          자기소개
        </Typography>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={18}
          placeholder="자기소개를 입력해주세요!"
          style={{
            width: "100%",
            border: "1px solid lightgray",
            borderRadius: "4px",
          }}
          onChange={handleChange("intro")}
        />
        <Button
          variant="contained"
          onClick={() => {
            sendSettings();
          }}
          sx={{
            position: "absolute",
            width: "92%",
            bottom: 50,
            left: "4%",
            right: "4%",
            height: "4em",
            background: "#FF6853",
          }}
        >
          저장하기
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default Setting2;
