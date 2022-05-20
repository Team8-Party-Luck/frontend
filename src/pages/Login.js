import React, { useState } from "react";
import Box from "@mui/material/Box";
import { history } from "../redux/configStore";
import { KAKAO_AUTH_URL } from "../shared/OAuth";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OnBoarding1 from "../static/images/onboarding/img_onboarding1.png";
import OnBoarding2 from "../static/images/onboarding/img_onboarding2.png";
import OnBoarding3 from "../static/images/onboarding/img_onboarding3.png";
import OnBoarding4 from "../static/images/onboarding/img_onboarding4.png";
import Kakao from "../static/images/kakao/kakao_login_large_wide.png";

const Login = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Wrapbox>
      <StyledSlider {...settings}>
        <ImgBox>
          <Image src={OnBoarding1} />
        </ImgBox>
        <ImgBox>
          <Image src={OnBoarding2} />
        </ImgBox>
        <ImgBox>
          <Image src={OnBoarding3} />
        </ImgBox>
        <ImgBox>
          <Image src={OnBoarding4} />
        </ImgBox>
      </StyledSlider>
      <LoginBox>
        <KakaoImg
          src={Kakao}
          alt="카카오 로그인 버튼"
          onClick={() => {
            window.location.href = KAKAO_AUTH_URL;
          }}
        />
      </LoginBox>
    </Wrapbox>
  );
};

const Wrapbox = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 8em;
  background: #fff5f4;
  background-size: cover;
`;

// const JustSee = styled.button`
//   width: 300px;
//   height: 43px;
//   border-radius: 5px;
//   border: none;
//   margin-top: 1em;
//   background: #dfdfdf;
// `;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    width: 100%;
    // border: 1px solid;
  }
  .slick-dots li button:before {
    color: gray;
  }
  .slick-dots li.slick-active button:before {
    color: red;
  }
`;
const Image = styled.img`
  width: 70%;
  margin: 0 auto;
`;

const ImgBox = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const LoginBox = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KakaoImg = styled.img`
  width: 80%;
  margin: 0 auto;
`;

export default Login;
