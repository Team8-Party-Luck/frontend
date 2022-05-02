import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AddSearch from "./address/AddSearch";
import Images from "./Images";

import RegiWriteSend from "../../redux/modules/regiWriteSend";
import Day from "./Day";
import TimeSelect from "./TimeSelect";
import Age from "./Age";

const RegiWrite = () => {
  const [photos, setPhotos] = useState(null);
  const [partyName, setPartyName] = useState(null);
  const [eateryName, setEateryName] = useState(null);
  const [userNum, setUserNum] = useState(null);
  const [meetPlace, setMeetPlace] = useState("");
  const [day, setDay] = useState(null);
  const [time, setTime] = useState(null);
  const [partyDesc, setPartyDesc] = useState("");

  let history = useHistory();

  return (
    <React.Fragment>
      <Grid container alignItems="center" justifyContent="center">
        <Images photos={photos} setPhotos={setPhotos} />
        <TextField
          id="partyName"
          label="파티제목"
          variant="standard"
          style={{ width: "80%" }}
          sx={{ mb: 1.5 }}
          onChange={(e) => {
            setPartyName(e.target.value);
          }}
        />
        <AddSearch eateryName={eateryName} setEateryName={setEateryName} />
        <Age userNum={userNum} setUserNum={setUserNum} />
        <TextField
          id="meetPlace"
          label="만날 장소"
          variant="standard"
          style={{ width: "80%" }}
          sx={{ mb: 1.5 }}
          onChange={(e) => {
            setMeetPlace(e.target.value);
          }}
        />{" "}
        <Box component="div" sx={{ display: "inline", width: "12rem" }}>
          <Day day={day} setDay={setDay} />
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
            setPartyDesc(e.target.value);
          }}
        />
        <Button
          variant="outlined"
          style={{ height: "3rem", width: "7rem" }}
          onClick={() => {
            const RegiInfo = {
              image: photos,
              partyName: partyName,
              eateryName: eateryName,
              userNum: userNum,
              meetPlace: meetPlace,
              day: day,
              time: time,
              partyDesc: partyDesc,
            };
            console.log(RegiInfo);
            RegiWriteSend(RegiInfo);
            alert("파티를 등록하시겠습니까?");
            history.push("/home");
          }}
        >
          등록
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default RegiWrite;
