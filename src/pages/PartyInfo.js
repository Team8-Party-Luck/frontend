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

  const userCheck = useSelector((state) => state?.user?.check?.result);

  const partyUser = useSelector((state) => state?.crew?.info);

  //상세정보
  const image = partyUser?.image;
  const title = partyUser?.title;
  const store = partyUser?.store;
  const address = partyUser?.address;
  const date = partyUser?.date;
  const time = partyUser?.time;
  const desc = partyUser?.desc;
  const age = partyUser?.age;
  const place_url = partyUser?.place_url;
  const gender = partyUser?.gender;
  const meeting = partyUser?.meeting;

  //참여한 유저 리스트
  const capacity = partyUser?.capacity;
  const memberCnt = partyUser?.memberCnt;
  const userimageurls = partyUser?.userimageurls;

  return (
    <React.Fragment>
      <PartyHeader partyId={partyId} partyUser={partyUser} />
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
      <PartyDetailUser
        memberCnt={memberCnt}
        capacity={capacity}
        userimageurls={userimageurls}
        partyId={partyId}
      />
      <PartyDetailDesc desc={desc} />
      <PartyDetailBottomNav userCheck={userCheck} />
    </React.Fragment>
  );
};

export default PartyInfo;
