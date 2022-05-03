import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../components/User/UserInfo";
import UserParty from "../components/User/UserParty";
import BottomNav from "../shared/BottomNav";
import { actionCreators as userActions } from "../redux/modules/user";

const Profile = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.getUserInfoDB());
  }, []);

  const user_info = useSelector((state) => state?.user?.user);

  return (
    <React.Fragment>
      <UserInfo user_info={user_info} />
      <UserParty />
      <BottomNav />
    </React.Fragment>
  );
};

export default Profile;
