import React from "react";
import { useState } from "react";
import styled from "styled-components";
import KorImg from "../../static/images/category/korean.png";
import ChiImg from "../../static/images/category/chinese.png";
import JapImg from "../../static/images/category/japanese.png";
import WesImg from "../../static/images/category/western.png";
import FastImg from "../../static/images/category/fastfood.png";
import CoffeeImg from "../../static/images/category/coffee.png";
import SaladImg from "../../static/images/category/salad.png";
import EtcImg from "../../static/images/category/etc.png";
import SelectedKorImg from "../../static/images/category_selected/korean.png";
import SelectedChiImg from "../../static/images/category_selected/chinese.png";
import SelectedJapImg from "../../static/images/category_selected/japanese.png";
import SelectedWesImg from "../../static/images/category_selected/western.png";
import SelectedFastImg from "../../static/images/category_selected/fastfood.png";
import SelectedCoffeeImg from "../../static/images/category_selected/coffee.png";
import SelectedSaladImg from "../../static/images/category_selected/salad.png";
import SelectedEtcImg from "../../static/images/category_selected/etc.png";

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
              <FoodImg src={SelectedKorImg} />
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
              <FoodImg src={KorImg} />
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
              <FoodImg src={SelectedChiImg} />
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
              <FoodImg src={ChiImg} />
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
              <FoodImg src={SelectedJapImg} />
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
              <FoodImg src={JapImg} />
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
              <FoodImg src={SelectedWesImg} />
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
              <FoodImg src={WesImg} />
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
              <FoodImg src={SelectedFastImg} />
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
              <FoodImg src={FastImg} />
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
              <FoodImg src={SelectedSaladImg} />
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
              <FoodImg src={SaladImg} />
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
              <FoodImg src={SelectedCoffeeImg} />
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
              <FoodImg src={CoffeeImg} />
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
              <FoodImg src={SelectedEtcImg} />
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
              <FoodImg src={EtcImg} />
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
