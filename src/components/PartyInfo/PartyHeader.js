import React from "react";
import { history } from "../../redux/configStore";
import { useDispatch } from "react-redux";
import { actionCreators as crewActions } from "../../redux/modules/crew";
import ScrapIcon from "../../static/images/icon/ic_heart_inactive.png";
import ScrapActiveIcon from "../../static/images/icon/ic_heart.png";
import BackIcon from "../../static/images/icon/back.png";
import styled from "styled-components";

const PartyHeader = (props) => {
  const { partyData } = props;
  console.log(partyData);
  const dispatch = useDispatch();

  const sendScrap = () => {
    dispatch(crewActions.sendScrapData(props?.partyId));
  };
  return (
    <WrapBox>
      <BackBox
        onClick={() => {
          history.goBack();
        }}
        style={{ position: "absolute" }}
      >
        <img src={BackIcon} alt="뒤로가기" style={{ width: 12, height: 22 }} />
      </BackBox>
      <HeaderText>파티정보</HeaderText>
      {partyData?.sub === false ? (
        <ScrapBox
          src={ScrapIcon}
          alt="빈하트"
          onClick={() => {
            sendScrap();
          }}
        />
      ) : (
        <ScrapBox
          src={ScrapActiveIcon}
          alt="하트"
          onClick={() => {
            sendScrap();
          }}
        />
      )}
    </WrapBox>
  );
};

const WrapBox = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  border-bottom: 1px solid #dfdfdf;
  position: fixed;
  background: white;
  padding-top: 1.1em;
  z-index: 1000;
`;

const BackBox = styled.div`
  position: absolute;
`;

const ScrapBox = styled.img`
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  right: 1em;
`;

const HeaderText = styled.p`
  font-weight: bold;
  font-size: 1.2em;
  margin: 0 auto;
  color: black;
`;

export default PartyHeader;
