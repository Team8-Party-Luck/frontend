import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../components/Profile/UserInfo";
import FoodList from "../components/Profile/FoodList";
import Menu from "../components/Profile/Menu";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as crewActions } from "../redux/modules/crew";
import { Box, Button, Grid } from "@mui/material";
import BottomNav from "../shared/BottomNav";
import Header from "../shared/Header";
import { history } from "../redux/configStore";
import styled from "styled-components";

const Profile = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.getUserInfoDB());
    dispatch(crewActions.getJoinedData());
    dispatch(crewActions.getScrapData());
  }, []);

  const joinedData = useSelector((state) => state?.crew?.joined?.results);
  console.log(joinedData);

  const scrapData = useSelector((state) => state?.crew?.scrap?.results);
  console.log(scrapData);

  
  const user_info = useSelector((state) => state?.user?.user);
  console.log(user_info);

  return (
    <React.Fragment>
      <WrapBox>
        <UserInfo user_info={user_info} />
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
  height: 2.3em;
  background: #5b5b5b;
  color: white;
  border-radius: 0.5em;
  border: none;
`;

const Line = styled.div`
  width: 100%;
  height: 0.5em;
  background: #dfdfdf;
`;

export default Profile;
