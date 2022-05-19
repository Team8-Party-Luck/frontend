import { Box, Typography, Button, Card, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const FoodList = (props) => {
  const { user_info } = props;
  console.log(user_info);

  return (
    <React.Fragment>
      <FoodText>선호 음식 종류</FoodText>
      <WrapBox>
        {user_info?.food?.includes("한식") ? <KorBox>한식</KorBox> : null}
        {user_info?.food?.includes("중식") ? (
          <ChiBox>중식/아시안</ChiBox>
        ) : null}
        {user_info?.food?.includes("일식") ? <JapBox>일식</JapBox> : null}
        {user_info?.food?.includes("양식") ? <WesBox>양식</WesBox> : null}
        {user_info?.food?.includes("패스트푸드") ? (
          <FastBox>패스트푸드</FastBox>
        ) : null}
        {user_info?.food?.includes("디저트") ? (
          <CoffeeBox>커피/디저트</CoffeeBox>
        ) : null}
        {user_info?.food?.includes("샐러드") ? (
          <SaladBox>샐러드류</SaladBox>
        ) : null}
        {user_info?.food?.includes("기타") ? <EtcBox>기타</EtcBox> : null}
      </WrapBox>
    </React.Fragment>
  );
};

const FoodText = styled.p`
  font-size: 0.7em;
  color: gray;
  font-weight: 600;
  margin-top: 1em;
  margin-bottom: 0.5em;
`;

const WrapBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const KorBox = styled.div`
  width: fit-content;
  min-width: 3.5em;
  border-radius: 1.5em;
  border: 1px solid #ee9d00;
  color: #ee9d00;
  padding: 0.3em 0.5em;
  font-size: 0.7em;
  text-align: center;
  margin-right: 0.3em;
  margin-bottom: 0.3em;
`;
const ChiBox = styled(KorBox)`
  border: 1px solid #ff5b33;
  color: #ff5b33;
`;
const JapBox = styled(KorBox)`
  border: 1px solid #003159;
  color: #003159;
`;
const WesBox = styled(KorBox)`
  border: 1px solid #23b762;
  color: #23b762;
`;
const FastBox = styled(KorBox)`
  border: 1px solid #d69554;
  color: #d69554;
`;
const SaladBox = styled(KorBox)`
  border: 1px solid #3db1dd;
  color: #3db1dd;
`;
const CoffeeBox = styled(KorBox)`
  border: 1px solid #b28146;
  color: #b28146;
`;

const EtcBox = styled(KorBox)`
  border: 1px solid #999;
  color: #999;
`;

export default FoodList;
