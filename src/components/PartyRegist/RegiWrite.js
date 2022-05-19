import React, { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
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
import Toast from "../../shared/Toast";
import Popup from "../../shared/Popup";

//토스트 팝업 메시지
const msgList = {
  image: "이미지 값이 입력되지 않았습니다.",
  title: "제목 값이 입력되지 않았습니다.",
  store: "가게명 값이 입력되지 않았습니다.",
  capacity: "인원수 값이 입력되지 않았습니다.",
  ageGroup: "연령대 값이 입력되지 않았습니다.",
  gender: "성별 값이 입력되지 않았습니다.",
  meeting: "만날 장소 값이 입력되지 않았습니다.",
  desc: "파티 설명 값이 입력되지 않았습니다.",
};

const RegiWrite = () => {
  const dispatch = useDispatch();

  //토스트 팝업 세팅
  const [ToastStatus, setToastStatus] = useState(false);
  const [ToastMsg, setToastMsg] = useState("");
  const handleToast = (type) => {
    if (!ToastStatus) {
      setToastStatus(true);
      setToastMsg(msgList[type]);
    }
  };
  useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => {
        setToastStatus(false);
        setToastMsg("");
      }, 2000);
    }
  }, [ToastStatus]);

  

  //초기값 설정
  const [defaultImage, setDefaultImage] = useState([]);
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState(null);
  const [store, setStore] = useState(null);
  const [address, setAddress] = useState(null);
  const [place_url, setPlace_url] = useState(null);
  const [xy, setXy] = useState(null);
  const [capacity, setCapacity] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [meeting, setMeeting] = useState(null);
  const [desc, setDesc] = useState(null);

  //파티생성 정보 보내기
  const sendWriteData = () => {
    if ((image.length || defaultImage.length) === 0) {
      handleToast("image")
    }
    if (title === null) {
      handleToast("title")
    }
    if (store === null) {
      handleToast("store")
    }
    if (capacity === '') {
      handleToast("capacity")
    }
    if (ageGroup === '') {
      handleToast("ageGroup")
    }
    if (gender === '') {
      handleToast("gender")
    }
    if (meeting === null) {
      handleToast("meeting")
    }
    if (desc === null) {
      handleToast("desc")
    }

    //날짜 문자열 변환
    let month = date.getMonth() + 1;
    month = month >= 10 ? month : "0" + month;
    let day = date.getDate();
    day = day >= 10 ? day : "0" + day;
    let realDate = `${month}-${day}`;

    //시간 문자열 변환
    let hours = time.getHours();
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes = time.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let realTime = `${hours}:${minutes}`;

    const Write_info = {
      defaultImage: defaultImage,
      image: image,
      title: title,
      store: store,
      address: address,
      place_url: place_url,
      xy: xy,
      capacity: capacity,
      age: ageGroup,
      gender: gender,
      date: realDate,
      time: realTime,
      meeting: meeting,
      desc: desc,
    };

    if (
      (image.length || defaultImage.length) !== 0 &&
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


//모달
const [openBack, setOpenBack] = useState(false);
const [openComplete, setOpenComplete] = useState(false);

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
                  setOpenBack(true);
                }}
              />
              <Box sx={{ flexGrow: 1.1 }} />
              <div style={{ color: "#161616", fontSize: "20px" }}>파티등록</div>

              <Box sx={{ flexGrow: 1 }} />
              <span
                onClick={() => {
                  setOpenComplete(true);
                }}
                style={{ color: "#FF6853", fontSize: "18px" }}
              >
                완료
              </span>
            </Toolbar>
          </AppBar>
          {openBack && (
          <Popup
            title={"작성을 취소하시겠습니까?"}
            close={() => setOpenBack(false)}
            event={() => {
              
              history.push({
                pathname: "/home",
                state: null,
              });
            }}
            confirm={"작성취소"}
            back={"취소"}
          />
        )}
        {openComplete && (
          <Popup
            title={"파티를 만드시겠습니까?"}
            close={() => setOpenComplete(false)}
            event={async () => {
              sendWriteData()
            }}
            confirm={"작성완료"}
            back={"취소"}
          />
        )}

        </Box>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ paddingTop: "1em;" }}
        >
          <Images
            image={image}
            setImage={setImage}
            defaultImage={defaultImage}
            setDefaultImage={setDefaultImage}
          />
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
            sx={{
              display: "inline",
              width: "9rem",
              mb: 4,
              marginRight: "1.5rem",
            }}
          >
            <RealDay date={date} setDate={setDate} />
          </Box>
          <Box component="div" sx={{ display: "inline", width: "9rem", mb: 4 }}>
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
      {ToastStatus && (
        <>
          <Toast msg={ToastMsg} />
        </>
      )}

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
