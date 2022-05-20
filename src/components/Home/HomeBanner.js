import React from "react";
import styled from "styled-components";
import Banner from "../../static/images/banner/배너.png";

const HomeBanner = () => {
  return <BannerBox></BannerBox>;
};

const BannerBox = styled.div`
  width: 100%;
  height: 6.5em;
  background-image: url(${Banner});
  background-size: cover;
`;

export default HomeBanner;
