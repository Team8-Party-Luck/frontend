import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { crewApi } from "../../shared/api";
import { actionCreators as crewActions } from "../../redux/modules/crew";

//design
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

//import file
//import Images from "./Images";
import TimeSelect from "./TimeSelect";
import RealDay from "./RealDay";
import MapView from "./kakao/MapView";
import PersonInfo from "./PersonInfo";
import Header from "../../shared/Header";
import Toast from "../../shared/Toast";

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

const PartyRevise = () => {
  const location = useLocation();
  const partyId = location.state;
  const dispatch = useDispatch();

  //변수 설정
  const [title, setTitle] = useState("");
  const [store, setStore] = useState("");
  const [address, setAddress] = useState("");
  const [place_url, setPlace_url] = useState("");
  const [xy, setXy] = useState("");
  const [capacity, setCapacity] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [meeting, setMeeting] = useState("");
  const [desc, setDesc] = useState("");

  //파티 상세정보 불러오기
  useEffect(() => {
    crewApi.partyDetailInfo(partyId).then((res) => {
      setTitle(res.data.title);
      setStore(res.data.store);
      setAddress(res.data.address);
      setPlace_url(res.data.place_url);
      setXy(res.data.xy);
      setCapacity(res.data.capacity);
      setAgeGroup(res.data.age);
      setGender(res.data.gender);
      setDate(res.data.date);
      setTime(res.data.time);
      setMeeting(res.data.meeting);
      setDesc(res.data.desc);
    });
  }, []);

  //파티 수정 정보 보내기
  const sendReviseData = () => {
    //시간 설정
    const configDate = new Date();
    let month = configDate.getMonth() + 1;
    month = month >= 10 ? month : "0" + month;
    let day = configDate.getDate();
    day = day >= 10 ? day : "0" + day;
    let hours = configDate.getHours();
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes = configDate.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let nowTime = new Date(`2022-01-01 ${hours}:${minutes}`);
    let userTime = new Date(`2022-01-01 ${time}`);
    let realDate = `${month}-${day}`;

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

    const file = new FormData();
    file.append("title", title);
    file.append("store", store);
    file.append("address", address);
    file.append("place_url", place_url);
    file.append("xy", xy);
    file.append("capacity", capacity);
    file.append("age", ageGroup);
    file.append("gender", gender);
    file.append("date", date);
    file.append("time", time);
    file.append("meeting", meeting);
    file.append("desc", desc);

    // Array.from(Write_info.image).forEach((a) => {
    //   file.append("image", a);
    // });

    if (
      realDate === date
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
      dispatch(crewActions.reviseSend(file, partyId));
    }
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

  //mui 색깔 입히기
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
        <Header name={"파티수정"} type={"완료"} event={sendReviseData} />
        <Grid container style={{ padding: "20px", paddingTop: "3em" }}>
          {/* <Images image=  {image} setImage={setImage} /> */}
          <TextField
            value={title}
            placeholder="파티제목"
            variant="standard"
            style={{ width: "100%" }}
            sx={{ my: 3 }}
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
            value={meeting}
            placeholder="만날 장소"
            variant="standard"
            style={{ width: "100%" }}
            sx={{ mb: 3 }}
            onChange={(e) => {
              setMeeting(e.target.value);
            }}
          />
          <TextField
            value={desc}
            multiline
            placeholder="식당 정보, 메뉴 정보 혹은 모임에 대한 설명을 작성 해주시면 문의를 줄이고 더 쉽게 파티원을 구할 수 있습니다.(20자 이상)"
            rows={4}
            variant="standard"
            style={{ width: "100%" }}
            sx={{ pb: 1, mt: 0.5 }}
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

export default PartyRevise;
