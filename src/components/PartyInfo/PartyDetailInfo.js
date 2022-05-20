import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

const PartyDetailInfo = (props) => {
  const { partyData } = props;
  return (
    <React.Fragment>
      <WrapBox>
        <Title>{partyData?.title}</Title>
        <FlexBox>
          <ColorText>{partyData?.store}</ColorText>
          <GrayBar>ㅣ</GrayBar>
          <LocationText>{partyData?.address}</LocationText>
        </FlexBox>
        <DetailInfoBtn onClick={() => {window.location.href=partyData?.place_url}}>
          식당 상세 정보 확인하기
        </DetailInfoBtn>
      </WrapBox>
      <WrapBox>
        <FlexBox>
          <div style={{ marginRight: "1em" }}>
            <LocDetailText>만나는 장소</LocDetailText>
            <LocDetailText style={{ margin: "1em 0" }}>
              날짜, 시간
            </LocDetailText>
            <LocDetailText>모집 인원</LocDetailText>
          </div>
          <div>
            <LocDetailText2>{partyData?.meeting}</LocDetailText2>
            <LocDetailText2 style={{ margin: "1em 0" }}>
              {partyData?.date} {partyData?.time}
            </LocDetailText2>
            <LocDetailText2>
              {partyData?.capacity}명 <GrayBar>ㅣ</GrayBar> {partyData?.age}{" "}
              {partyData?.gender}
            </LocDetailText2>
          </div>
        </FlexBox>
      </WrapBox>
    </React.Fragment>
  );
};

const WrapBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin: 0 auto;
  padding: 1.2em;
`;

const FlexBox = styled.div`
  display: flex;
`;

const Title = styled.p`
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 0.5em;
`;

const ColorText = styled.p`
  font-size: 0.9em;
  color: #ff6853;
`;

const LocationText = styled.p`
  font-size: 0.9em;
  color: gray;
`;

const LocDetailText = styled.p`
  color: gray;
  font-weight: 650;
  font-size: 0.8em;
`;

const LocDetailText2 = styled.p`
  font-size: 0.8em;
`;

const DetailInfoBtn = styled.button`
  width: 100%;
  height: 3.5em;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  background: white;
  font-size: 0.9em;
  margin-top: 0.5em;
`;

const GrayBar = styled.span`
  color: #ccc;
`;

export default PartyDetailInfo;
