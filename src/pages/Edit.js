import {
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Input,
  Button,
} from "@mui/material";
// import { styled } from "@mui/material/styles";
import styled from "styled-components";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import React, { useState } from "react";
import { history } from "../redux/configStore";
import SetLocation from "../components/Settings/SetLocation";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Edit = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.getUserInfoDB());
  }, []);

  const user_info = useSelector((state) => state?.user?.user);

  console.log(user_info);

  const [imageSrc, setImageSrc] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [age, setAge] = useState(user_info?.age);
  const [gender, setGender] = useState(user_info?.gender);
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

  //미리보기
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
    gender,
    age,
    city,
    region,
    values.nickname,
    values.sns,
    values.intro,
    gender
  );

  const updateProfile = () => {
    const Update_info = new FormData();
    Update_info.append("image", imageUrl);
    Update_info.append("gender", gender);
    Update_info.append("age", age);
    Update_info.append("city", city);
    Update_info.append("region", region);
    //   Update_info.append("food", food);
    Update_info.append("nickname", values.nickname);
    Update_info.append("sns", values.sns);
    Update_info.append("intro", values.intro);

    dispatch(userActions.updateSettingsData(Update_info));
  };
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ bgcolor: "#ffffff", position: "relative" }}>
          <Toolbar>
            <IconButton
              size="large"
              style={{
                color: "black",
              }}
              onClick={() => {
                history.push("/profile");
              }}
            >
              <ArrowBackRoundedIcon />
            </IconButton>
            <Box sx={{ flexGrow: 0.4 }} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { sm: "block" } }}
              style={{
                color: "black",
              }}
            >
              정보수정
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ padding: 1 }}>
        <label htmlFor="icon-button-file">
          <Input
            accept="image/*"
            id="icon-button-file"
            type="file"
            onChange={(e) => {
              encodeFileToBase64(e.target.files[0]);
              setImageUrl(e.target.files[0]);
            }}
          />
          <PreviewBox>
            {imageSrc && <PreviewImg src={imageSrc} alt="preview-img" />}
          </PreviewBox>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
        <TextField
          id="outlined-basic"
          label="닉네임"
          variant="outlined"
          fullWidth
          sx={{ marginTop: 1 }}
          defaultValue={values.nickname}
          size="small"
          onChange={handleChange("nickname")}
        />
        <FormControl fullWidth sx={{ marginTop: 3 }}>
          <InputLabel id="demo-simple-select-label">성별</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Gender"
            size="small"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <MenuItem value={"여성"}>여성</MenuItem>
            <MenuItem value={"남성"}>남성</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginTop: 3, marginBottom: 3 }}>
          <InputLabel id="demo-simple-select-label">나이</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            size="small"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          >
            <MenuItem value={"10대"}>10대</MenuItem>
            <MenuItem value={"20대"}>20대</MenuItem>
            <MenuItem value={"30대"}>30대</MenuItem>
            <MenuItem value={"40대"}>40대</MenuItem>
          </Select>
        </FormControl>
        <SetLocation
          city={city}
          setCity={setCity}
          region={region}
          setRegion={setRegion}
          user_info={user_info}
        />
        <TextField
          id="outlined-basic"
          label="Instagram"
          variant="outlined"
          fullWidth
          sx={{ marginTop: 3 }}
          defaultValue={user_info?.sns}
          size="small"
          onChange={handleChange("sns")}
        />
        <TextField
          id="outlined-basic"
          label="자기소개"
          variant="outlined"
          fullWidth
          sx={{ marginTop: 3 }}
          defaultValue={user_info?.intro}
          size="small"
          onChange={handleChange("intro")}
        />
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ marginTop: 2 }}
          onClick={() => {
            updateProfile();
          }}
        >
          저장하기
        </Button>
      </Box>
    </React.Fragment>
  );
};

const PreviewBox = styled.div`
  width: fit-content;
  margin: 2em auto;
`;
const PreviewImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin: 0 auto;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

export default Edit;
