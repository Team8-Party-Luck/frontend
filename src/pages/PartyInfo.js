import React from "react";
import PartyDetailBottomNav from "../components/PartyInfo/PartyDetailBottomNav";
import PartyDetailDesc from "../components/PartyInfo/PartyDetailDesc";
import PartyDetailInfo from "../components/PartyInfo/PartyDetailInfo";
import PartyDetailUser from "../components/PartyInfo/PartyDetailUser";
import PartyInfoSlide from "../components/PartyInfo/PartyInfoSlide";
import PartyHeader from "../components/PartyInfo/PartyHeader";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as crewActions } from "../redux/modules/crew";
import { actionCreators as userActions } from "../redux/modules/user";

const PartyInfo = () => {
  const { partyId } = useParams();

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(userActions.getUserInfoDB());
    dispatch(crewActions.getDetailInfo(partyId));
    dispatch(userActions.userCheckDB());
  }, []);

  const userId = useSelector((state) => state?.user?.check?.result?.userid);
  const partyData = useSelector((state) => state?.crew?.info);
  const userSettingData = useSelector((state) => state?.user?.user);

  console.log(userId);
  console.log(partyData);
  console.log(userSettingData);

  return (
    <React.Fragment>
      <PartyHeader partyData={partyData} />
      <PartyInfoSlide partyData={partyData} />
      <PartyDetailInfo partyData={partyData} />
      <PartyDetailUser partyId={partyId} partyData={partyData} />
      <PartyDetailDesc partyData={partyData} />
      <PartyDetailBottomNav userId={userId} partyData={partyData} />
    </React.Fragment>
  );
};

export default PartyInfo;
