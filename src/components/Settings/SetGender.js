import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SetGender = (props) => {
  const { gender, setGender } = props;

  return (
    <React.Fragment>
      <Typography component="h4" variant="p">
        성별을 선택해주세요!
      </Typography>
      <Box sx={{ display: "flex", marginTop: 0.5 }}>
        {gender === "여성" ? (
          <Button
            variant="contained"
            sx={{
              width: "3em",
              height: "2em",
              borderRadius: "3em",
              marginRight: "0.5em",
              //   color: "white",
              //   background: "black",
            }}
            onClick={() => {
              setGender("여성");
            }}
          >
            여성
          </Button>
        ) : (
          <Button
            variant="outlined"
            sx={{
              width: "3em",
              height: "2em",
              borderRadius: "3em",
              marginRight: "0.5em",
              //   border: "1px solid black",
              //   color: "black",
            }}
            onClick={() => {
              setGender("여성");
            }}
          >
            여성
          </Button>
        )}
        {gender === "남성" ? (
          <Button
            variant="contained"
            sx={{
              width: "3em",
              height: "2em",
              borderRadius: "3em",
              //   color: "white",
              //   background: "black",
            }}
            onClick={() => {
              setGender("남성");
            }}
          >
            남성
          </Button>
        ) : (
          <Button
            variant="outlined"
            sx={{
              width: "3em",
              height: "2em",
              borderRadius: "3em",
              //   border: "1px solid black",
              //   color: "black",
            }}
            onClick={() => {
              setGender("남성");
            }}
          >
            남성
          </Button>
        )}
      </Box>
    </React.Fragment>
  );
};

export default SetGender;
