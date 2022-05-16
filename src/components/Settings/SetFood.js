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

  console.log(food);

  //프로그레스바
  function add_count() {
    if (count === 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <React.Fragment>
      <FoodBox>
        <Wrap>
          {food?.includes("한식") ? (
            <ListBox
              onClick={() => {
                setFood(food.filter((food) => food !== "한식"));
                if (food?.length === 1) {
                  setCount(count - 1);
                }
              }}
            >
              <FoodImg src="image/category/hilighting/korean.png" />
            </ListBox>
          ) : (
            <ListBox
              value="한식"
              onClick={() => {
                setFood(food.concat("한식"));
                if (food?.length === 0) {
                  add_count();
                }
              }}
            >
              <FoodImg src="image/category/selected/korean.png" />
            </ListBox>
          )}
          <FoodText>한식</FoodText>
        </Wrap>
        <Wrap>
          {food?.includes("중식") ? (
            <ListBox
              onClick={() => {
                setFood(food.filter((food) => food !== "중식"));
                if (food?.length === 1) {
                  setCount(count - 1);
                }
              }}
            >
              <FoodImg src="image/category/hilighting/chinese.png" />
            </ListBox>
          ) : (
            <ListBox
              value="중식"
              onClick={() => {
                setFood(food.concat("중식"));
                if (food?.length === 0) {
                  add_count();
                }
              }}
            >
              <FoodImg src="image/category/selected/chinese.png" />
            </ListBox>
          )}
          <FoodText>중식</FoodText>
        </Wrap>
        <Wrap>
          {food?.includes("일식") ? (
            <ListBox
              onClick={() => {
                setFood(food.filter((food) => food !== "일식"));
                if (food?.length === 1) {
                  setCount(count - 1);
                }
              }}
            >
              <FoodImg src="image/category/hilighting/japanese.png" />
            </ListBox>
          ) : (
            <ListBox
              value="일식"
              onClick={() => {
                setFood(food.concat("일식"));
                if (food?.length === 0) {
                  add_count();
                }
              }}
            >
              <FoodImg src="image/category/selected/japanese.png" />
            </ListBox>
          )}
          <FoodText>일식</FoodText>
        </Wrap>
        <Wrap>
          {food?.includes("양식") ? (
            <ListBox
              onClick={() => {
                setFood(food.filter((food) => food !== "양식"));
                if (food?.length === 1) {
                  setCount(count - 1);
                }
              }}
            >
              <FoodImg src="image/category/hilighting/western.png" />
            </ListBox>
          ) : (
            <ListBox
              value="양식"
              onClick={() => {
                setFood(food.concat("양식"));
                if (food?.length === 0) {
                  add_count();
                }
              }}
            >
              <FoodImg src="image/category/selected/western.png" />
            </ListBox>
          )}
          <FoodText>양식</FoodText>
        </Wrap>
        <Wrap>
          {food?.includes("패스트푸드") ? (
            <ListBox
              onClick={() => {
                setFood(food.filter((food) => food !== "패스트푸드"));
                if (food?.length === 1) {
                  setCount(count - 1);
                }
              }}
            >
              <FoodImg src="image/category/hilighting/fastfood.png" />
            </ListBox>
          ) : (
            <ListBox
              value="패스트푸드"
              onClick={() => {
                setFood(food.concat("패스트푸드"));
                if (food?.length === 0) {
                  add_count();
                }
              }}
            >
              <FoodImg src="image/category/selected/fastfood.png" />
            </ListBox>
          )}
          <FoodText>패스트푸드</FoodText>
        </Wrap>
        <Wrap>
          {food?.includes("샐러드") ? (
            <ListBox
              onClick={() => {
                setFood(food.filter((food) => food !== "샐러드"));
                if (food?.length === 1) {
                  setCount(count - 1);
                }
              }}
            >
              <FoodImg src="image/category/hilighting/salad.png" />
            </ListBox>
          ) : (
            <ListBox
              value="샐러드"
              onClick={() => {
                setFood(food.concat("샐러드"));
                if (food?.length === 0) {
                  add_count();
                }
              }}
            >
              <FoodImg src="image/category/selected/salad.png" />
            </ListBox>
          )}
          <FoodText>샐러드</FoodText>
        </Wrap>
        <Wrap>
          {food?.includes("디저트") ? (
            <ListBox
              onClick={() => {
                setFood(food.filter((food) => food !== "디저트"));
                if (food?.length === 1) {
                  setCount(count - 1);
                }
              }}
            >
              <FoodImg src="image/category/hilighting/coffee.png" />
            </ListBox>
          ) : (
            <ListBox
              value="디저트"
              onClick={() => {
                setFood(food.concat("디저트"));
                if (food?.length === 0) {
                  add_count();
                }
              }}
            >
              <FoodImg src="image/category/selected/coffee.png" />
            </ListBox>
          )}
          <FoodText>디저트</FoodText>
        </Wrap>
        <Wrap>
          {food?.includes("기타") ? (
            <ListBox
              onClick={() => {
                setFood(food.filter((food) => food !== "기타"));
                if (food?.length === 1) {
                  setCount(count - 1);
                }
              }}
            >
              <FoodImg src="image/category/hilighting/etc.png" />
            </ListBox>
          ) : (
            <ListBox
              value="기타"
              onClick={() => {
                setFood(food.concat("기타"));
                if (food?.length === 0) {
                  add_count();
                }
              }}
            >
              <FoodImg src="image/category/selected/etc.png" />
            </ListBox>
          )}
          <FoodText>기타</FoodText>
        </Wrap>
      </FoodBox>
    </React.Fragment>
  );
};

const FoodBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1em;
  margin: 0 auto;
  margin-top: 1em;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrap = styled.div``;

const FoodText = styled.p`
  color: black;
  font-size: 0.9em;
  margin-top: 0.5em;
  text-align: center;
`;

const FoodImg = styled.img`
  width: 4.5em;
  height: 4.5em;
`;

export default SetFood;
