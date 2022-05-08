import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SetGender = (props) => {
  const { gender, setGender, count, setCount } = props;
  const [value, setValue] = useState(true);

  function add_count() {
    if (count === 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <React.Fragment>
      <Typography component="h4" variant="p" sx={{ marginTop: 2 }}>
        성별을 선택해주세요!
      </Typography>
      <Box sx={{ display: "flex", marginTop: 2 }}>
        {gender === "여성" ? (
          <Button
            variant="contained"
            sx={{
              width: "3em",
              height: "2em",
              borderRadius: "3em",
              marginRight: "0.5em",
              background: "#FF6853",
            }}
            onClick={() => {
              setGender("여성");
              setValue(!value);
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
              border: "1px solid #FF6853",
              color: "#FF6853",
            }}
            onClick={() => {
              setGender("여성");
              {
                !gender ? add_count() : setValue();
              }
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
              background: "#FF6853",
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
              border: "1px solid #FF6853",
              color: "#FF6853",
            }}
            onClick={() => {
              setGender("남성");
              {
                !gender ? add_count() : setValue();
              }
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
