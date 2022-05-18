import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { history } from "../../redux/configStore";
import { useParams } from "react-router-dom";
import { actionCreators as crewActions } from "../../redux/modules/crew";
import { actionCreators as userActions } from "../../redux/modules/user";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Toast from "../../shared/Toast";

const PartyDetailBottomNav = (props) => {
  const { partyId } = useParams();

  const dispatch = useDispatch();

  const [ToastStatus, setToastStatus] = useState(false);
  const [ToastMsg, setToastMsg] = useState("");

  const partyUser = useSelector((state) => state?.crew?.info);
  console.log(partyUser);

  // React.useEffect(() => {
  //   if (ToastStatus) {
  //     setTimeout(() => {
  //       setToastStatus(false);
  //       setToastMsg("");
  //     }, 1000);
  //   }
  // }, [ToastStatus]);

  // //토스트 팝업 메시지 리스트
  // const msgList = {
  //   complete: "파티가 신청되었습니다",
  //   full: "모집이 마감되었습니다",
  //   cancel: "파티 신청을 취소하였습니다",
  //   update: "수정이 완료되었습니다",
  // };

  // //토스트 팝업 메시지 중복 동작 방지
  // const handleToast = (type) => {
  //   if (!ToastStatus) {
  //     setToastStatus(true);
  //     setToastMsg(msgList[type]);
  //   }
  // };

  const deleteParty = (partyId) => {
    dispatch(crewActions.deleteSend(partyId));
  };

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
            dispatch(crewActions.sendCancelData(partyId));
          }}
        >
          신청 취소
        </RightBtn>
        {ToastStatus && <Toast msg={ToastMsg} />}
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
        {partyUser?.memberCnt === partyUser?.capacity ? (
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
        {/* {partyUser?.age === "전체" && partyUser?.gender ==="모두" ?           <RightBtn
            onClick={() => {
              dispatch(crewActions.sendJoinData(partyId));
            }}
          >
            파티 신청
          </RightBtn> : partyUser?.age === "전체" && partyUser?.gender ===} */}
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
