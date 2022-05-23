import React from "react";
import styled from "styled-components";
import { color } from "../shared/ColorSystem";

//카카오
import { KAKAO_AUTH_URL } from "../shared/OAuth";

//캐러셀
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//이미지
import OnBoarding1 from "../static/images/onboarding/img_onboarding1.png";
import OnBoarding2 from "../static/images/onboarding/img_onboarding2.png";
import OnBoarding3 from "../static/images/onboarding/img_onboarding3.png";
import OnBoarding4 from "../static/images/onboarding/img_onboarding4.png";
import Kakao from "../static/images/kakao/kakao_login_large_wide.png";

const Login = () => {
  //캐러셀 설정
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Wrapbox BgColor={color.pale}>
      <StyledSlider {...settings}>
        <ImgBox>
          <LogoImg src={OnBoarding1} />
        </ImgBox>
        <ImgBox>
          <Image src={OnBoarding2} />
          <ImgText>
            맛집을 가고싶은데 <br />
            같이 갈 사람이 없어서 포기하셨나요?
          </ImgText>
        </ImgBox>
        <ImgBox>
          <Image src={OnBoarding3} />
          <ImgText>
            내가 원하는 시간과 장소에서 열리는 <br />
            맛집 파티에 참여하세요
          </ImgText>
        </ImgBox>
        <ImgBox>
          <Image src={OnBoarding4} />
          <ImgText>
            내가 원하는 조건의 <br />
            파티원을 모집할 수 있습니다
          </ImgText>
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
  padding-top: 10em;
  background: ${(props) => props.BgColor};
  background-size: cover;
  background-repeat: no-repeat;
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
    width: 80%;
    margin: 0 auto;
    z-index: 999;
    cursor: pointer;
  }
  .slick-dots {
    bottom: -5em;
  }

  .slick-dots li button:before {
    color: gray;
  }
  .slick-dots li.slick-active button:before {
    color: red;
  }
`;
const Image = styled.img`
  width: 100%;
  margin: 0 auto;
`;

const ImgBox = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const LoginBox = styled.div`
  position: absolute;
  left: 12.5%;
  right: 12.5%;
  bottom: 3em;
  width: 75%;
  height: 3em;
  cursor: pointer;
`;
const ImgText = styled.p`
  font-size: 1.2em;
  text-align: center;
`;

const KakaoImg = styled.img`
  width: 100%;
  margin: 0 auto;
`;

const LogoImg = styled.img`
  width: 70%;
  margin: 0 auto;
`;

export default Login;
