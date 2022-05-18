import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { red } from "@mui/material/colors";

const PartyInfoSlide = (props) => {
  const { partyData } = props;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {partyData?.image?.map((cur, idx) => {
          return (
            <div key={idx}>
              <Image src={cur} />
            </div>
          );
        })}
      </StyledSlider>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 1rem;
  padding-top: 3.7em;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 22rem;
  object-fit: cover;
`;

export default PartyInfoSlide;
