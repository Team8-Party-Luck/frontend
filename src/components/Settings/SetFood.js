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

const SetFood = (props) => {
  const { food, setFood } = props;

  const handleChange = (prop) => (event) => {
    setFood({ ...food, [prop]: event.target.value });
  };
  console.log(food?.korea);

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
              onClick={handleChange("korea")}
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
              value={null}
              onClick={handleChange("china")}
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
              value={null}
              onClick={handleChange("japan")}
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
              value={null}
              onClick={handleChange("american")}
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
              value={null}
              onClick={handleChange("asian")}
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
              value={null}
              onClick={handleChange("vegan")}
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
