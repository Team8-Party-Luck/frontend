import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { history } from "../../redux/configStore";
import PartyListUser from "../../pages/UserList";

const PartyDetailUser = ({ memberCnt, capacity, userimageurls, partyId }) => {
  const userImage = userimageurls?.map((v, idx) => (
    <div key={idx}>
      <Avatar alt="Remy Sharp" src={v} />
    </div>
  ));

  return (
    <React.Fragment>
      <Box sx={{ m: 1 }}>
        참여자 리스트 {memberCnt}/{capacity}
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          {userImage}
          <IconButton
            style={{ position: "absolute", marginLeft: "20rem" }}
            size="large"
            color="inherit"
            onClick={() => {
              history.push({
                pathname: "/userList",
                state: partyId,
              });
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Stack>
      </Box>
      <hr style={{ marginTop: "1rem", marginBottom: "1rem" }} />
    </React.Fragment>
  );
};

export default PartyDetailUser;
