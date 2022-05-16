import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { history } from "../../redux/configStore";
import { useParams } from "react-router-dom";
import { actionCreators as crewActions } from "../../redux/modules/crew";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const PartyDetailBottomNav = (props) => {
  console.log(props);
  // const location = useLocation();
  const { partyId } = useParams();

  const dispatch = useDispatch();

  const partyUser = useSelector((state) => state?.crew?.info);
  console.log(partyUser);

  const deleteParty = (partyId) => {
    dispatch(crewActions.deleteSend(partyId));
  };

  if (props?.userCheck?.userid === partyUser?.hostid) {
    return (
      <Box>
        <Box
          sx={{
            width: "95%",
            position: "relative",
            display: "flex",
            bottom: 10,
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Stack spacing={2} direction="row">
            <Button
              variant="outlined"
              sx={{ width: "9rem" }}
              onClick={() => {
                history.push({
                  pathname: "/revise",
                  state: partyId,
                });
              }}
            >
              수정
            </Button>
            <Button
              variant="outlined"
              sx={{ width: "9rem" }}
              onClick={() => {
                deleteParty(partyId);
                alert("파티 정말 삭제하시겠습니까?");
              }}
            >
              파티삭제
            </Button>
          </Stack>
        </Box>
      </Box>
    );
  } else if (partyUser?.join === true) {
    return (
      <Box>
        <Box
          sx={{
            width: "95%",
            position: "relative",
            display: "flex",
            bottom: 10,
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Stack spacing={2} direction="row">
            <Button
              variant="outlined"
              sx={{ width: "9rem" }}
              onClick={() => {
                history.push({
                  pathname: `/chat/${partyUser?.hostid}`,
                  state: partyId,
                });
              }}
            >
              호스트에게 문의
            </Button>
            <Button
              variant="outlined"
              sx={{ width: "9rem" }}
              onClick={() => {
                dispatch(crewActions.sendCancelData(partyId));
              }}
            >
              신청취소
            </Button>
          </Stack>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box>
        <Box
          sx={{
            width: "95%",
            position: "relative",
            display: "flex",
            bottom: 10,
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Stack spacing={2} direction="row">
            <Button
              variant="outlined"
              sx={{ width: "9rem" }}
              onClick={() => {
                history.push({
                  pathname: `/chat/${partyUser?.hostid}`,
                  state: partyId,
                });
              }}
            >
              호스트에게 문의
            </Button>
            {props?.memberCnt === props?.capacity ? (
              <Button
                variant="outlined"
                sx={{ width: "9rem" }}
                onClick={() => {
                  alert.apply("모집이 마감되었습니다");
                }}
              >
                모집마감
              </Button>
            ) : (
              <Button
                variant="outlined"
                sx={{ width: "9rem" }}
                onClick={() => {
                  dispatch(crewActions.sendJoinData(partyId));
                }}
              >
                파티신청
              </Button>
            )}
          </Stack>
        </Box>
      </Box>
    );
  }
};

export default PartyDetailBottomNav;
