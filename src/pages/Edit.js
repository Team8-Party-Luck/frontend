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
} from "@mui/material";
import { styled } from "@mui/material/styles";
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

  const [nickname, setNickname] = useState(user_info?.nickname);
  const [age, setAge] = useState(user_info?.age);
  const [gender, setGender] = useState(user_info?.gender);
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");

  const Input = styled("input")({
    display: "none",
  });

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
          <Input accept="image/*" id="icon-button-file" type="file" />
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
          label="닉네임을 입력해주세요"
          variant="outlined"
          fullWidth
          sx={{ marginTop: 1 }}
          defaultValue={user_info?.nickname}
          size="small"
          //   onChange={handleChange("nickname")}
        />
        <FormControl fullWidth>
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
        <FormControl fullWidth>
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
        />
      </Box>
    </React.Fragment>
  );
};

export default Edit;
