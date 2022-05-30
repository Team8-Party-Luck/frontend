import { Box, Typography, Avatar } from "@mui/material";
import React from "react";
import { history } from "../../redux/configStore";
import styled from "styled-components";
import LocationImg from "../../static/images/icon/ic_location.png";
import CalenderImg from "../../static/images/icon/ic_calendar.png";
import DateImg from "../../static/images/icon/ic_time.png";
import PersonImg from "../../static/images/icon/ic_people.png";
import HostImage from "../../static/images/icon/tag_host.png";
import { color } from "../../shared/ColorSystem";

const AllData = (props) => {
  const {
    partyId,
    title,
    image,
    store,
    address,
    date,
    time,
    capacity,
    age,
    gender,
    hostId,
    userInfo,
    memberCnt,
  } = props;
  console.log(props);
  const splitDate = date.split("-");
  const newDate = splitDate.join(".");
  const forDay = splitDate.join("");

  //요일 구하는 함수
  function getDateStr(dateStr) {
    let yyyyMMdd = String(dateStr);
    let sYear = yyyyMMdd.substring(0, 4);
    let sMonth = yyyyMMdd.substring(4, 6);
    let sDate = yyyyMMdd.substring(6, 8);

    let date = new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));
    let week = ["일", "월", "화", "수", "목", "금", "토"];
    return week[date.getDay()];
  }
  const day = getDateStr(`2022${forDay}`);

  return (
    <WrapBox
      onClick={() => {
        history.push(`/partyInfo/${partyId}`);
      }}
      key={partyId}
    >
      <TitleText>{title}</TitleText>
      <FlexBox>
        <ImgBox image={image[0]} />
        <Box sx={{ marginLeft: "0.5em" }}>
          <StoreText>{store}</StoreText>
          <CenterBox>
            <IconBox src={LocationImg} alt="위치" />
            <DetailText>&nbsp;{address}</DetailText>
            <GrayBar>ㅣ</GrayBar>
            <IconBox src={CalenderImg} alt="달력" />
            <DetailText>
              &nbsp;{newDate}({day})
            </DetailText>
            <GrayBar>ㅣ</GrayBar>
            <IconBox src={DateImg} alt="시간" />
            <DetailText>&nbsp;{time}</DetailText>
          </CenterBox>
          <FlexBox
            style={{
              marginTop: 0.5,
              alignItems: "center",
            }}
          >
            <IconBox src={PersonImg} alt="시간" />
            <DetailText>
              &nbsp;<MemberCntText>{memberCnt}</MemberCntText>/{capacity}명{" "}
              <GrayBar>ㅣ</GrayBar> {age} {gender}
              모임
            </DetailText>
          </FlexBox>
        </Box>
      </FlexBox>
      {hostId !== undefined && hostId === userInfo?.userid ? (
        <HostImg src={HostImage} />
      ) : null}
    </WrapBox>
  );
};

const WrapBox = styled.div`
  width: 100%;
  margin-top: 1em;
  position: relative;
  padding-left: 1rem;
  cursor: pointer;
`;

const TitleText = styled.p`
  font-weight: bold;
  margin-bottom: 0.15em;
`;

const StoreText = styled.p`
  font-size: 0.9em;
  color: gray;
`;

const DetailText = styled.p`
  font-size: 0.8em;
`;

const FlexBox = styled.div`
  display: flex;
`;

const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.1em;
`;

const ImgBox = styled.div`
  width: 4em;
  height: 4em;
  border-radius: 5px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const IconBox = styled.img`
  width: 0.9em;
  height: 0.9em;
`;

const HostImg = styled.img`
  position: absolute;
  right: 1em;
  bottom: 0.2em;
  width: 3.9em;
  height: 1.35em;
`;

const GrayBar = styled.span`
  color: #ccc;
  font-size: 0.8em;
`;

const MemberCntText = styled.span`
  color: ${color.primary};
`;

export default AllData;
