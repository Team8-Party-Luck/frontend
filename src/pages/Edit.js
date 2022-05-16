import { Box, IconButton, Button, Avatar, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { red } from "@mui/material/colors";
import styled from "styled-components";
import React, { useState } from "react";
import SetLocation from "../components/Settings/SetLocation";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Header from "../shared/Header";
import Foodlist from "../Edit/Foodlist";
import SetFood from "../components/Settings/SetFood";
import DefaultImg from "../static/images/profile/default.png";

const Edit = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.getUserInfoDB());
  }, []);

  const user_info = useSelector((state) => state?.user?.user);

  console.log(user_info);

  const [count, setCount] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageSrc, setImageSrc] = useState(user_info?.image);
  const [age, setAge] = useState(user_info?.age);
  const [gender, setGender] = useState(user_info?.gender);
  const [food, setFood] = useState(user_info?.food);
  const [city, setCity] = useState(user_info?.city);
  const [region, setRegion] = useState(user_info?.region);
  const [values, setValues] = useState({
    nickname: user_info?.nickname,
    sns: user_info?.sns,
    intro: user_info?.intro,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const Input = styled("input")({
    display: "none",
  });

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

  console.log(
    imageUrl,
    city,
    region,
    values.nickname,
    values.sns,
    values.intro
  );

  const updateProfile = () => {
    const Update_info = new FormData();
    if (imageUrl !== null) {
      Update_info.append("image", imageUrl);
    }
    Update_info.append("city", city);
    Update_info.append("age", age);
    Update_info.append("gender", gender);
    Update_info.append("region", region);
    Update_info.append("food", food);
    Update_info.append("nickname", values.nickname);
    Update_info.append("sns", values.sns);
    Update_info.append("intro", values.intro);

    // // FormData의 key 확인
    // for (let key of Update_info.keys()) {
    //   console.log(key);
    // }

    // // FormData의 value 확인
    // for (let value of Update_info.values()) {
    //   // console.log(typeof value);
    //   console.log(value);
    // }

    dispatch(userActions.updateSettingsData(Update_info));
  };

  return (
    <React.Fragment>
      <Header name={"프로필 수정"} />
      <Box sx={{ padding: 2.5, paddingTop: "5.5em" }}>
        <Box sx={{ marginBottom: 5, display: "flex", position: "relative" }}>
          <ImgBox src={user_info?.image ? imageSrc : DefaultImg} />
          <Box sx={{ width: "100%", paddingTop: 1 }}>
            <Typography
              component="p"
              variant="p"
              sx={{ color: "gray", fontSize: "0.8em" }}
            >
              닉네임
            </Typography>
            <NicknameInput
              onChange={handleChange("nickname")}
              defaultValue={user_info?.nickname}
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
        <NonFixBox>{user_info?.gender}</NonFixBox>

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
        <NonFixBox>{user_info?.age}</NonFixBox>
        <Typography
          component="h6"
          variant="p"
          sx={{ color: "black", fontSize: "0.9em", marginBottom: "0.5em" }}
        >
          지역
        </Typography>
        <SetLocation
          city={city}
          setCity={setCity}
          region={region}
          setRegion={setRegion}
        />

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
          onChange={handleChange("intro")}
          defaultValue={user_info?.intro}
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
          인스타그램
        </Typography>
        <NicknameInput
          onChange={handleChange("sns")}
          defaultValue={user_info?.sns}
        />
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ marginTop: 5, backgroundColor: "#dfdfdf", color: "black" }}
          onClick={() => {
            updateProfile();
          }}
        >
          수정완료
        </Button>
      </Box>
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
