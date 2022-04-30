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

const RegiWrite = () => {
  const [partyName, setPartyName] = useState("");
  const [eateryName, setEateryName] = useState("");
  const [userNum, setUserNum] = useState("");
  const [address, setAddress] = useState("");
  const [partyDesc, setPartyDesc] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
 

  let history = useHistory();

  return (
    <React.Fragment>
      
      <Grid
        container
        // direction="column"
        alignItems="center"
        justifyContent="center"
        // style={{ maxHeight: '10vh' }}
      >
        <Images />
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

        <TextField
          id="eateryName"
          label="식당 이름(위치)"
          variant="standard"
          style={{ width: "80%" }}
          sx={{ mb: 1.5 }}
          onChange={(e) => {
            setEateryName(e.target.value);
          }}
        />

        <TextField
          id="userNum"
          label="모이는 인원"
          variant="standard"
          style={{ width: "80%" }}
          sx={{ mb: 1.5 }}
          onChange={(e) => {
            setUserNum(e.target.value);
          }}
        />{" "}

        <TextField
          id="address"
          label="만날 장소"
          variant="standard"
          style={{ width: "80%" }}
          sx={{ mb: 1.5 }}
          onChange={(e) => {
            // setUserNum(e.target.value);
          }}
        />{" "}

        <Box component="div" sx={{ display: "inline", width: "12rem", mb:3 }}>
          <Day/>
        </Box>
        <Box component="div" sx={{ display: "inline", width: "8rem", mb:3 }}>
          <TimeSelect />
        </Box>
        <AddSearch />

        <TextField
          multiline
          id="filled-basic"
          label="설명글을 입력해주세요!"
          rows={4}
          variant="standard"
          style={{ width: "80%"}}
            inputProps={{
              style: {
                height:"10rem",
                padding: '0 14px',
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
            RegiWriteSend(
              partyName,
              eateryName,
              userNum,
              partyDesc,
              day,
              time,
              address
            );
            alert("등록하시겠습니까?");
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
