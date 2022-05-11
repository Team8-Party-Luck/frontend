import React from "react";
import PartyDetailBottomNav from "../components/PartyInfo/PartyDetailBottomNav";
import PartyDetailDesc from "../components/PartyInfo/PartyDetailDesc";
import PartyDetailInfo from "../components/PartyInfo/PartyDetailInfo";
import PartyDetailUser from "../components/PartyInfo/PartyDetailUser";
import PartyInfoSlide from "../components/PartyInfo/PartyInfoSlide";
import HeaderNav from "../shared/HeaderNav";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as crewActions } from "../redux/modules/crew";



const PartyInfo = () => {
  
  const { partyId } = useParams();

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(crewActions.getDetailInfo(partyId));
  }, []);

  const userCheck = useSelector((state) => state?.user?.user?.result);
  const partyUser = useSelector((state) => state?.crew?.info);

  const image = partyUser?.image;
  const title = partyUser?.title;
  const store = partyUser?.store;
  const address = partyUser?.address;
  const capacity = partyUser?.capacity;
  const memberCnt = partyUser?.memberCnt;
  const date = partyUser?.date;
  const time = partyUser?.time;
  const desc = partyUser?.desc;
  const age = partyUser?.age;
  const place_url = partyUser?.place_url;
  const gender = partyUser?.gender;
  const meeting = partyUser?.meeting;


  return (
    <React.Fragment>
      <HeaderNav name="파티상세보기" partyId={partyId} partyUser={partyUser} />
      <PartyInfoSlide image={image} />
      <PartyDetailInfo
        title={title}
        store={store}
        address={address}
        capacity={capacity}
        date={date}
        time={time}
        place_url={place_url}
        gender={gender}
        meeting={meeting}
        age={age}
      />
      <PartyDetailUser memberCnt={memberCnt} capacity={capacity}/>
      <PartyDetailDesc desc={desc}/>
      <PartyDetailBottomNav />
    </React.Fragment>
  );
};

export default PartyInfo;

// gender: "남자"
// host: "qwer"
// hostid: 2
// join: true
// meeting: "우리집"
// sub: true
