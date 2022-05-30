import React from "react";
import styled from "styled-components";
import GuideImg from "../static/images/guide/con.png";
import Header from "../shared/Header";
const Guide = () => {
  return (
    <WrapBox>
      <Header name="잇츨링 가이드" />
      <GuideImgBox>
        <GuideImage src={GuideImg} />
      </GuideImgBox>
    </WrapBox>
  );
};

const WrapBox = styled.div`
  width: 100%;
`;

const GuideImage = styled.img`
  width: 100%;
  margin: 0 auto;
`;

const GuideImgBox = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2em;
  overflow-y: auto;
  padding-top: 5em;
  align-items: center;
`;

export default Guide;
