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
import { actionCreators as settingActions } from "../redux/modules/setting";

const Setting2 = (props) => {
  const settingInfo = useSelector((state) => state.setting.setting);

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    sns: "",
    intro: "",
  });

  console.log(values);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const sendSettings = () => {
    const Settings_info = {
      gender: settingInfo.gender,
      age: settingInfo.age,
      location: settingInfo.location,
      food: settingInfo.food,
      sns: values.sns,
      intro: values.intro,
    };
    console.log(Settings_info);

    // dispatch(settingActions.sendSettingsData(Settings_info))
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
          minRows={25}
          placeholder="자기소개를 입력해주세요!"
          style={{
            width: "100%",
            border: "1px solid lightgray",
            borderRadius: "5px",
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
            height: "3em",
          }}
        >
          저장하기
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default Setting2;
