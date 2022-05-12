import React from "react";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Typography,
  Fab,
  Grid,
  Button,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const SetFood = (props) => {
  const { food, setFood, count, setCount } = props;

  const [value, setValue] = useState(false);

  console.log(food);

  function add_count() {
    if (count === 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <React.Fragment>
      <Typography component="h4" variant="p" sx={{ marginTop: 6 }}>
        선호하는 음식을 모두 선택해주세요!
      </Typography>
      <FoodBox>
        <Box>
          {food?.includes("한식") ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                setFood(food.filter((food) => food !== "한식"));
                setValue(!value);
                {
                  food?.length === 1 ? setCount(count - 1) : setValue(!value);
                }
              }}
            >
              <img
                src="image/category/selected/korean.png"
                style={{ width: "4em", height: "4em" }}
              />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              value="한식"
              onClick={() => {
                setFood(food.concat("한식"));
                {
                  food?.length === 0 ? add_count() : setValue(!value);
                }
              }}
            >
              <img
                src="image/category/select/korean.png"
                style={{ width: "4.5em", height: "4em" }}
              />
            </Box>
          )}
          <Typography
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                setFood(food.filter((food) => food !== "중식"));
                setValue(!value);
                {
                  food?.length === 1 ? setCount(count - 1) : setValue(!value);
                }
              }}
            >
              <img
                src="image/category/selected/chinese.png"
                style={{ width: "4em", height: "4em" }}
              />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              value="중식"
              onClick={() => {
                setFood(food.concat("중식"));
                {
                  food?.length === 0 ? add_count() : setValue(!value);
                }
              }}
            >
              <img
                src="image/category/select/chinese.png"
                style={{ width: "4em", height: "4em" }}
              />
            </Box>
          )}
          <Typography
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                setFood(food.filter((food) => food !== "일식"));
                setValue(!value);
                {
                  food?.length === 1 ? setCount(count - 1) : setValue(!value);
                }
              }}
            >
              <img
                src="image/category/selected/japanese.png"
                style={{ width: "4em", height: "4em" }}
              />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              value="일식"
              onClick={() => {
                setFood(food.concat("일식"));
                {
                  food?.length === 0 ? add_count() : setValue(!value);
                }
              }}
            >
              <img
                src="image/category/select/japanese.png"
                style={{ width: "4em", height: "4em" }}
              />
            </Box>
          )}
          <Typography
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                setFood(food.filter((food) => food !== "양식"));
                setValue(!value);
                {
                  food?.length === 1 ? setCount(count - 1) : setValue(!value);
                }
              }}
            >
              <img
                src="image/category/selected/western.png"
                style={{ width: "4em", height: "4em" }}
              />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              value="양식"
              onClick={() => {
                setFood(food.concat("양식"));
                {
                  food?.length === 0 ? add_count() : setValue(!value);
                }
              }}
            >
              <img
                src="image/category/select/western.png"
                style={{ width: "4em", height: "4em" }}
              />
            </Box>
          )}
          <Typography
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
          {food?.includes("패스트푸드") ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                setFood(food.filter((food) => food !== "패스트푸드"));
                setValue(!value);
                {
                  food?.length === 1 ? setCount(count - 1) : setValue(!value);
                }
              }}
            >
              <img
                src="image/category/selected/fastfood.png"
                style={{ width: "3.5em", height: "3.5em" }}
              />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              value="패스트푸드"
              onClick={() => {
                setFood(food.concat("패스트푸드"));
                {
                  food?.length === 0 ? add_count() : setValue(!value);
                }
              }}
            >
              <img
                src="image/category/select/fastfood.png"
                style={{ width: "3.5em", height: "3.5em" }}
              />
            </Box>
          )}
          <Typography
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            패스트푸드
          </Typography>
        </Box>
        <Box>
          {food?.includes("샐러드") ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                setFood(food.filter((food) => food !== "샐러드"));
                setValue(!value);
                {
                  food?.length === 1 ? setCount(count - 1) : setValue(!value);
                }
              }}
            >
              <img
                src="image/category/selected/salad.png"
                style={{ width: "3.5em", height: "3.5em" }}
              />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              value="샐러드"
              onClick={() => {
                setFood(food.concat("샐러드"));
                {
                  food?.length === 0 ? add_count() : setValue(!value);
                }
              }}
            >
              <img
                src="image/category/select/salad.png"
                style={{ width: "3.5em", height: "3.5em" }}
              />
            </Box>
          )}
          <Typography
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            샐러드
          </Typography>
        </Box>
        <Box>
          {food?.includes("디저트") ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                setFood(food.filter((food) => food !== "디저트"));
                setValue(!value);
                {
                  food?.length === 1 ? setCount(count - 1) : setValue(!value);
                }
              }}
            >
              <img
                src="image/category/selected/coffee.png"
                style={{ width: "3.5em", height: "3.5em" }}
              />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              value="디저트"
              onClick={() => {
                setFood(food.concat("디저트"));
                {
                  food?.length === 0 ? add_count() : setValue(!value);
                }
              }}
            >
              <img
                src="image/category/select/coffee.png"
                style={{ width: "3.5em", height: "3.5em" }}
              />
            </Box>
          )}
          <Typography
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            디저트
          </Typography>
        </Box>
        <Box>
          {food?.includes("기타") ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                setFood(food.filter((food) => food !== "기타"));
                setValue(!value);
                {
                  food?.length === 1 ? setCount(count - 1) : setValue(!value);
                }
              }}
            >
              <img
                src="image/category/selected/etc.png"
                style={{ width: "3.5em", height: "3.5em" }}
              />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              value="기타"
              onClick={() => {
                setFood(food.concat("기타"));
                {
                  food?.length === 0 ? add_count() : setValue(!value);
                }
              }}
            >
              <img
                src="image/category/selected/etc.png"
                style={{ width: "3.5em", height: "3.5em" }}
              />
            </Box>
          )}
          <Typography
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            기타
          </Typography>
        </Box>
      </FoodBox>
    </React.Fragment>
  );
};

const FoodBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 0.5em;
  margin: 0 auto;
  margin-top: 1em;
`;

export default SetFood;
