import React from "react";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Typography,
  Fab,
  Grid,
  Button,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const SetFood = (props) => {
  const { food, setFood, count, setCount } = props;

  const [value, setValue] = useState(false);

  console.log(food);

  function add_count() {
    if (count === 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }
  console.log(food.length);

  return (
    <React.Fragment>
      <Typography component="h4" variant="p" sx={{ marginTop: 6 }}>
        선호하는 음식을 모두 선택해주세요!
      </Typography>
      <FoodBox>
        <Box>
          {food?.includes("한식") ? (
            <CheckBox
              onClick={() => {
                setFood(food.filter((food) => food !== "한식"));
                setValue(!value);
                {
                  food?.length === 1 ? setCount(count - 1) : setValue(!value);
                }
              }}
            />
          ) : (
            <NonCheckBox
              value="한식"
              onClick={() => {
                setFood(food.concat("한식"));
                {
                  food?.length === 0 ? add_count() : setValue(!value);
                }
              }}
            />
          )}
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            한식
          </Typography>
        </Box>
        <Box>
          {food?.includes("중식") ? (
            <CheckBox
              onClick={() => {
                setFood(food.filter((food) => food !== "중식"));
                {
                  food?.length === 1 ? setCount(count - 1) : setValue(!value);
                }
              }}
            />
          ) : (
            <NonCheckBox
              onClick={() => {
                setFood(food.concat("중식"));
                {
                  food?.length === 0 ? add_count() : setValue(!value);
                }
              }}
            />
          )}
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            중식
          </Typography>
        </Box>
        <Box>
          {food?.includes("일식") ? (
            <CheckBox
              onClick={() => {
                setFood(food.filter((food) => food !== "일식"));
                {
                  food?.length === 1 ? setCount(count - 1) : setValue(!value);
                }
              }}
            />
          ) : (
            <NonCheckBox
              onClick={() => {
                setFood(food.concat("일식"));
                {
                  food?.length === 0 ? add_count() : setValue(!value);
                }
              }}
            />
          )}
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            일식
          </Typography>
        </Box>
        <Box>
          {food?.includes("양식") ? (
            <CheckBox
              onClick={() => {
                setFood(food.filter((food) => food !== "양식"));
                {
                  food?.length === 1 ? setCount(count - 1) : setValue(!value);
                }
              }}
            />
          ) : (
            <NonCheckBox
              onClick={() => {
                setFood(food.concat("양식"));
                {
                  food?.length === 0 ? add_count() : setValue(!value);
                }
              }}
            />
          )}
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            양식
          </Typography>
        </Box>
        <Box>
          {food?.includes("아시안") ? (
            <CheckBox
              onClick={() => {
                setFood(food.filter((food) => food !== "아시안"));
                {
                  food?.length === 1 ? setCount(count - 1) : setValue(!value);
                }
              }}
            />
          ) : (
            <NonCheckBox
              onClick={() => {
                setFood(food.concat("아시안"));
                {
                  food?.length === 0 ? add_count() : setValue(!value);
                }
              }}
            />
          )}
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            아시안
          </Typography>
        </Box>
        <Box>
          {food?.includes("할랄") ? (
            <CheckBox
              onClick={() => {
                setFood(food.filter((food) => food !== "할랄"));
                {
                  food?.length === 1 ? setCount(count - 1) : setValue(!value);
                }
              }}
            />
          ) : (
            <NonCheckBox
              onClick={() => {
                setFood(food.concat("할랄"));
                {
                  food?.length === 0 ? add_count() : setValue(!value);
                }
              }}
            />
          )}
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            할랄
          </Typography>
        </Box>
        <Box>
          {food?.includes("비건") ? (
            <CheckBox
              onClick={() => {
                setFood(food.filter((food) => food !== "비건"));
                {
                  food?.length === 1 ? setCount(count - 1) : setValue(!value);
                }
              }}
            />
          ) : (
            <NonCheckBox
              onClick={() => {
                setFood(food.concat("비건"));
                {
                  food?.length === 0 ? add_count() : setValue(!value);
                }
              }}
            />
          )}
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "black",
              fontSize: "0.9em",
              marginTop: "0.5em",
              textAlign: "center",
            }}
          >
            비건
          </Typography>
        </Box>
      </FoodBox>
    </React.Fragment>
  );
};

const NonCheckBox = styled.div`
  width: 4.5em;
  height: 4.5em;
  border-radius: 4.5em;
  background: #dfdfdf;
  margin: 0 auto;
  cursor: pointer;
`;

const CheckBox = styled.div`
  width: 4.5em;
  height: 4.5em;
  border-radius: 4.5em;
  background: #ff6853;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
`;

const FoodBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 0.5em;
  margin: 0 auto;
  margin-top: 1em;
`;

export default SetFood;
