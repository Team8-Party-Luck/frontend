import React, { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { actionCreators as crewActions } from "../../redux/modules/crew";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../../redux/configStore";
import { useLocation } from "react-router-dom";
// import Images from "./Images";
import TimeSelect from "./TimeSelect";
import RealDay from "./RealDay";
import MapView from "./kakao/MapView";
import PersonInfo from "./PersonInfo";
import Toast from "../../shared/Toast";

//토스트 팝업 메시지
const msgList = {
  image: "이미지 값이 입력되지 않았습니다.",
  title: "파티제목 값이 입력되지 않았습니다.",
  store: "식당명 값이 입력되지 않았습니다.",
  capacity: "인원수 값이 입력되지 않았습니다.",
  ageGroup: "연령대 값이 입력되지 않았습니다.",
  gender: "성별 값이 입력되지 않았습니다.",
  meeting: "만날 장소 값이 입력되지 않았습니다.",
  desc: "파티 설명 값이 입력되지 않았습니다.",
};

const PartyRevise = () => {
  const location = useLocation();
  const partyId = location.state;
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


  useEffect( () => {
      dispatch(crewActions.getDetailInfo(partyId));
  }, []);



  const partyUser = useSelector((state) => state.crew.info);
  console.log(partyUser);

  // const [image, setImage] = useState(partyUser?.image || "");
  const [title, setTitle] = useState(partyUser?.title || '');
  const [store, setStore] = useState(partyUser?.store || '');
  const [address, setAddress] = useState(partyUser?.address || '');
  const [place_url, setPlace_url] = useState(partyUser?.place_url || '');
  const [xy, setXy] = useState(partyUser?.xy || '');
  const [capacity, setCapacity] = useState(partyUser?.capacity || '');
  const [ageGroup, setAgeGroup] = useState(partyUser?.age || '');
  const [gender, setGender] = useState(partyUser?.gender || '');
  const [date, setDate] = useState(partyUser?.date || '');
  const [time, setTime] = useState(partyUser?.time || '');
  const [meeting, setMeeting] = useState(partyUser?.meeting || '');
  const [desc, setDesc] = useState(partyUser?.desc || '');

  const sendReviseData = () => {
    if (title === '') {
      handleToast("title");
    }
    if (store === '') {
      handleToast("store");
    }
    if (capacity === '') {
      handleToast("capacity");
    }
    if (ageGroup === '') {
      handleToast("ageGroup");
    }
    if (gender === '') {
      handleToast("gender");
    }
    if (meeting === '') {
      handleToast("meeting");
    }
    if (desc === '') {
      handleToast("desc");
    }

    const Write_info = {
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
      title !== '' &&
      store !== '' &&
      capacity !== '' &&
      ageGroup !== '' &&
      gender !== '' &&
      meeting !== '' &&
      desc !== ''
    ) {
      dispatch(crewActions.reviseSend(Write_info, partyId));
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

  console.log(partyUser)
  if(partyUser){
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
                    history.push(`partyInfo/${partyId}`)
                  }}
                />
                <Box sx={{ flexGrow: 1.1 }} />
                <div style={{ color: "#161616", fontSize: "20px" }}>파티수정</div>
  
                <Box sx={{ flexGrow: 1 }} />
                <span
                  onClick={() => {
                    sendReviseData();
                  }}
                  style={{ color: "#FF6853", fontSize: "18px" }}
                >
                  완료
                </span>
              </Toolbar>
            </AppBar>
          </Box>
  
          <Grid container alignItems="center" justifyContent="center">
            {/* <Images image={image} setImage={setImage} /> */}
            <TextField
              value={title}
              placeholder="파티제목"
              variant="standard"
              style={{ width: "85%" }}
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
              value={meeting}
              placeholder="만날 장소"
              variant="standard"
              style={{ width: "85%" }}
              sx={{ mb: 3 }}
              onChange={(e) => {
                setMeeting(e.target.value);
              }}
            />
            <TextField
              value={desc}
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
  } else {
    return null
  }
  
};

export default PartyRevise;

// s