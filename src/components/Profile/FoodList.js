import React from "react";
import styled from "styled-components";

//컬러시스템
import { color } from "../../shared/ColorSystem";

const FoodList = (props) => {
  const { user_info } = props;
  // console.log(user_info);

  return (
    <React.Fragment>
      <FoodText>선호 음식 종류</FoodText>
      <WrapBox>
        {user_info?.food?.includes("한식") ? (
          <FoodBox color={color.korean}>한식</FoodBox>
        ) : null}
        {user_info?.food?.includes("중식/아시안") ? (
          <FoodBox color={color.chinese}>중식/아시안</FoodBox>
        ) : null}
        {user_info?.food?.includes("일식") ? (
          <FoodBox color={color.japan}>일식</FoodBox>
        ) : null}
        {user_info?.food?.includes("양식") ? (
          <FoodBox color={color.western}>양식</FoodBox>
        ) : null}
        {user_info?.food?.includes("패스트푸드") ? (
          <FoodBox color={color.fastfood}>패스트푸드</FoodBox>
        ) : null}
        {user_info?.food?.includes("커피/디저트") ? (
          <FoodBox color={color.dessert}>커피/디저트</FoodBox>
        ) : null}
        {user_info?.food?.includes("샐러드") ? (
          <FoodBox color={color.salad}>샐러드류</FoodBox>
        ) : null}
        {user_info?.food?.includes("기타") ? (
          <FoodBox color={color.etc}>기타</FoodBox>
        ) : null}
      </WrapBox>
    </React.Fragment>
  );
};

const FoodText = styled.p`
  font-size: 0.7em;
  color: ${color.sub1};
  font-weight: 700;
  margin-top: 1em;
  margin-bottom: 0.5em;
`;

const WrapBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FoodBox = styled.div`
  width: fit-content;
  min-width: 3.5em;
  border-radius: 1.5em;
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  padding: 0.3em 0.5em;
  font-size: 0.7em;
  text-align: center;
  margin-right: 0.3em;
  margin-bottom: 0.3em;
`;

export default FoodList;
