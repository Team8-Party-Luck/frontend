import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { history } from "../../redux/configStore";
import PartyListUser from "../../pages/UserList";
import styled from "styled-components";
import DefaultImage from "../../static/images/profile/default.png";
import ArrowImg from "../../static/images/icon/arw_s@2x.png";

const PartyDetailUser = (props) => {
  const { partyId, partyData } = props;
  return (
    <WrapBox>
      <FlexBox>
        <UserText>참여자 리스트</UserText>
        <MemberText>
          {partyData?.memberCnt}/{partyData?.capacity}
        </MemberText>
      </FlexBox>
      <GridBox>
        {partyData?.userimageurls?.map((cur, idx) =>
          cur === null ? (
            <ImgBox src={DefaultImage} key={idx} />
          ) : (
            <ImgBox src={cur} key={idx} />
          )
        )}
      </GridBox>
      <SeeMore
        onClick={() => {
          history.push(`/userList/${partyData?.partyid}`);
        }}
      >
        더보기&nbsp;
        <img src={ArrowImg} style={{ width: "0.45em", height: "0.75em" }} />
      </SeeMore>
    </WrapBox>
  );
};

const WrapBox = styled.div`
  width: 100%;
  border-bottom: 0.7em solid #f1f1f1;
  margin: 0 auto;
  padding: 1.2em;
  position: relative;
`;
const FlexBox = styled.div`
  display: flex;
`;

const UserText = styled.p`
  font-size: 0.95em;
  margin-right: 0.5em;
`;

const MemberText = styled.p`
  font-size: 0.9em;
  color: #ff6853;
`;

const GridBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 0 auto;
  margin-top: 0.5em;
`;

const ImgBox = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 3em;
  margin: 0 auto;
`;

const SeeMore = styled.div`
  position: absolute;
  right: 1em;
  top: 1em;
  font-size: 0.9em;
  color: #909090;
`;

export default PartyDetailUser;
