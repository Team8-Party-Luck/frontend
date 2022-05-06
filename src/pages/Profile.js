import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../components/Profile/UserInfo";
import FoodList from "../components/Profile/FoodList";
import Menu from "../components/Profile/Menu";
import user, { actionCreators as userActions } from "../redux/modules/user";
import { Box, Button, Grid } from "@mui/material";
import BottomNav from "../shared/BottomNav";
import Header from "../shared/Header";

const Profile = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.getUserInfoDB());
  }, []);

  const user_info = useSelector((state) => state?.user?.user);

  return (
    <Box>
      <Header />
      <UserInfo />
      <FoodList user_info={user_info} />
      <Menu />
      <BottomNav />
    </Box>
  );
};

export default Profile;
