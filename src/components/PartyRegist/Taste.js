import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

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

const Taste = ({image, setImage, defaultImage, setDefaultImage, setShowImages }) => {
  const settingImage = (props) => {
    if(image.length !== 0 ){
        setImage([]);
        setShowImages([]);
    }
    setDefaultImage(props)
  }
  return (
    <Stack>
      <Stack direction="row" spacing={2.9} sx={{mb:2}}>
        {defaultImage === "한식" ? (
          <Stack spacing={10}>
            <img
              alt="한식"
              src={SelectedKorImg}
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                settingImage("한식");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>한식</Box>
          </Stack>
        ) : (
          <Stack spacing={10}>
            <img
              alt="한식"
              src={KorImg}
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                settingImage("한식");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>한식</Box>
          </Stack>
        )}
        {defaultImage === "중식/아시안" ? (
          <Stack spacing={2}>
            <img
              alt="중식/아시안"
              src={SelectedChiImg}
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                settingImage("중식/아시안");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "-0.3rem"}}>중식/아시안</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <img
              alt="중식/아시안"
              src={ChiImg}
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                settingImage("중식/아시안");
              }}
            />
            <Box style={{ marginTop: 5,  marginLeft: "-0.3rem"}}>중식/아시안</Box>
          </Stack>
        )}
        {defaultImage === "일식" ? (
          <Stack spacing={2}>
            <img
              alt="일식"
              src={SelectedJapImg}
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                settingImage("일식");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>일식</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <img
              alt="일식"
              src={JapImg}
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                settingImage("일식");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>일식</Box>
          </Stack>
        )}
        {defaultImage === "양식" ? (
          <Stack spacing={2}>
            <img
              alt="양식"
              src={SelectedWesImg}
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                settingImage("양식");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>양식</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <img
              alt="양식"
              src={WesImg}
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                settingImage("양식");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>양식</Box>
          </Stack>
        )}
      </Stack>
      <Stack direction="row" spacing={2.5}>
        {defaultImage === "패스트푸드" ? (
          <Stack spacing={2} >
            <img
              alt="패스트푸드"
              src={SelectedFastImg}
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                settingImage("패스트푸드");
              }}
            />
            <Box style={{ marginTop: 5, }}>패스트푸드</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <img
              alt="패스트푸드"
              src={FastImg}
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                settingImage("패스트푸드");
              }}
            />
            <Box style={{ marginTop: 5, }}>패스트푸드</Box>
          </Stack>
        )}
        {defaultImage === "샐러드" ? (
          <Stack spacing={2}>
            <img
              alt="샐러드"
              src={SelectedSaladImg}
              
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                settingImage("샐러드");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "0.7rem" }}>샐러드</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <img
              alt="샐러드"
              src={SaladImg}
              style={{ width: "4em", height: "4em", }}
              onClick={() => {
                settingImage("샐러드");
              }}
            />
            <Box style={{ marginTop: 5,  marginLeft: "0.7rem" }}>샐러드</Box>
          </Stack>
        )}
        {defaultImage === "커피/디저트" ? (
          <Stack spacing={2}>
            <img
              alt="커피/디저트"
              src={SelectedCoffeeImg}
              style={{ width: "4em", height: "4em",marginLeft:'0.4rem'  }}
              onClick={() => {
                settingImage("커피/디저트");
              }}
            />
            <Box style={{ marginTop: 5,  }}>커피/디저트</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <img
              alt="커피/디저트"
              src={CoffeeImg}
              style={{ width: "4em", height: "4em", marginLeft:'0.4rem' }}
              onClick={() => {
                settingImage("커피/디저트");
              }}
            />
            <Box style={{ marginTop: 5,  }}>커피/디저트</Box>
          </Stack>
        )}
        {defaultImage === "기타" ? (
          <Stack spacing={2}>
            <img
              alt="기타"
              src={SelectedEtcImg}
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                settingImage("기타");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1.1rem" }}>기타</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <img
              alt="기타"
              src={EtcImg}
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                settingImage("기타");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1.1rem" }}>기타</Box>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default Taste;
