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
import styled from "styled-components";

const PartyDetailBottomNav = (props) => {
  console.log(props);

  const { partyId } = useParams();

  const dispatch = useDispatch();

  const partyUser = useSelector((state) => state?.crew?.info);
  console.log(partyUser);

  const deleteParty = (partyId) => {
    dispatch(crewActions.deleteSend(partyId));
  };

  // if (props?.userCheck?.userid === partyUser?.hostid) {
  //   return (
  //     <Box>
  //       <Box
  //         sx={{
  //           width: "95%",
  //           position: "relative",
  //           display: "flex",
  //           bottom: 10,
  //         }}
  //         justifyContent="center"
  //         alignItems="center"
  //       >
  //         <Stack spacing={2} direction="row">
  //           <Button
  //             variant="outlined"
  //             sx={{ width: "9rem" }}
  //             onClick={() => {
  //               history.push({
  //                 pathname: "/revise",
  //                 state: partyId,
  //               });
  //             }}
  //           >
  //             수정
  //           </Button>
  //           <Button
  //             variant="outlined"
  //             sx={{ width: "9rem" }}
  //             onClick={() => {
  //               deleteParty(partyId);
  //               alert("파티 정말 삭제하시겠습니까?");
  //             }}
  //           >
  //             파티삭제
  //           </Button>
  //         </Stack>
  //       </Box>
  //     </Box>
  //   );
  // } else if (partyUser?.join === true) {
  //   return (
  //     <Box>
  //       <Box
  //         sx={{
  //           width: "95%",
  //           position: "relative",
  //           display: "flex",
  //           bottom: 10,
  //         }}
  //         justifyContent="center"
  //         alignItems="center"
  //       >
  //         <Stack spacing={2} direction="row">
  //           <Button
  //             variant="outlined"
  //             sx={{ width: "9rem" }}
  //             onClick={() => {
  //               history.push({
  //                 pathname: `/chat/${partyUser?.hostid}`,
  //                 state: partyId,
  //               });
  //             }}
  //           >
  //             호스트에게 문의
  //           </Button>
  //           <Button
  //             variant="outlined"
  //             sx={{ width: "9rem" }}
  //             onClick={() => {
  //               dispatch(crewActions.sendCancelData(partyId));
  //             }}
  //           >
  //             신청취소
  //           </Button>
  //         </Stack>
  //       </Box>
  //     </Box>
  //   );
  // } else {
  //   return (
  //     <Box>
  //       <Box
  //         sx={{
  //           width: "95%",
  //           position: "relative",
  //           display: "flex",
  //           bottom: 10,
  //         }}
  //         justifyContent="center"
  //         alignItems="center"
  //       >
  //         <Stack spacing={2} direction="row">
  //           <Button
  //             variant="outlined"
  //             sx={{ width: "9rem" }}
  //             onClick={() => {
  //               history.push({
  //                 pathname: `/chat/${partyUser?.hostid}`,
  //                 state: partyId,
  //               });
  //             }}
  //           >
  //             호스트에게 문의
  //           </Button>
  //           {props?.memberCnt === props?.capacity ? (
  //             <Button
  //               variant="outlined"
  //               sx={{ width: "9rem" }}
  //               onClick={() => {
  //                 alert.apply("모집이 마감되었습니다");
  //               }}
  //             >
  //               모집마감
  //             </Button>
  //           ) : (
  //             <Button
  //               variant="outlined"
  //               sx={{ width: "9rem" }}
  //               onClick={() => {
  //                 dispatch(crewActions.sendJoinData(partyId));
  //               }}
  //             >
  //               파티신청
  //             </Button>
  //           )}
  //         </Stack>
  //       </Box>
  //     </Box>
  //   );
  // }

  if (props?.userCheck?.userid === partyUser?.hostid) {
    return (
      <FlexBox>
        <LeftBtn
          onClick={() => {
            history.push({
              pathname: "/revise",
              state: partyId,
            });
          }}
        >
          수정
        </LeftBtn>
        <RightBtn
          onClick={() => {
            deleteParty(partyId);
          }}
        >
          파티 삭제
        </RightBtn>
      </FlexBox>
    );
  } else if (partyUser?.join === true) {
    return (
      <FlexBox>
        <LeftBtn
          onClick={() => {
            history.push(`/chat/${partyUser?.hostid}`);
          }}
        >
          호스트에게 문의
        </LeftBtn>
        <RightBtn
          onClick={() => {
            // {partyUser?.age === }
            dispatch(crewActions.sendCancelData(partyId));
          }}
        >
          신청 취소
        </RightBtn>
      </FlexBox>
    );
  } else {
    return (
      <FlexBox>
        <LeftBtn
          onClick={() => {
            history.push(history.push(`/chat/${partyUser?.hostid}`));
          }}
        >
          호스트에게 문의
        </LeftBtn>
        {props?.memberCnt === props?.capacity ? (
          <RightBtn>모집 마감</RightBtn>
        ) : (
          <RightBtn
            onClick={() => {
              dispatch(crewActions.sendJoinData(partyId));
            }}
          >
            파티 신청
          </RightBtn>
        )}
      </FlexBox>
    );
  }
};

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  border-top: 1px solid #f1f1f1;
`;

const LeftBtn = styled.button`
  width: 48%;
  height: 3.5em;
  border: 1px solid #ff6853;
  background: white;
  color: #ff6853;
  border-radius: 0.5em;
  font-size: 1em;
`;
const RightBtn = styled.button`
  width: 48%;
  height: 3.5em;
  border: none;
  background: #ff6853;
  color: white;
  border-radius: 0.5em;
  font-size: 1em;
`;

export default PartyDetailBottomNav;
