import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

//리덕스
import { actionCreators as crewActions } from "../redux/modules/crew";
import { history } from "../redux/configStore";

//컴포넌트
import UserInfo from "../components/Profile/UserInfo";
import Menu from "../components/Profile/Menu";
import BottomNav from "../shared/BottomNav";

//컬러시스템
import { color } from "../shared/ColorSystem";

const Profile = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(crewActions.getJoinedData());
    dispatch(crewActions.getScrapData());
  }, []);

  const joinedData = useSelector((state) => state?.crew?.joined?.results);
  console.log(joinedData);

  const scrapData = useSelector((state) => state?.crew?.scrap?.results);
  console.log(scrapData);

  return (
    <React.Fragment>
      <WrapBox>
        <UserInfo />
        <EditButton
          onClick={() => {
            history.push("/edit");
          }}
        >
          프로필 수정
        </EditButton>
      </WrapBox>
      <Line />
      <Menu joinedData={joinedData} scrapData={scrapData} />
      <BottomNav />
    </React.Fragment>
  );
};

const WrapBox = styled.div`
  width: 100%;
  padding: 1.2em;
`;

const EditButton = styled.button`
  width: 100%;
  height: 3em;
  background: ${color.primary};
  color: white;
  border-radius: 0.5em;
  border: none;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  height: 0.5em;
  background: ${color.divider};
`;

export default Profile;
