import { Box, Typography, Card, Grid } from "@mui/material";
import { current } from "immer";
import React from "react";

const FoodList = (props) => {
  const { user_info } = props;
  console.log(user_info);

  return (
    <Box sx={{ padding: "0 1em" }}>
      <Typography
        component="p"
        variant="p"
        sx={{ width: "95%", margin: "0.5em 0" }}
      >
        선호 음식 종류
      </Typography>
      <Card sx={{ width: "100%", margin: "0 auto", padding: 1 }}>
        <Grid container spacing={6}>
          {/* {data?.map((cur, idx) => (
            <Grid item xs={2} key={idx}>
              <Box
                bgcolor={"#FF6853"}
                sx={{
                  width: "2.8em",
                  height: "2.8em",
                  borderRadius: "2.8em",
                  margin: "0 auto",
                }}
              >
                <Box
                  sx={{
                    width: "fitContent",
                    margin: "0 auto",
                    textAlign: "center",
                    fontSize: "0.9em",
                    color: "white",
                    fontWeight: "bold",
                    paddingTop: "1em",
                  }}
                >
                  {cur}
                </Box>
              </Box>
            </Grid>
          ))} */}
        </Grid>
      </Card>
    </Box>
  );
};

export default FoodList;
