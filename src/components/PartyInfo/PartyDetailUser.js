import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { history } from "../../redux/configStore";
import PartyListUser from "../../pages/UserList";

const PartyDetailUser = ({memberCnt, capacity}) => {
  return (
    <React.Fragment >
      <Box sx={{m:1}}>
      참여자 리스트 {memberCnt}/{capacity}
      <Stack direction="row" spacing={2} sx={{mt:2}}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <IconButton
          size="large"
          color="inherit"
          onClick={() => {
            history.push("/userList");
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
      </Box>
    </React.Fragment>
  );
};

export default PartyDetailUser;
