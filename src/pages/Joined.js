import React from "react";
import Header from "../shared/Header";
import BottomNav from "../shared/BottomNav";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as crewActions } from "../redux/modules/crew";
import { actionCreators as userActions } from "../redux/modules/user";
import styled from "styled-components";
import NullData from "../shared/NullData";
import AllData from "../components/Home/AllData";

const Joined = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(crewActions.getJoinedData());
    dispatch(userActions.userCheckDB());
  }, []);

  const joinedData = useSelector((state) => state?.crew?.joined?.results);
  const userInfo = useSelector((state) => state?.user?.check?.result);
  console.log(joinedData);

  if (joinedData?.length === 0) {
    return (
      <React.Fragment>
        <Header name={"참여 히스토리"} />
        <NullBox>
          <NullData title={"앗! 참여한 파티 내역이 없습니다"} />
        </NullBox>
        <BottomNav />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Header name={"참여 히스토리"} />
        <ListBox>
          {joinedData?.length > 0 &&
            joinedData?.map((cur, idx) => (
              <AllData {...cur} userInfo={userInfo} key={idx} />
            ))}
        </ListBox>
        <BottomNav />
      </React.Fragment>
    );
  }
};

const NullBox = styled.div`
  width: 100%;
  padding: 1.5em;
  padding-top: 20em;
  padding-bottom: 5em;
`;

const ListBox = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 3.5em;
  padding-bottom: 3em;
  overflow-y: auto;
`;

const WrapBox = styled.div`
  width: 100%;
  padding-top: 3.5em;
  padding-bottom: 5em;
`;

export default Joined;
