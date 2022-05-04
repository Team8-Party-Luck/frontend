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

const SetFood = (props) => {
  const { food, setFood } = props;

  const [value, setValue] = useState(false);

  const handleChange = (prop) => (event) => {
    setFood({ ...food, [prop]: event.target.value });
  };

  console.log(food);
  // Object.values(food);
  // console.log(Object.values(food));
  // console.log({ ...Object.values(food) });

  // React.useEffect(() => {}, [food]);
  // console.log("나는 렌더링");

  return (
    <React.Fragment>
      <Typography component="h4" variant="p" sx={{ marginTop: 6 }}>
        선호하는 음식을 모두 선택해주세요!
      </Typography>
      <Grid container spacing={3} marginTop={-1}>
        <Grid item xs={4}>
          {food?.korea ? (
            <Button
              value={null}
              onClick={() => {
                delete food?.korea;
                setValue(!value);
              }}
              variant="contained"
              fullWidth
              size="large"
            >
              한식
            </Button>
          ) : (
            <Button
              value="한식"
              onClick={handleChange("korea")}
              variant="outlined"
              fullWidth
              size="large"
            >
              한식
            </Button>
          )}
        </Grid>
        <Grid item xs={4}>
          {food?.china ? (
            <Button
              onClick={() => {
                delete food?.china;
                setValue(!value);
              }}
              variant="contained"
              fullWidth
              size="large"
            >
              중식
            </Button>
          ) : (
            <Button
              value="중식"
              onClick={handleChange("china")}
              variant="outlined"
              fullWidth
              size="large"
            >
              중식
            </Button>
          )}
        </Grid>
        <Grid item xs={4}>
          {food?.japan ? (
            <Button
              onClick={() => {
                delete food?.japan;
                setValue(!value);
              }}
              variant="contained"
              fullWidth
              size="large"
            >
              일식
            </Button>
          ) : (
            <Button
              value="일식"
              onClick={handleChange("japan")}
              variant="outlined"
              fullWidth
              size="large"
            >
              일식
            </Button>
          )}
        </Grid>
        <Grid item xs={4}>
          {food?.american ? (
            <Button
              onClick={() => {
                delete food?.american;
                setValue(!value);
              }}
              variant="contained"
              fullWidth
              size="large"
            >
              양식
            </Button>
          ) : (
            <Button
              value="양식"
              onClick={handleChange("american")}
              variant="outlined"
              fullWidth
              size="large"
            >
              양식
            </Button>
          )}
        </Grid>
        <Grid item xs={4}>
          {food?.asian ? (
            <Button
              onClick={() => {
                delete food?.asian;
                setValue(!value);
              }}
              variant="contained"
              fullWidth
              size="large"
            >
              아시안
            </Button>
          ) : (
            <Button
              value="아시안"
              onClick={handleChange("asian")}
              variant="outlined"
              fullWidth
              size="large"
            >
              아시안
            </Button>
          )}
        </Grid>
        <Grid item xs={4}>
          {food?.vegan ? (
            <Button
              onClick={() => {
                delete food?.vegan;
                setValue(!value);
              }}
              variant="contained"
              fullWidth
              size="large"
            >
              비건
            </Button>
          ) : (
            <Button
              value="비건"
              onClick={handleChange("vegan")}
              variant="outlined"
              fullWidth
              size="large"
            >
              비건
            </Button>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SetFood;
