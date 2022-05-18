import React from "react";
import styled from "styled-components";
import DefaultImg from "../../static/images/profile/default.png";
import { Box, Grid } from "@mui/material";
import FoodList from "./FoodList";
import { actionCreators as userActions } from "../../redux/modules/user";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.getUserInfoDB());
  }, []);

  const user_info = useSelector((state) => state.user.user);
  console.log(user_info);

  return (
    <ProfileBox>
      <InfoBox>
        <ImgBox src={user_info?.image ? user_info?.image : DefaultImg} />
        <Box sx={{ width: "100%", paddingTop: 0.4 }}>
          <NameText>{user_info?.nickname}</NameText>
          <DetailText>
            {user_info?.gender} · {user_info?.age} · {user_info?.city}{" "}
            {user_info?.region}
          </DetailText>
        </Box>
      </InfoBox>
      <NonFixBox>{user_info?.intro}</NonFixBox>
      <FoodList user_info={user_info} />
    </ProfileBox>
  );
};

const ProfileBox = styled.div`
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 0.5em;
  margin: 1em auto;
  padding: 1em;
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #dfdfdf;
  padding-bottom: 1em;
`;

const NameText = styled.p`
  font-size: 1em;
  font-weight: 600;
`;

const DetailText = styled.p`
  font-size: 0.7em;
  color: gray;
`;

const NonFixBox = styled.div`
  width: 100%;
  font-size: 0.8em;
  margin-top: 1em;
  word-wrap: break-word;
  word-break: break-word;
`;

const ImgBox = styled.img`
  width: 2.5em;
  height: 2.5em;
  border-radius: 2.5em;
  margin-right: 0.5em;
`;

export default UserInfo;
