import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";




const AgeGroup = ({ ageGroup, setAgeGroup }) => {
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


      <Box>
        {ageGroup?.includes("전체") ? (
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
              setAgeGroup(ageGroup.filter((ageGroup) => ageGroup !== "전체"));
            }}
          >
            전체
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
              setAgeGroup(ageGroup.concat("전체"));
            }}
          >
            전체
          </Button>
        )}
        {ageGroup?.includes("10대") ? (
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
              setAgeGroup(ageGroup.filter((ageGroup) => ageGroup !== "10대"));
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
              setAgeGroup(ageGroup.concat("10대"));
            }}
          >
            10대
          </Button>
        )}
        {ageGroup?.includes("20대") ? (
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
              setAgeGroup(ageGroup.filter((ageGroup) => ageGroup !== "20대"));
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
              setAgeGroup(ageGroup.concat("20대"));
            }}
          >
            20대
          </Button>
        )}
        <Box sx={{ mt: 2 }}>
          {ageGroup?.includes('30대') ? (
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
                setAgeGroup(ageGroup.filter((ageGroup) => ageGroup !== "30대"));
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
                setAgeGroup(ageGroup.concat("30대"));
              }}
            >
              30대
            </Button>
          )}
          {ageGroup?.includes('40대') ? (
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
                setAgeGroup(ageGroup.filter((ageGroup) => ageGroup !== "40대"));
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
                setAgeGroup(ageGroup.concat("40대"));
              }}
            >
              40대
            </Button>
          )}
          {ageGroup?.includes('50대') ? (
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
                setAgeGroup(ageGroup.filter((ageGroup) => ageGroup !== "50대"));
              }}
            >
              50대
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
                setAgeGroup(ageGroup.concat("50대"));
              }}
            >
              50대
            </Button>
          )}
        </Box>
      </Box>
      </ThemeProvider>

    </React.Fragment>
  );
};

export default AgeGroup;
