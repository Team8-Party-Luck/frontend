import { Box, IconButton, Button, Avatar, Typography } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

import styled from "styled-components";
import React, { useState, useEffect } from "react";
import SetLocation from "../components/Settings/SetLocation";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Header from "../shared/Header";

import SetFood from "../components/Settings/SetFood";
import DefaultImg from "../static/images/profile/default.png";
import Toast from "../shared/Toast";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { userApi } from "../shared/api";
//유효성 체크
import { checkNickname, checkIntro } from "../shared/Validatiion";

const Edit = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    userApi.userInfo().then((res) => {
      console.log(res.data);
      setImageUrl(null);
      setImageSrc(res.data.image);
      setNickname(res.data.nickname);
      setAge(res.data.age);
      setGender(res.data.gender);
      setFood(res.data.food);
      setCity(res.data.city);
      setRegion(res.data.region);
      setIntro(res.data.intro);
      setSns(res.data.sns);
    });
  }, []);

  // const user_info = useSelector((state) => state?.user?.user);
  // console.log(user_info);

  // 토스트 메세지목록
  const msgList = {
    nickname: "닉네임은 최소 2글자 최대 10글자입니다",
    intro: "자기소개는 최소 5글자 최대 30글자입니다",
    sns: "올바른 주소형식이 아닙니다",
  };

  //토스트 메시지
  const [ToastStatus, setToastStatus] = useState(false);
  const [ToastMsg, setToastMsg] = useState(""); // 토스트에 표시할 메세지

  const [count, setCount] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const [nickname, setNickname] = useState("");

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [food, setFood] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [intro, setIntro] = useState("");
  const [sns, setSns] = useState("");

  const Input = styled("input")({
    display: "none",
  });

  //토스트 핸들러
  //버튼을 1000ms 이내에 클릭할 때 문구만 실시간으로 바뀌도록 변경
  const handleToast = (type) => {
    if (!ToastStatus) {
      setToastStatus(true);
      setToastMsg(msgList[type]);
    }
  };

  React.useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => {
        setToastStatus(false);
        setToastMsg("");
      }, 1000);
    }
  }, [ToastStatus]);

  // 미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    console.log(reader);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF6853",
      },
    },
  });

  const updateProfile = () => {
    if (!checkNickname(nickname)) {
      handleToast("nickname");
      return;
    }
    if (!checkIntro(intro)) {
      handleToast("intro");
      return;
    }

    const Update_info = new FormData();
    if (imageUrl !== null) {
      Update_info.append("image", imageUrl);
    }
    Update_info.append("city", city);
    Update_info.append("region", region);
    Update_info.append("food", food);
    Update_info.append("nickname", nickname);
    Update_info.append("sns", sns);
    Update_info.append("intro", intro);

    dispatch(userActions.updateSettingsData(Update_info));
  };

  return (
    <React.Fragment>
      <Header name={"프로필 수정"} type={"완료"} event={updateProfile} />
      <Box sx={{ padding: 2.5, paddingTop: "4.7em" }}>
        <Box sx={{ marginBottom: 5, display: "flex", position: "relative" }}>
          <ImgBox src={imageSrc === null ? DefaultImg : imageSrc} />
          <Box sx={{ width: "100%", paddingTop: 1 }}>
            <Typography
              component="p"
              variant="p"
              sx={{ color: "gray", fontSize: "0.8em" }}
            >
              닉네임
            </Typography>

            <NicknameInput
              onChange={(e) => {
                setNickname(e.target.value);
              }}
              defaultValue={nickname}
            />
          </Box>
          <Box
            sx={{
              background: "gray",
              width: 22,
              height: 22,
              borderRadius: 22,
              position: "absolute",
              top: "2.4em",
              left: "2.5em",
            }}
          ></Box>
          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={(e) => {
                setImageUrl(e.target.files[0]);
                encodeFileToBase64(e.target.files[0]);
              }}
            />
            <IconButton
              aria-label="upload picture"
              component="span"
              sx={{
                position: "absolute",
                top: "1.4em",
                left: "1.5em",
                color: "black",
              }}
            >
              <EditIcon
                sx={{
                  width: 15,
                  height: 15,
                }}
              />
            </IconButton>
          </label>
        </Box>
        <Box sx={{ width: "100%", display: "flex" }}>
          <Typography
            component="h6"
            variant="p"
            sx={{ color: "black", fontSize: "0.9em", marginRight: "1em" }}
          >
            성별
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{ color: "gray", fontSize: "0.9em" }}
          >
            수정 불가한 정보입니다
          </Typography>
        </Box>
        <NonFixBox>{gender}</NonFixBox>

        <Box sx={{ width: "100%", display: "flex" }}>
          <Typography
            component="h6"
            variant="p"
            sx={{ color: "black", fontSize: "0.9em", marginRight: "1em" }}
          >
            나이
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{ color: "gray", fontSize: "0.9em" }}
          >
            수정 불가한 정보입니다
          </Typography>
        </Box>
        <NonFixBox>{age}</NonFixBox>
        <Typography
          component="h6"
          variant="p"
          sx={{ color: "black", fontSize: "0.9em", marginBottom: "0.5em" }}
        >
          지역
        </Typography>
        <ThemeProvider theme={theme}>
          <SetLocation
            city={city}
            setCity={setCity}
            region={region}
            setRegion={setRegion}
            count={count}
            setCount={setCount}
          />
        </ThemeProvider>
        <SetFood
          food={food}
          setFood={setFood}
          count={count}
          setCount={setCount}
        />
        <Typography
          component="h6"
          variant="p"
          sx={{
            color: "black",
            fontSize: "0.9em",
            marginBottom: "0.7em",
            marginTop: "1em",
          }}
        >
          자기소개
        </Typography>
        <NicknameInput
          onChange={(e) => {
            setIntro(e.target.value);
          }}
          defaultValue={intro}
        />
        <Typography
          component="h6"
          variant="p"
          sx={{
            color: "black",
            fontSize: "0.9em",
            marginBottom: "0.5em",
            marginTop: "1em",
          }}
        >
          SNS
        </Typography>
        <NicknameInput
          onChange={(e) => {
            setSns(e.target.value);
          }}
          defaultValue={sns}
        />
      </Box>
      {ToastStatus && (
        <>
          <Toast msg={ToastMsg} />
        </>
      )}
    </React.Fragment>
  );
};

const NicknameInput = styled.input`
  width: 100%;
  height: 2.2em;
  border: 0.13em solid #dfdfdf;
  border-radius: 3px;
  padding-left: 0.5em;
  font-size: 1em;
`;

const NonFixBox = styled.div`
  width: 100%;
  height: 2.3em;
  background: #dfdfdf;
  border-radius: 3px;
  margin-bottom: 1em;
  margin-top: 0.3em;
  padding-left: 0.7em;
  padding-top: 0.6em;
`;

const ImgBox = styled.img`
  width: 3.8em;
  height: 3.8em;
  border-radius: 2.5em;
  margin-right: 0.5em;
`;

export default Edit;
