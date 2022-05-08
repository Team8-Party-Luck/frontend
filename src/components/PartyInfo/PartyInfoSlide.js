import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  margin-bottom: 1rem;
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

const PartyInfoSlide = ({ image }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {image?.map((v, idx) => {
          return (
            <div key={idx}>
              <Image src={v} />
            </div>
          );
        })}
      </StyledSlider>
    </Container>
  );
};

export default PartyInfoSlide;
