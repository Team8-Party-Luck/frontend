import * as React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { useHistory } from "react-router-dom";

import Avatar from "@mui/material/Avatar";



const PartySpread = (props) => {
  let history = useHistory();



  return (
    <React.Fragment>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Avatar
          variant={"rounded"}
          alt="The image"
          src={
            "props.image"
          }
          style={{
            width: 90,
            height: 90,
          }}
          onClick={() => {
            history.push(`/partyInfo/${props.partyId}`);
          }}
        />
        <CardContent sx={{ flex: " 1 auto", p: 0, ml: 1, mb: 2 }}>
          <Stack spacing={0.8}>
            <Typography component="div" variant="h6">
              {props.title}
            </Typography>

            <Typography style={{ fontSize: "0.8rem" }}>
              {props.store} &nbsp; {props.capacity}
            </Typography>
            <Typography style={{ fontSize: "0.8rem" }}>
              {props.date}
              {props.time}
            </Typography>
          </Stack>
        </CardContent>
      </Box>
    </React.Fragment>
  );
};

export default PartySpread;
