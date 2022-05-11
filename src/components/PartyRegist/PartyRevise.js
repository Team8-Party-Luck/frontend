
import React, { useState } from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import AddSearch from "./address/AddSearch";
import Images from "./Images";
import TimeSelect from "./TimeSelect";
import Age from "./Age";
import RealDay from "./RealDay";
import MapView from "./kakao/MapView";
import PersonInfo from "./PersonInfo";

import {useLocation} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as crewActions } from "../../redux/modules/crew";
import { history } from "../../redux/configStore";



import HeaderNav from "../../shared/HeaderNav";

const PartyRevise = () => {
  const location = useLocation();
  const partyId = location.state
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(crewActions.getDetailInfo(partyId));
  }, []);
  const partyUser = useSelector((state) => state?.crew?.info);

  console.log(partyUser);
  

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(partyUser?.title || '');
  const [store, setStore] = useState(partyUser?.store);
  const [address, setAddress] = useState(partyUser?.address);
  const [place_url, setPlace_url] = useState(partyUser?.place_url);
  const [xy, setXy] = useState(partyUser?.xy);
  const [capacity, setCapacity] = useState(String(partyUser?.capacity));
  const [ageGroup, setAgeGroup] = useState(partyUser?.ageGroup);
  const [gender, setGender] = useState(partyUser?.gender);
  const [meeting, setMeeting] = useState(partyUser?.meeting || '');
  const [date, setDate] = useState(partyUser?.date);
  const [time, setTime] = useState(partyUser?.time);
  const [desc, setDesc] = useState(partyUser?.desc || '');

  console.log(title);
  
  React.useEffect(() => {
    setTitle(partyUser?.title || '');
  }, [title])



  const sendReviseData = () => {
    const Write_info = {
      image: image,
      title: title,
      store: store,
      capacity: capacity,
      meeting: meeting,
      date: date,
      time: time,
      desc: desc,
    };

    console.log(Write_info);

    dispatch(crewActions.reviseSend(Write_info, partyId));
  };

  return (
    <React.Fragment>
      <HeaderNav name="파티수정"/>
      <Grid container alignItems="center" justifyContent="center">
        <Images image={image} setImage={setImage} />
        <TextField
          id="partyName"
          label="파티제목"
          value={title}
          variant="standard"
          style={{ width: "80%" }}
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

        <Box component="div" sx={{ display: "inline", width: "10rem" }}>
          <RealDay date={date} setDate={setDate} />
        </Box>
        <Box component="div" sx={{ display: "inline", width: "10rem" }}>
          <TimeSelect time={time} setTime={setTime} />
        </Box>
        <TextField
        value={meeting}
          id="meetPlace"
          label="만날 장소"
          variant="standard"
          style={{ width: "80%" }}
          sx={{ mb: 1.5 }}
          onChange={(e) => {
            setMeeting(e.target.value);
          }}
        />{" "}
        <TextField
        value={desc}
          multiline
          id="partyDesc"
          label="설명글을 입력해주세요!"
          rows={5}
          variant="standard"
          style={{ width: "80%" }}
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
          style={{ height: "3rem", width: "7rem" }}
          onClick={() => {
            sendReviseData();
            alert("파티를 수정하시겠습니까?");
            history.push(`/partyInfo/${partyId}`);
          }}
        >
          등록
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default PartyRevise;
