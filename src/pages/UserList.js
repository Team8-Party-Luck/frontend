import React from "react";
import UserCard from "../components/UserList/UserCard";
import HeaderNav from "../shared/HeaderNav";

import { history } from "../redux/configStore";
import { useParams } from "react-router-dom";
import { actionCreators as crewActions } from "../redux/modules/crew";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const UserList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    dispatch(crewActions.getUserList(location.state));
  }, []);

  const userList = useSelector((state) => state?.crew.detailUser);
  console.log(userList);
  const answer = userList?.map((v) => <UserCard v={v} key={v.nickname}/>);

  return (
    <React.Fragment>
      <HeaderNav name="유저 리스트" />
      {answer}
    </React.Fragment>
  );
};

export default UserList;
