import React from "react";
import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import styled from "styled-components";

const Foodlist = (props) => {
  const { food, setFood } = props;

  console.log(food);

  return (
    <React.Fragment>
      <Typography
        component="h6"
        variant="p"
        sx={{
          color: "black",
          fontSize: "0.9em",
          marginBottom: "0.5em",
          marginTop: "1em",
        }}
      >
        선호 음식 종류
      </Typography>
      <FoodBox>
        <Box>
          {food?.includes("한식") ? (
            <CheckBox
              onClick={() => {
                setFood(food.filter((food) => food !== "한식"));
              }}
            />
          ) : (
            <NonCheckBox
              onClick={() => {
                setFood(food.concat("한식"));
              }}
            />
          )}
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            한식
          </Typography>
        </Box>
        <Box>
          {food?.includes("중식") ? (
            <CheckBox
              onClick={() => {
                setFood(food.filter((food) => food !== "중식"));
              }}
            />
          ) : (
            <NonCheckBox
              onClick={() => {
                setFood(food.concat("중식"));
              }}
            />
          )}
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            중식
          </Typography>
        </Box>
        <Box>
          {food?.includes("일식") ? (
            <CheckBox
              onClick={() => {
                setFood(food.filter((food) => food !== "일식"));
              }}
            />
          ) : (
            <NonCheckBox
              onClick={() => {
                setFood(food.concat("일식"));
              }}
            />
          )}
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            일식
          </Typography>
        </Box>
        <Box>
          {food?.includes("양식") ? (
            <CheckBox
              onClick={() => {
                setFood(food.filter((food) => food !== "양식"));
              }}
            />
          ) : (
            <NonCheckBox
              onClick={() => {
                setFood(food.concat("양식"));
              }}
            />
          )}
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            양식
          </Typography>
        </Box>
        <Box>
          {food?.includes("아시안") ? (
            <CheckBox
              onClick={() => {
                setFood(food.filter((food) => food !== "아시안"));
              }}
            />
          ) : (
            <NonCheckBox
              onClick={() => {
                setFood(food.concat("아시안"));
              }}
            />
          )}
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            아시안
          </Typography>
        </Box>
        <Box>
          {food?.includes("할랄") ? (
            <CheckBox
              onClick={() => {
                setFood(food.filter((food) => food !== "할랄"));
              }}
            />
          ) : (
            <NonCheckBox
              onClick={() => {
                setFood(food.concat("할랄"));
              }}
            />
          )}
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            할랄
          </Typography>
        </Box>
        <Box>
          {food?.includes("비건") ? (
            <CheckBox
              onClick={() => {
                setFood(food.filter((food) => food !== "비건"));
              }}
            />
          ) : (
            <NonCheckBox
              onClick={() => {
                setFood(food.concat("비건"));
              }}
            />
          )}
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            비건
          </Typography>
        </Box>
      </FoodBox>
    </React.Fragment>
  );
};

const NonCheckBox = styled.div`
  width: 4.5em;
  height: 4.5em;
  border-radius: 4.5em;
  background: #dfdfdf;
  margin: 0 auto;
  cursor: pointer;
`;

const CheckBox = styled.div`
  width: 4.5em;
  height: 4.5em;
  border-radius: 4.5em;
  background: #ff6853;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
`;

const FoodBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 0.5em;
  margin: 0 auto;
`;

export default Foodlist;
