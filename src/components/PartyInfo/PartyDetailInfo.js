import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const PartyDetailInfo = ({ title, store, address, capacity, date, time }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          {store}
        </Typography>

        <TextField  disabled style={{width:"100%",}}id="outlined-basic" variant="outlined" />

        <Typography>
          {address} | {date} | {time}
        </Typography>
        <Typography>{capacity}</Typography>
      </CardContent>
    </Card>
  );
};

export default PartyDetailInfo;
