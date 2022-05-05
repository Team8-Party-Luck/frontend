import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const SetAge = (props) => {
  const { age, setAge } = props;

  return (
    <React.Fragment>
      <Typography component="h4" variant="p" sx={{ marginTop: 6 }}>
        연령대를 설정해볼까요?
      </Typography>
      <Box sx={{ display: "flex", marginTop: 2 }}>
        {age === "10대" ? (
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
              setAge("10대");
            }}
          >
            10대
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
              setAge("10대");
            }}
          >
            10대
          </Button>
        )}
        {age === "20대" ? (
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
              setAge("20대");
            }}
          >
            20대
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
              setAge("20대");
            }}
          >
            20대
          </Button>
        )}
        {age === "30대" ? (
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
              setAge("30대");
            }}
          >
            30대
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
              setAge("30대");
            }}
          >
            30대
          </Button>
        )}
        {age === "40대" ? (
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
              setAge("40대");
            }}
          >
            40대
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
              setAge("40대");
            }}
          >
            40대
          </Button>
        )}
      </Box>
    </React.Fragment>
  );
};

export default SetAge;
