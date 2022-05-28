import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
//리덕스
import { actionCreators as userActions } from "../../redux/modules/user";
//컴포넌트
import FoodList from "./FoodList";
//이미지
import DefaultImg from "../../static/images/profile/default.png";
import { Box, Grid } from "@mui/material";
//컬러시스템
import { color } from "../../shared/ColorSystem";

const UserInfo = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.getUserInfoDB());
  }, []);

  const user_info = useSelector((state) => state.user.user);
  // console.log(user_info);

  return (
    <ProfileBox>
      <InfoBox>
        <ProfileImgBox>
          <ProfileImg src={user_info?.image ? user_info?.image : DefaultImg} />
        </ProfileImgBox>

        <DetailBox>
          <NameText>{user_info?.nickname}</NameText>
          <DetailText>
            {user_info?.gender} · {user_info?.age} · {user_info?.city}{" "}
            {user_info?.region}
          </DetailText>
        </DetailBox>
      </InfoBox>
      <NonFixBox>{user_info?.intro}</NonFixBox>
      <FoodList name={"선호하는 음식 종류"} food={user_info?.food} />
    </ProfileBox>
  );
};

const ProfileBox = styled.div`
  width: 100%;
  border: 1px solid ${color.line};
  border-radius: 0.5em;
  margin: 1em auto;
  padding: 1em;
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${color.line};
  padding-bottom: 1em;
`;

const NameText = styled.p`
  font-size: 1em;
  font-weight: 600;
`;

const DetailText = styled.p`
  font-size: 0.7em;
  color: ${color.sub1};
`;

const NonFixBox = styled.div`
  width: 100%;
  font-size: 0.8em;
  margin-top: 1em;
  word-wrap: break-word;
  word-break: break-word;
`;

const DetailBox = styled.div`
  width: 100%;
  padding-top: 0.2em;
`;

const ProfileImg = styled.img`
  width: 2.5em;
  height: 2.5em;
  border-radius: 100%;
`;

const ProfileImgBox = styled.div`
  width: 2.5em;
  height: 2.5em;
  border-radius: 4em;
  margin-right: 0.5em;
`;

export default UserInfo;
