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

import { actionCreators as crewActions } from "../../redux/modules/crew";
import { useDispatch } from "react-redux";
import { history } from "../../redux/configStore";

const RegiWrite = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [store, setStore] = useState(null);
  const [capacity, setCapacity] = useState(null);
  const [meeting, setMeeting] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [desc, setDesc] = useState(null);

  const sendWriteData = () => {
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

    dispatch(crewActions.regiWriteSend(Write_info));
  };

  return (
    <React.Fragment>
      <Grid container alignItems="center" justifyContent="center">
        <Images image={image} setImage={setImage} />
        <TextField
          id="partyName"
          label="파티제목"
          variant="standard"
          style={{ width: "80%" }}
          sx={{ mb: 1.5 }}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <AddSearch store={store} setStore={setStore} />
        <Age capacity={capacity} setCapacity={setCapacity} />
        <TextField
          id="meetPlace"
          label="만날 장소"
          variant="standard"
          style={{ width: "80%" }}
          sx={{ mb: 1.5 }}
          onChange={(e) => {
            setMeeting(e.target.value);
          }}
        />{" "}
        <Box component="div" sx={{ display: "inline", width: "12rem" }}>
          <RealDay date={date} setDate={setDate} />
        </Box>
        <Box component="div" sx={{ display: "inline", width: "8rem" }}>
          <TimeSelect time={time} setTime={setTime} />
        </Box>
        <TextField
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
            sendWriteData();
            // alert("파티를 등록하시겠습니까?");
            // history.push("/home");
          }}
        >
          등록
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default RegiWrite;