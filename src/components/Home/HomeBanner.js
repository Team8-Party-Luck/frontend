import React from "react";
import styled from "styled-components";
import Banner from "../../static/images/banner/배너.png";

const HomeBanner = () => {
  return (
    <div style={{ paddingTop: "5em" }}>
      <BannerBox></BannerBox>
    </div>
  );
};

const BannerBox = styled.div`
  width: 100%;
  height: 6em;
  background-image: url(${Banner});
  background-size: cover;
  cursor: pointer;
`;

export default HomeBanner;
