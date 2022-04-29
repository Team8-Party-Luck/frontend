import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { RadioGroup } from "@mui/material";
import { Radio } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
//Swiper 로 하위 SwiperSlide 컴포넌트들을 감싸준다.
import "swiper/components/navigation/navigation.min.css";
// Swiper Module인 navigation의 css 를 가져온다.
import "swiper/swiper.scss";
// 'npm i sass'를 통해 SASS를 설치한 후 scss를 가져온다.
import SwiperCore, { Navigation } from "swiper/core";

const InitialSettings = (props) => {
  const [imageSrc, setImageSrc] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  console.log(gender);
  console.log(age);
  console.log(imageSrc);

  SwiperCore.use([Navigation]);
  // Naviagtion 모듈을 사용하기 위해 SwiperCore를 가져와 설치해준다.

  //미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    console.log(reader);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const swiperStyle = {
    width: "100%",
    height: "736px",
  };

  return (
    <Swiper
      navigation={true}
      style={swiperStyle}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide>
        <Container>
          <QuestionBox>프로필 이미지를 설정해볼까요?</QuestionBox>
          <SelectBox>
            <UploadFileInput
              type="file"
              accept={"image/*"}
              onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
              }}
            />
            <PreviewBox>
              {imageSrc && <PreviewImg src={imageSrc} alt="preview-img" />}
            </PreviewBox>
          </SelectBox>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container>
          <QuestionBox>선호하는 음식을 설정해볼까요?</QuestionBox>
          <SelectBox></SelectBox>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container>
          <QuestionBox>나이를 설정해볼까요?</QuestionBox>
          <SelectBox>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="10대"
                control={<Radio />}
                label="10대"
                onClick={(e) => {
                  setAge(e.target.value);
                }}
              />
              <FormControlLabel
                value="20대"
                control={<Radio />}
                label="20대"
                onClick={(e) => {
                  setAge(e.target.value);
                }}
              />
              <FormControlLabel
                value="30대"
                control={<Radio />}
                label="30대"
                onClick={(e) => {
                  setAge(e.target.value);
                }}
              />
              <FormControlLabel
                value="40대~"
                control={<Radio />}
                label="40대~"
                onClick={(e) => {
                  setAge(e.target.value);
                }}
              />
            </RadioGroup>
          </SelectBox>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container>
          <QuestionBox>성별을 설정해볼까요?</QuestionBox>
          <SelectBox>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                onClick={(e) => {
                  setGender(e.target.value);
                }}
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                onClick={(e) => {
                  setGender(e.target.value);
                }}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
                onClick={(e) => {
                  setGender(e.target.value);
                }}
              />
            </RadioGroup>
          </SelectBox>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container>
          <QuestionBox>인스타그램 주소를 설정해볼까요?</QuestionBox>
          <SelectBox>
            <TextField fullWidth label="Instagram Address" />
            <Button
              variant="contained"
              size="large"
              sx={{ marginTop: 43 }}
              fullWidth
            >
              저장하기
            </Button>
          </SelectBox>
        </Container>
      </SwiperSlide>
    </Swiper>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const QuestionBox = styled.div`
  width: 90%;
  height: 10vh;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 10vh;
  margin-bottom: 5vh;
  font-size: 20px;
  font-weight: bold;
  padding: 1.2em 0;
`;

const SelectBox = styled.div`
  width: 90%;
  height: 60vh;
  border: 1px solid black;
  margin: 0 auto;
`;

const UploadFileInput = styled.input`
  border: 3px solid #b2e1f4;
  width: 100%;
  padding: 10px;
  margin-bottom: 1em;
  border-radius: 5px;
`;

const PreviewBox = styled.div`
  width: 100%;
  height: 100%;
`;
const PreviewImg = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 5px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

export default InitialSettings;
