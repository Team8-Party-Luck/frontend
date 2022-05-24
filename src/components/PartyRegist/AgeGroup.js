import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const AgeGroup = ({ ageGroup, setAgeGroup }) => {
  return (
    <React.Fragment>
      <Box>
        {/* 모집인원 정보를 다중 선택할때 하는법 */}
        {/* {ageGroup?.includes("전체") ? (
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
        )} */}
        {ageGroup === "전체" ? (
          <Button
            variant="contained"
            sx={{
              width: "3em",
              height: "2em",
              borderRadius: "3em",
              marginRight: "0.5em",
              background: "#FF6853",
              color: "white",
            }}
            onClick={() => {
              setAgeGroup("전체");
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
              border: "1px solid #CCCCCC",
              color: "black",
            }}
            onClick={() => {
              setAgeGroup("전체");
            }}
          >
            전체
          </Button>
        )}
        {ageGroup === "10대" ? (
          <Button
            variant="contained"
            sx={{
              width: "3em",
              height: "2em",
              borderRadius: "3em",
              marginRight: "0.5em",
              background: "#FF6853",
              color: "white",
            }}
            onClick={() => {
              setAgeGroup("10대");
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
              border: "1px solid #CCCCCC",
              color: "black",
            }}
            onClick={() => {
              setAgeGroup("10대");
            }}
          >
            10대
          </Button>
        )}
        {ageGroup === "20대" ? (
          <Button
            variant="contained"
            sx={{
              width: "3em",
              height: "2em",
              borderRadius: "3em",
              marginRight: "0.5em",
              background: "#FF6853",
              color: "white",
            }}
            onClick={() => {
              setAgeGroup("20대");
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
              border: "1px solid #CCCCCC",
              color: "black",
            }}
            onClick={() => {
              setAgeGroup("20대");
            }}
          >
            20대
          </Button>
        )}
        <Box sx={{ mt: 2 }}>
          {ageGroup === "30대" ? (
            <Button
              variant="contained"
              sx={{
                width: "3em",
                height: "2em",
                borderRadius: "3em",
                marginRight: "0.5em",
                background: "#FF6853",
                color: "white",
              }}
              onClick={() => {
                setAgeGroup("30대");
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
                border: "1px solid #CCCCCC",
                color: "black",
              }}
              onClick={() => {
                setAgeGroup("30대");
              }}
            >
              30대
            </Button>
          )}
          {ageGroup === "40대" ? (
            <Button
              variant="contained"
              sx={{
                width: "3em",
                height: "2em",
                borderRadius: "3em",
                marginRight: "0.5em",
                background: "#FF6853",
                color: "white",
              }}
              onClick={() => {
                setAgeGroup("40대");
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
                border: "1px solid #CCCCCC",
                color: "black",
              }}
              onClick={() => {
                setAgeGroup("40대");
              }}
            >
              40대
            </Button>
          )}
          {ageGroup === "50대" ? (
            <Button
              variant="contained"
              sx={{
                width: "3em",
                height: "2em",
                borderRadius: "3em",
                marginRight: "0.5em",
                background: "#FF6853",
                color: "white",
              }}
              onClick={() => {
                setAgeGroup("50대");
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
                border: "1px solid #CCCCCC",
                color: "black",
              }}
              onClick={() => {
                setAgeGroup("50대");
              }}
            >
              50대
            </Button>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default AgeGroup;
