import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { history } from "../../redux/configStore";
import { useParams } from "react-router-dom";
import { actionCreators as crewActions } from "../../redux/modules/crew";
import { useDispatch } from "react-redux";
import {useLocation} from 'react-router-dom'

const PartyDetailBottomNav = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { partyId } = useParams();
  const deleteParty = (partyId) => {
    dispatch(crewActions.deleteSend(partyId));
  };
  console.log(location.state); 
  return (
    <Box>
      <Box
        sx={{ width: "95%", position: "fixed", display: "flex", bottom: 10 }}
        justifyContent="center"
        alignItems="center"
      >
        <Stack spacing={2} direction="row">
          <Button variant="outlined" sx={{ width: "9rem" }} onClick={() => {
            history.push({
              pathname:'/revise',
              state:partyId
            })
          }}>
            수정
          </Button>
          <Button variant="outlined" sx={{ width: "9rem" }} onClick={() => {
            deleteParty(partyId);
          }}>
            파티삭제
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default PartyDetailBottomNav;
