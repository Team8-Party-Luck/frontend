import * as React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import { useHistory } from "react-router-dom";

const PartyCard = () => {
  let history = useHistory();
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", flexDirection: "row", m:2}}>
        <Avatar
          variant={"rounded"}
          alt="The image"
          src={
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          }
          style={{
            width: 100,
            height: 100,
          }}
          onClick={() => {
            history.push('/partyInfo')
          }}
        />
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            파티명 &nbsp;&nbsp;{" "}
            <Box component="span" sx={{ fontSize: 16 }}>
              00명
            </Box>
          </Typography>
          <Typography color="text.secondary">
            파티장소 &nbsp; 파티시간
          </Typography>
          <Typography color="text.secondary">주최자</Typography>
        </CardContent>
      </Box>
    </React.Fragment>
  );
};

export default PartyCard;
