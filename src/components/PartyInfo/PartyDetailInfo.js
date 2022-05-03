import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const PartyDetailInfo = () => {
  return (
    <Card >
      <CardContent>
        <Typography variant="h5" component="div">
          파티명을 입력해요
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          음식점 이름 10명
        </Typography>
        <Typography >
          서울 서초구 | 22.06.01(수) | 오후6:30
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PartyDetailInfo;


