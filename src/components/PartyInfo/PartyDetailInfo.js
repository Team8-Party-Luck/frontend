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

const PartyDetailInfo = ({ title, store, address, capacity, date, time,}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          {store} 
        </Typography>
        <Typography>
          {address} | {date} | {time}
        </Typography>
        <Typography>
          {capacity}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PartyDetailInfo;
