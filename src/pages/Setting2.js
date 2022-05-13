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
import styled from "styled-components";

const Setting2 = (props) => {
  const settingInfo = useSelector((state) => state?.user?.setting);

  console.log(settingInfo);

  const dispatch = useDispatch();

  const [count, setCount] = useState(4);
  const [values, setValues] = useState({
    nickname: "",
    sns: "",
    intro: "",
  });

  function add_count() {
    if (count === 7) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

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
      food: settingInfo?.food,
      nickname: values.nickname,
      sns: values.sns,
      intro: values.intro,
    };
    console.log(Settings_info);

    dispatch(userActions.sendSettingsData(Settings_info));
  };

  return (
    <React.Fragment>
      <Box sx={{ height: "6em", padding: 2 }}>
        <Contain>
          {values.nickname && values.intro ? (
            <Progress width={(5 / 5) * 100 + "%"} />
          ) : (
            <Progress width={(count / 5) * 100 + "%"} />
          )}
        </Contain>
        <Typography
          component="p"
          variant="p"
          sx={{
            marginTop: 2,
            color: "black",
          }}
        >
          이제 프로필 정보 입력 후
        </Typography>
        <Typography component="p" variant="p" sx={{ color: "black" }}>
          바로 잇츠링을 사용할 수 있습니다!🙌🏻
        </Typography>
      </Box>
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
        <ValuesInput
          placeholder="닉네임을 입력해주세요"
          onChange={handleChange("nickname")}
        />
        <Typography component="h4" variant="p" sx={{ marginTop: 3 }}>
          SNS(선택)
        </Typography>
        <ValuesInput
          placeholder="URL을 입력해주세요"
          onChange={handleChange("sns")}
        />
        <Typography
          component="h4"
          variant="p"
          sx={{ marginTop: 3, marginBottom: 1 }}
        >
          자기소개
        </Typography>
        <IntroInput
          placeholder="여러분을 소개할 수 있는 소개글을 작성해주세요!"
          onChange={handleChange("intro")}
        />
        {values.nickname && values.intro ? (
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
            완성 후 시작
          </Button>
        ) : (
          <Button
            variant="outlined"
            sx={{
              position: "absolute",
              width: "92%",
              bottom: 50,
              left: "4%",
              right: "4%",
              height: "4em",
              background: "#dfdfdf",
              color: "gray",
              border: "1px solid #dfdfdf",
            }}
          >
            완성 후 시작
          </Button>
        )}
      </Box>
    </React.Fragment>
  );
};

const Contain = styled.div`
  margin: 0 auto;
  background-color: #eee;
  width: 100%;
  height: 0.7em;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;
const Progress = styled.div`
  background-color: red;
  width: ${(props) => props.width};
  height: 100%;
  transition: width 1s;
  border-radius: 20px;
`;

const ValuesInput = styled.input`
  width: 100%;
  height: 3em;
  border: 0.13em solid #dfdfdf;
  border-radius: 3px;
  padding-left: 0.5em;
  font-size: 1em;
  margin-top: 0.5em;
`;

const IntroInput = styled.textarea`
  width: 100%;
  height: 15em;
  border: 0.13em solid #dfdfdf;
  border-radius: 3px;
  padding-left: 0.5em;
  padding-top: 0.8em;
  font-size: 1em;
  margin-top: 0.5em;
  word-spacing: 0.03em;
  word-wrap: break-word;
  word-break: break-word;
`;

export default Setting2;
