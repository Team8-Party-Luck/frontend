import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ConfirmLogo from "../static/images/logo/심볼.png";
import FailLogo from "../static/images/logo/Frame 220@2x.png";
import { history } from "../redux/configStore";

const ConfirmPage = () => {
  const joinData = useSelector((state) => state?.crew?.info);

  if (joinData === "") {
    return (
      <Wrapbox>
        <img
          src={FailLogo}
          alt="컨펌로고"
          style={{ width: "60%", margin: "0 auto" }}
        />
        <TitleText>앗! 파티신청이 불가합니다</TitleText>
        <GrayText>해당 파티의 모집 인원 정보를 확인해주세요!</GrayText>
        <BackButton
          onClick={() => {
            history.push(`/home`);
          }}
        >
          홈으로 돌아가기
        </BackButton>
      </Wrapbox>
    );
  } else {
    return (
      <Wrapbox>
        <img
          src={ConfirmLogo}
          alt="컨펌로고"
          style={{ width: "50%", margin: "0 auto" }}
        />
        <TitleText>파티신청이 완료되었습니다</TitleText>
        <GrayText>
          일정에 적힌 약속 장소에 참석해주세요 <br /> 모임 하루 전 알림을
          보내드리겠습니다!
        </GrayText>
        <ConfirmBox>
          <PartyInfoLeftBox>
            <PartyInfoLeftText>만나는 장소</PartyInfoLeftText>
            <PartyInfoLeftText>날짜, 시간</PartyInfoLeftText>
          </PartyInfoLeftBox>
          <PartyInfoRightBox>
            <p>{joinData?.store}</p>
            <p>
              {joinData?.date}, {joinData?.time}
            </p>
          </PartyInfoRightBox>
        </ConfirmBox>
        <BackButton
          onClick={() => {
            history.push(`/partyInfo/${joinData?.partyid}`);
          }}
        >
          확인
        </BackButton>
      </Wrapbox>
    );
  }
};

const Wrapbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  padding-top: 12em;
`;

const TitleText = styled.p`
  font-size: 1.5em;
  margin: 0 auto;
  text-align: center;
  margin-top: 1em;
`;
const GrayText = styled.p`
  color: gray;
  text-align: center;
  margin-top: 1em;
`;

const ConfirmBox = styled.div`
  width: 100%;
  height: 6em;
  background: #eee;
  border-radius: 0.5em;
  margin-top: 2em;
  display: flex;
  padding: 1.2em 2.5em;
`;

const PartyInfoLeftBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PartyInfoRightBox = styled(PartyInfoLeftBox)`
  width: 60%;
`;

const PartyInfoLeftText = styled.p`
  color: #ff6853;
  font-size: 1em;
  font-weight: 600;
`;

const BackButton = styled.button`
  position: fixed;
  left: 4%;
  right: 4%;
  bottom: 3em;
  width: 92%;
  height: 3em;
  background: #ff6853;
  border: none;
  color: white;
  font-size: 1.1em;
  border-radius: 0.5em;
`;

export default ConfirmPage;
