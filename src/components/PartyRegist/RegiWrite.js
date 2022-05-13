import React, { useState } from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Images from "./Images";
import TimeSelect from "./TimeSelect";
import RealDay from "./RealDay";

import { actionCreators as crewActions } from "../../redux/modules/crew";
import { useDispatch } from "react-redux";
import { history } from "../../redux/configStore";
import PersonInfo from "./PersonInfo";
import MapView from "./kakao/MapView";

const RegiWrite = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState([]);
  const [title, setTitle] = useState(null);
  const [store, setStore] = useState(null);
  const [address, setAddress] = useState(null);
  const [place_url, setPlace_url] = useState(null);
  const [xy, setXy] = useState(null);
  const [capacity, setCapacity] = useState("2");
  const [ageGroup, setAgeGroup] = useState("전체");
  const [gender, setGender] = useState("모두");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [meeting, setMeeting] = useState(null);
  const [desc, setDesc] = useState(null);
  // const [value, setValue] = useState(false);

  const sendWriteData = () => {
    if (image.length === 0) {
      alert("이미지 값이 입력되지 않았습니다.");
    }
    if (title === null) {
      alert("제목 값이 입력되지 않았습니다.");
    }
    if (store === null) {
      alert("가게명이 값이 입력되지 않았습니다.");
    }
    if (capacity === null) {
      alert("인원수 값이 입력되지 않았습니다.");
    }
    if (ageGroup === null) {
      alert("연령대 값이 입력되지 않았습니다.");
    }
    if (gender === null) {
      alert("성별 값이 입력되지 않았습니다.");
    }
    if (date === null) {
      alert("날짜 값이 입력되지 않았습니다.");
    }
    if (time === null) {
      alert("시간 값이 입력되지 않았습니다.");
    }
    if (meeting === null) {
      alert("만날 장소 값이 입력되지 않았습니다.");
    }
    if (desc === null) {
      alert("파티 설명 값이 입력되지 않았습니다.");
    }

    const Write_info = {
      image: image,
      title: title,
      store: store,
      address: address,
      place_url: place_url,
      xy: xy,
      capacity: capacity,
      age: ageGroup,
      gender: gender,
      date: date,
      time: time,
      meeting: meeting,
      desc: desc,
    };

    if (
      image.length !== 0 &&
      title !== null &&
      store !== null &&
      capacity !== null &&
      ageGroup !== null &&
      gender !== null &&
      date !== null &&
      time !== null &&
      meeting !== null &&
      desc !== null
    ) {
      console.log(image);
      dispatch(crewActions.regiWriteSend(Write_info));
    }
  };

  return (
    <React.Fragment>
      <Grid container alignItems="center" justifyContent="center">
        <Images image={image} setImage={setImage} />
        <TextField
          id="partyName"
          label="파티제목"
          variant="standard"
          style={{ width: "85%" }}
          sx={{ mb: 1.5 }}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <MapView
          store={store}
          setStore={setStore}
          setAddress={setAddress}
          setPlace_url={setPlace_url}
          setXy={setXy}
        />
        <PersonInfo
          capacity={capacity}
          setCapacity={setCapacity}
          ageGroup={ageGroup}
          setAgeGroup={setAgeGroup}
          gender={gender}
          setGender={setGender}
          value="안녕"
        />
        <Box component="div" sx={{ display: "inline", width: "11rem" }}>
          <RealDay date={date} setDate={setDate} />
        </Box>
        <Box component="div" sx={{ display: "inline", width: "11rem" }}>
          <TimeSelect time={time} setTime={setTime} />
        </Box>
        <TextField
          id="meetPlace"
          label="만날 장소"
          variant="standard"
          style={{ width: "85%" }}
          sx={{ mb: 1.5 }}
          onChange={(e) => {
            setMeeting(e.target.value);
          }}
        />{" "}
        <TextField
          multiline
          id="partyDesc"
          label="설명글을 입력해주세요!"
          rows={5}
          variant="standard"
          style={{ width: "85%" }}
          inputProps={{
            style: {
              height: "10rem",
              padding: "0 14px",
            },
          }}
          sx={{ pb: 1, mt: 2 }}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <Button
          variant="outlined"
          style={{ height: "3rem", width: "7rem", marginBottom: "4rem" }}
          onClick={() => {
            sendWriteData();
          }}
        >
          등록
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default RegiWrite;
