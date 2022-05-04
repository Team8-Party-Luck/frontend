import React from "react";
import PartyDetailBottomNav from "../components/PartyInfo/PartyDetailBottomNav";
import PartyDetailDesc from "../components/PartyInfo/PartyDetailDesc";
import PartyDetailInfo from "../components/PartyInfo/PartyDetailInfo";
import PartyDetailUser from "../components/PartyInfo/PartyDetailUser";
import PartyInfoSlide from "../components/PartyInfo/PartyInfoSlide";
import HeaderNav from "../shared/HeaderNav";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as crewActions } from "../redux/modules/crew";

const PartyInfo = () => {
  const { partyId } = useParams();

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(crewActions.getDetailInfo(partyId));
  }, []);

  const userCheck = useSelector((state) => state?.user?.user?.result);
  console.log(userCheck);

  const partyUser = useSelector((state) => state?.crew?.info);
  console.log(partyUser);

  console.log(userCheck?.userid)
  console.log(partyUser?.hostid);


  const title = partyUser?.title;
  const store = partyUser?.store;
  const capacity = partyUser?.capacity;
  const memberCnt = partyUser?.memberCnt;
  const location = partyUser?.location;
  const date = partyUser?.date;
  const time = partyUser?.time;
  const desc = partyUser?.desc;

  return (
    <React.Fragment>
      <HeaderNav name="파티상세보기" />
      {partyId}
      <PartyInfoSlide />
      <PartyDetailInfo
        title={title}
        store={store}
        capacity={capacity}
        location={location}
        date={date}
        time={time}
      />
      <PartyDetailUser memberCnt={memberCnt} capacity={capacity} />
      <PartyDetailDesc desc={desc} />
      <PartyDetailBottomNav />
    </React.Fragment>
  );
};

export default PartyInfo;
