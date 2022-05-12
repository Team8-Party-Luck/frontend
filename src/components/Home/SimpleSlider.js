import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Box } from "@mui/material";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const imgUrl =
    "https://images.unsplash.com/photo-1650982941157-f3e98bf80e43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";

  const items = [
    { id: 1, url: imgUrl },
    { id: 2, url: imgUrl },
    { id: 3, url: imgUrl },
    { id: 4, url: imgUrl },
    { id: 5, url: imgUrl },
    { id: 6, url: imgUrl },
    { id: 7, url: imgUrl },
    { id: 8, url: imgUrl },
    { id: 9, url: imgUrl },
    { id: 10, url: imgUrl },
  ];

  return (
    // <Container>
    //   <StyledSlider {...settings}>
    //     {items.map((item) => {
    //       return (
    //         <div key={item.id}>
    //           <ImageContainer>
    //             <Image src={item.url} />
    //           </ImageContainer>
    //         </div>
    //       );
    //     })}
    //   </StyledSlider>
    // </Container>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "6.5em",
        background: "#FF6853",
      }}
    >
      <Typography
        sx={{ fontWeight: "bold", fontSize: "1.5em", marginTop: "1.4em" }}
      >
        배너 자리
      </Typography>
    </Box>
  );
};

const Container = styled.div`
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
`;

export default SimpleSlider;
