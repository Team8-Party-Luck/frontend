import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";

import { actionCreators as crewActions } from "../../redux/modules/crew";
import { useDispatch } from "react-redux";
import { history } from "../../redux/configStore";
import PersonInfo from "./PersonInfo";
import MapView from "./kakao/MapView";
import Images from "./Images";
import TimeSelect from "./TimeSelect";
import RealDay from "./RealDay";

const RegiWrite = () => {
  const dispatch = useDispatch();

  const [defaultImage, setDefaultImage] = useState([])
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [store, setStore] = useState(null);
  const [address, setAddress] = useState(null);
  const [place_url, setPlace_url] = useState(null);
  const [xy, setXy] = useState(null);
  const [capacity, setCapacity] = useState("");
  const [ageGroup, setAgeGroup] = useState([]);
  const [gender, setGender] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [meeting, setMeeting] = useState(null);
  const [desc, setDesc] = useState(null);

  const sendWriteData = () => {
    if (image.length === 0 && defaultImage === []) {
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
      defaultImage:defaultImage,
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

    console.log(image)
    if (
      (image.length !== 0 && defaultImage !== [])&&
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
      dispatch(crewActions.regiWriteSend(Write_info));
    }
  };

  //색깔 입히기
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF6853",
      },
    },
  });

  //back modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const modal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 340,
    bgcolor: "#FFFFFF",
    borderRadius: "15px",
    boxShadow: 24,
    p: 3.5,
  };
  return (
    <React.Fragment>
       <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ bgcolor: "#ffffff", position: "relative" }}>
          <Toolbar>
            <img
              alt="back"
              src="image/bar/back.png"
              onClick={() => {
                handleOpen();
              }}
            />
            <Box sx={{ flexGrow: 1.1 }} />
            <div style={{ color: "#161616", fontSize: "20px" }}>파티등록</div>

            <Box sx={{ flexGrow: 1 }} />
            <span
              onClick={() => {
                sendWriteData();
              }}
              style={{ color: "#FF6853", fontSize: "18px" }}
            >
              완료
            </span>
          </Toolbar>
        </AppBar>
        <Modal open={open} onClose={handleClose}>
          <Box sx={modal} justifyContent="center" alignItems="center" >
            <div style={{ marginLeft: "3.5rem", marginBottom: "2rem" }}>
              작성을 취소하시겠습니까?
            </div>
            <CancelButton
              onClick={() => {
                handleClose();
              }}
              style={{ marginRight: "1rem" }}
            >
              취소
            </CancelButton>
            <CancelButton
              onClick={() => {
                history.push("/home");
              }}
              style={{ backgroundColor: "#FF6853", color: "#FFFFFF" }}
            >
              작성 취소
            </CancelButton>
          </Box>
        </Modal>
      </Box>
      <Grid container alignItems="center" justifyContent="center" >
        <Images image={image} setImage={setImage} defaultImage={defaultImage} setDefaultImage={setDefaultImage}/>
        <TextField
          placeholder="파티제목"
          variant="standard"
          style={{ width: "85%" }}
          sx={{ mb: 3 }}
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
        />
        <Box
          component="div"
          sx={{ display: "inline", width: "9rem", mb: 4,marginRight: "2rem" }}
        >
          <RealDay date={date} setDate={setDate} />
        </Box>
        <Box component="div" sx={{ display: "inline", width: "9rem", mb: 4  }}>
          <TimeSelect time={time} setTime={setTime} />
        </Box>

        <TextField
          placeholder="만날 장소"
          variant="standard"
          style={{ width: "85%" }}
          sx={{ mb: 3 }}
          onChange={(e) => {
            setMeeting(e.target.value);
          }}
        />
        <TextField
          multiline
          placeholder="식당 정보, 메뉴 정보 혹은 모임에 대한 설명을 작성 해주시면 문의를 줄이고 더 쉽게 파티원을 구할 수 있습니다.(20자 이상)"
          rows={6}
          variant="standard"
          style={{ width: "85%" }}
          sx={{ pb: 1, mt: 2 }}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
      </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default RegiWrite;

//취소버튼
const CancelButton = styled.button`
  border: 1px solid #cccccc;
  border-radius: 8px;
  width: 130px;
  height: 48px;
`;
