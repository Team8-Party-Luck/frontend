import React from "react";
import UserCard from "../components/UserList/UserCard";
import HeaderNav from "../shared/HeaderNav";
import Header from "../shared/Header";

import { history } from "../redux/configStore";
import { useParams } from "react-router-dom";
import { actionCreators as crewActions } from "../redux/modules/crew";
import { actionCreators as userActions } from "../redux/modules/user";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import DefaultImg from "../static/images/profile/default.png";
import HostImg from "../static/images/icon/tag_host-1.png";
import chatImg from "../static/images/icon/btn_chat.png";

const UserList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    dispatch(crewActions.getUserList(location.state));
    dispatch(userActions.userCheckDB());
  }, []);

  const userList = useSelector((state) => state?.crew.detailUser);
  console.log(userList);

  const userId = useSelector((state) => state?.user?.user?.result?.userid);
  console.log(userId);

  return (
    <React.Fragment>
      <Header name="유저 리스트" />

      <ListBox>
        {userList?.map((cur, idx) => {
          return (
            <List key={idx}>
              <InfoBox>
                <ImgBox src={cur?.image ? cur?.image : DefaultImg} />
                <div style={{ width: "100%", paddingTop: 10 }}>
                  <NameText>{cur?.nickname}</NameText>
                  <DetailText>
                    {cur?.gender} · {cur?.age} · {cur?.location}
                  </DetailText>
                </div>
              </InfoBox>
              <ChatBox src={chatImg} />
            </List>
          );
        })}
      </ListBox>
    </React.Fragment>
  );
};

const ListBox = styled.div`
  width: 100%;
  padding-top: 4em;
  positon: relative;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #e3e3e3;
  padding: 1em;
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
`;

const NameText = styled.p`
  font-size: 1em;
  font-weight: 600;
`;

const DetailText = styled.p`
  font-size: 0.8em;
  color: gray;
  margin-top: 0.5em;
`;

const ImgBox = styled.img`
  width: 4em;
  height: 4em;
  border-radius: 2.5em;
  margin-right: 0.5em;
`;

const ChatBox = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 2.5em;
  position: absolute;
  right: 1.2em;
  top: 5.5em;
`;

export default UserList;
