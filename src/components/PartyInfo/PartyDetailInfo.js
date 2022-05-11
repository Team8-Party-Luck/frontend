import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const PartyDetailInfo = ({
  title,
  store,
  address,
  capacity,
  date,
  time,
  place_url,
  gender,
  meeting,
  age
}) => {
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
        <Typography variant="h6" component="div" style={{ fontWeight: 1000 }}>
          {title}
        </Typography>
        <Typography sx={{}} color="text.secondary">
          {store} | {address}
        </Typography>

        <Button
          href={place_url}
          variant="outlined"
          style={{
            width: "90%",
            height: "3rem",
            borderRadius: "1rem",
            marginLeft: "1rem",
            marginTop: "1rem",
          }}
        >
          식당 상세 정보 확인하기
        </Button>
        <Stack spacing={1} style={{marginTop:'1rem'}}>
        <Typography sx={{fontSize:'0.9rem'}}>
          만나는장소 &nbsp;&nbsp; {meeting}
        </Typography>
        <Typography sx={{fontSize:'0.9rem'}}>
          날짜, 시간 &nbsp;&nbsp;&nbsp;&nbsp; {date}|{time}
        </Typography>
        <Typography sx={{fontSize:'0.9rem'}}>
          모집 인원 &nbsp;&nbsp;&nbsp;&nbsp; {capacity}명 | {age} {gender} 모임
        </Typography>
      </Stack>

      </CardContent>
    </Card>
  );
};

export default PartyDetailInfo;
