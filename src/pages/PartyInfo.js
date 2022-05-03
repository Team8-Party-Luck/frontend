import React from "react";
import PartyDetailBottomNav from "../components/PartyInfo/PartyDetailBottomNav";
import PartyDetailDesc from "../components/PartyInfo/PartyDetailDesc";
import PartyDetailInfo from "../components/PartyInfo/PartyDetailInfo";
import PartyDetailUser from "../components/PartyInfo/PartyDetailUser";
import PartyInfoSlide from "../components/PartyInfo/PartyInfoSlide";
import HeaderNav from "../shared/HeaderNav";

const PartyInfo = () => {
  return (
    <React.Fragment>
      <HeaderNav name="파티상세보기" />
      <PartyInfoSlide />
      <PartyDetailInfo />
      <PartyDetailUser />
      <PartyDetailDesc/>
      <PartyDetailBottomNav/>
    </React.Fragment>
  );
};

export default PartyInfo;
