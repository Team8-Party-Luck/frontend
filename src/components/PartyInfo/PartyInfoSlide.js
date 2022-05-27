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

  if (partyData?.default === true) {
    return (
      <DefaultBox>
        <DefaultImg src={partyData?.image[0]} />
      </DefaultBox>
    );
  } else {
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
  }
};

const Container = styled.div`
  margin-bottom: 1rem;
  padding-top: 3.7em;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 22rem;
  object-fit: cover;
`;

const DefaultBox = styled.div`
  width: 100%;
  padding-top: 3.7em;
`;

const DefaultImg = styled.img`
  width: 100%;
`;

export default PartyInfoSlide;
