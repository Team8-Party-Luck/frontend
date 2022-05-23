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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                setFood(food.filter((food) => food !== "한식"));
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
