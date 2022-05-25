import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { actionCreators as crewActions } from "../../redux/modules/crew";
import { useDispatch } from "react-redux";
import { history } from "../../redux/configStore";
import PersonInfo from "./PersonInfo";
import MapView from "./kakao/MapView";
import Images from "./Images";
import TimeSelect from "./TimeSelect";
import RealDay from "./RealDay";
import Header from "../../shared/Header";
import Toast from "../../shared/Toast";
import Popup from "../../shared/Popup";

//토스트 팝업 메시지
const msgList = {
  image: "이미지 값이 입력되지 않았습니다.",
  title: "파티제목 값이 입력되지 않았습니다.",
  store: "식당명 값이 입력되지 않았습니다.",
  capacity: "인원수 값이 입력되지 않았습니다.",
  ageGroup: "연령대 값이 입력되지 않았습니다.",
  gender: "성별 값이 입력되지 않았습니다.",
  time: "현재 시간 이후로만 설정할수 있습니다",
  meeting: "만날 장소 값이 입력되지 않았습니다.",
  desc: "파티 설명 값이 입력되지 않았습니다.",
};

const RegiWrite = () => {
  const dispatch = useDispatch();

  //모달
  const [openBack, setOpenBack] = useState(false);
  const handleOpen = () => {
    setOpenBack(true);
  };

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

  const configDate = new Date();
  //날짜설정
  let month = configDate.getMonth() + 1;
  month = month >= 10 ? month : "0" + month;
  let day = configDate.getDate();
  day = day >= 10 ? day : "0" + day;
  let realDate = `${month}-${day}`;

  //시간설정
  let hours = configDate.getHours();
  hours = hours < 10 ? `0${hours}` : hours;
  let minutes = configDate.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  let realTime = `${hours}:${minutes}`;

  //초기값 설정
  const [defaultImage, setDefaultImage] = useState([]);
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState("");
  const [store, setStore] = useState("");
  const [address, setAddress] = useState("");
  const [place_url, setPlace_url] = useState("");
  const [xy, setXy] = useState("");
  const [capacity, setCapacity] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState(realDate);
  const [time, setTime] = useState(realTime);
  const [meeting, setMeeting] = useState("");
  const [desc, setDesc] = useState("");

  //파티생성 정보 보내기
  const sendWriteData = () => {
    let nowTime = new Date(`2022-01-01 ${hours}:${minutes}`);
    let userTime = new Date(`2022-01-01 ${time}`);

    if ((image.length || defaultImage.length) === 0) {
      handleToast("image");
    }
    if (title === "") {
      handleToast("title");
    }
    if (store === "") {
      handleToast("store");
    }
    if (capacity === "") {
      handleToast("capacity");
    }
    if (ageGroup === "") {
      handleToast("ageGroup");
    }
    if (gender === "") {
      handleToast("gender");
    }
    if (realDate === date && nowTime.valueOf() > userTime.valueOf()) {
      handleToast("time");
    }
    if (meeting === "") {
      handleToast("meeting");
    }
    if (desc === "") {
      handleToast("desc");
    }

    if (typeof time === "object") {
      //시간 문자열 변환
      let hours = time.getHours();
      hours = hours < 10 ? `0${hours}` : hours;
      let minutes = time.getMinutes();
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      let realTime = `${hours}:${minutes}`;
      setTime(realTime);
    }

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
      date: date,
      time: time,
      meeting: meeting,
      desc: desc,
    };

    if (
      (image.length || defaultImage.length) !== 0 && realDate === date
        ? nowTime.valueOf() < userTime.valueOf()
        : true &&
          title !== "" &&
          store !== "" &&
          capacity !== "" &&
          ageGroup !== "" &&
          gender !== "" &&
          meeting !== "" &&
          desc !== ""
    ) {
      dispatch(crewActions.regiWriteSend(Write_info));
      console.log("hi");
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

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header
          name={"파티등록"}
          type={"완료"}
          event={sendWriteData}
          modal={handleOpen}
        />
        {openBack && (
          <Popup
            title={"작성을 취소하시겠습니까?"}
            close={() => setOpenBack(false)}
            event={() => {
              history.push({
                pathname: "/home",
              });
            }}
            confirm={"작성취소"}
            back={"취소"}
          />
        )}
        {/* </Box> */}
        <Grid container style={{ padding: "1em", paddingTop: "5em" }}>
          <Images
            image={image}
            setImage={setImage}
            defaultImage={defaultImage}
            setDefaultImage={setDefaultImage}
          />
          <TextField
            placeholder="파티제목"
            variant="standard"
            style={{ width: "100%" }}
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
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mb: 3,
            }}
          >
            <Box style={{ maxWidth: "45%" }} component="div">
              <RealDay date={date} setDate={setDate} />
            </Box>
            <Box style={{ maxWidth: "45%" }} component="div">
              <TimeSelect time={time} setTime={setTime} date={date} />
            </Box>
          </Box>

          <TextField
            placeholder="만날 장소"
            variant="standard"
            style={{ width: "100%" }}
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
            style={{ width: "100%" }}
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

//textfield 모듈화 작업
//toast 모듈화 작업
//validation partyRegist와 함께 모듈화 작업
