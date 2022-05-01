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
} from "@mui/material";

const SetFood = (props) => {
  const { food, setFood } = props;

  const handleChange = (prop) => (event) => {
    setFood({ ...food, [prop]: event.target.value });
  };

  return (
    <React.Fragment>
      <Typography component="h4" variant="p" sx={{ marginTop: 5 }}>
        선호하는 음식을 모두 선택해주세요!
      </Typography>
      <Grid container spacing={4} marginTop={-2}>
        <Grid item xs={3}>
          <Fab
            color="primary"
            value="한식"
            aria-label="add"
            sx={{ width: "5em", height: "5em" }}
            onClick={handleChange("korean")}
          >
            한식
          </Fab>
        </Grid>
        <Grid item xs={3}>
          <Fab
            color="primary"
            aria-label="add"
            sx={{ width: "5em", height: "5em" }}
            value="중식"
            onClick={handleChange("china")}
          >
            중식
          </Fab>
        </Grid>
        <Grid item xs={3}>
          <Fab
            color="primary"
            aria-label="add"
            sx={{ width: "5em", height: "5em" }}
            value="일식"
            onClick={handleChange("japan")}
          >
            일식
          </Fab>
        </Grid>
        <Grid item xs={3}>
          <Fab
            color="primary"
            aria-label="add"
            sx={{ width: "5em", height: "5em" }}
            value="양식"
            onClick={handleChange("american")}
          >
            양식
          </Fab>
        </Grid>
        <Grid item xs={3}>
          <Fab
            color="primary"
            aria-label="add"
            sx={{ width: "5em", height: "5em" }}
            value="아시안"
            onClick={handleChange("asian")}
          >
            아시안
          </Fab>
        </Grid>
        <Grid item xs={3}>
          <Fab
            color="primary"
            aria-label="add"
            sx={{ width: "5em", height: "5em" }}
            value="할랄"
            onClick={handleChange("halal")}
          >
            할랄
          </Fab>
        </Grid>
        <Grid item xs={3}>
          <Fab
            color="primary"
            aria-label="add"
            sx={{ width: "5em", height: "5em" }}
            value="비건"
            onClick={handleChange("vegan")}
          >
            비건
          </Fab>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SetFood;
