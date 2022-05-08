import { Box, Typography, Button, Card, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const FoodList = (props) => {
  const { user_info } = props;
  console.log(user_info);

  return (
    <Box
      sx={{
        margin: "0 1em",
        padding: "1em",
        background: "#eee",
        borderRadius: 1,
      }}
    >
      <Typography
        component="h4"
        variant="p"
        sx={{ width: "100%", marginBottom: "1em", textAlign: "center" }}
      >
        선호 음식 종류
      </Typography>
      <FoodBox>
        {user_info?.food?.map((cur, idx) => (
          <Box key={idx}>
            <CheckBox />
            <Typography
              component="p"
              variant="p"
              sx={{
                color: "black",
                fontSize: "0.8em",
                marginTop: "0.5em",
                textAlign: "center",
              }}
            >
              {cur}
            </Typography>
          </Box>
        ))}
      </FoodBox>
    </Box>
  );
};

const FoodBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-row-gap: 0.5em;
  margin: 0 auto;
  margin-top: 1em;
`;

const CheckBox = styled.div`
  width: 2.2em;
  height: 2.2em;
  border-radius: 2.2em;
  background: #ff6853;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
`;

export default FoodList;
