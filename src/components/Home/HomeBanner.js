import React from "react";
import styled from "styled-components";
import Banner from "../../static/images/banner/BannerFix.png";
import {history} from '../../redux/configStore'

const HomeBanner = () => {
  return (
    <div style={{ paddingTop: "5em" }}>
      <BannerBox onClick={() => {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSdJU6OWVK42V_30N_BlpChbogL_YrNBmStuXY9mZ5quhlpZtw/viewform?usp=sf_link")
        console.log(window.open)
      }}></BannerBox>
    </div>
  );
};

const BannerBox = styled.div`
  width: 100%;
  height: 6.5em;
  background-image: url(${Banner});
  background-size: cover;
  cursor: pointer;
`;

export default HomeBanner;




