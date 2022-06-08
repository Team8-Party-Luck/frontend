//찜한 파티 목록 페이지
import React from "react";
import styled from "styled-components";

//리덕스
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as crewActions } from "../redux/modules/crew";
import { actionCreators as userActions } from "../redux/modules/user";

//컴포넌트
import Header from "../shared/Header";
import NullData from "../shared/NullData";
import AllData from "../components/Home/AllData";

const Scrap = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(crewActions.getScrapData());
    dispatch(userActions.userCheckDB());
  }, []);

  const scrapData = useSelector((state) => state?.crew?.scrap?.results);
  const userInfo = useSelector((state) => state?.user?.check?.result);
  // console.log(scrapData);

  if (scrapData?.length === 0) {
    return (
      <React.Fragment>
        <Header name={"찜한 파티"} />
        <NullBox>
          <NullData title={"앗! 찜한 파티가 없습니다"} />
        </NullBox>
      </React.Fragment>
    );
  } else {
    return (
      <ConBox>
        <Header name={"찜한 파티"} />
        <ListBox>
          {scrapData?.length > 0 &&
            scrapData?.map((cur, idx) => (
              <AllData {...cur} userInfo={userInfo} key={idx} />
            ))}
        </ListBox>
      </ConBox>
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
  height: calc(var(--vh, 1vh) * 100);
  padding-top: 3.5em;
  padding-bottom: 3em;
  overflow-y: auto;
`;

const ConBox = styled.div`
  width: 100%;
`;

export default Scrap;
