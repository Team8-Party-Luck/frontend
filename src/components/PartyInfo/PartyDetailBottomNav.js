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
import { actionCreators as chatActions } from "../../redux/modules/chat";
import { useState } from "react";
import styled from "styled-components";
import Toast from "../../shared/Toast";
import Popup from "../../shared/Popup";

const PartyDetailBottomNav = (props) => {
  const { userId, partyData } = props;
  const { partyId } = useParams();

  const dispatch = useDispatch();

  const [openRevise, setOpenRevise] = useState(false);
  const [openJoin, setOpenJoin] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openCancel, setOpenCancel] = useState(false);

  if (userId === partyData?.hostid) {
    return (
      <FlexBox>
        <LeftBtn onClick={() => setOpenRevise(true)}>수정</LeftBtn>
        {openRevise && (
          <Popup
            title={"파티를 수정하시겠습니까?"}
            close={() => setOpenRevise(false)}
            event={() => {
              history.push({
                pathname: "/revise",
                state: partyId,
              });
            }}
            confirm={"수정하기"}
            back={"뒤로가기"}
          />
        )}
        <RightBtn onClick={() => setOpenDelete(true)}>파티 삭제</RightBtn>
        {openDelete && (
          <Popup
            title={"파티를 삭제하시겠습니까?"}
            close={() => setOpenDelete(false)}
            event={() => {
              dispatch(crewActions.deleteSend(partyId));
            }}
            confirm={"삭제하기"}
            back={"뒤로가기"}
          />
        )}
      </FlexBox>
    );
  } else if (partyData?.join === true) {
    return (
      <FlexBox>
        <LeftBtn
          onClick={() => {
            dispatch(chatActions.getRoomIdDB(partyData?.hostid));
          }}
        >
          호스트에게 문의
        </LeftBtn>
        <RightBtn
          onClick={() => {
            setOpenCancel(true);
          }}
        >
          신청 취소
        </RightBtn>
        {openCancel && (
          <Popup
            title={"파티신청을 취소하시겠습니까?"}
            close={() => setOpenCancel(false)}
            event={() => {
              dispatch(crewActions.sendCancelData(partyId));
            }}
            confirm={"취소하기"}
            back={"뒤로가기"}
          />
        )}
      </FlexBox>
    );
  } else {
    return (
      <FlexBox>
        <LeftBtn
          onClick={() => {
            dispatch(chatActions.getRoomIdDB(partyData?.hostid));
          }}
        >
          호스트에게 문의
        </LeftBtn>
        {partyData?.memberCnt === partyData?.capacity ? (
          <RightBtn>모집 마감</RightBtn>
        ) : (
          <>
            <RightBtn
              onClick={() => {
                setOpenJoin(true);
              }}
            >
              파티 신청
            </RightBtn>
            {openJoin && (
              <Popup
                title={"파티를 신청하시겠습니까?"}
                close={() => setOpenJoin(false)}
                event={() => {
                  dispatch(crewActions.sendJoinData(partyId));
                }}
                confirm={"신청하기"}
                back={"뒤로가기"}
              />
            )}
          </>
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
  width: 100%;
  position: fixed;
  bottom: 0;
  background: white;
  justify-content: space-between;
  padding: 1em;
  border-top: 1px solid #f1f1f1;
`;

const LeftBtn = styled.button`
  width: 48%;
  height: 3em;
  border: 1px solid #ff6853;
  background: white;
  color: #ff6853;
  border-radius: 0.5em;
  font-size: 1em;
  cursor: pointer;
`;
const RightBtn = styled(LeftBtn)`
  border: none;
  background: #ff6853;
  color: white;
`;

export default PartyDetailBottomNav;
