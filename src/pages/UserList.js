import React, { useState } from "react";
import UserCard from "../components/UserList/UserCard";
import HeaderNav from "../shared/HeaderNav";
import Header from "../shared/Header";

import { history } from "../redux/configStore";
import { useParams } from "react-router-dom";
import { actionCreators as crewActions } from "../redux/modules/crew";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as chatActions } from "../redux/modules/chat";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import DefaultImg from "../static/images/profile/default.png";
import HostImg from "../static/images/icon/tag_host-1.png";
import chatImg from "../static/images/icon/btn_chat.png";

const UserList = () => {
  const dispatch = useDispatch();

  const { partyid } = useParams();
  const [openProfile, setOpenProfile] = useState(false);
  const [nickname, setNickname] = useState("");
  const [image, setImage] = useState("");
  const [sns, setSns] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [intro, setIntro] = useState("");
  const [food, setFood] = useState("");
  const [id, setId] = useState("");

  React.useEffect(() => {
    dispatch(crewActions.getUserList(partyid));
    dispatch(userActions.userCheckDB());
  }, []);

  const userList = useSelector((state) => state?.crew?.detailUser);
  console.log(userList);

  const userId = useSelector((state) => state?.user?.check?.result?.userid);
  // console.log(userId);

  console.log(food);

  return (
    <React.Fragment>
      <Header name="유저 리스트" />
      <ListBox>
        {userList?.result?.map((cur, idx) => {
          return (
            <List key={idx}>
              <InfoBox
                onClick={() => {
                  setOpenProfile(true);
                  setNickname(cur?.nickname);
                  setImage(cur?.imageUrl);
                  setSns(cur?.sns);
                  setGender(cur?.gender);
                  setAge(cur?.age);
                  setLocation(cur?.location);
                  setIntro(cur?.intro);
                  setFood(cur?.foods);
                  setId(cur?.userId);
                }}
              >
                <ImgBox src={cur?.imageUrl ? cur?.imageUrl : DefaultImg} />
                <div style={{ width: "100%" }}>
                  <NameText>{cur?.nickname}</NameText>
                  <DetailText>
                    {cur?.gender} · {cur?.age} · {cur?.location}
                  </DetailText>
                </div>
                {userId === cur?.userId ? null : (
                  <ChatBox
                    src={chatImg}
                    onClick={() => {
                      // history.push(`/chat/${cur?.userId}`);
                      dispatch(chatActions.getRoomIdDB(cur?.userId));
                    }}
                  />
                )}
                {userList?.hostId === cur?.userId ? (
                  <HostBox src={HostImg} />
                ) : null}
              </InfoBox>
              {openProfile && (
                <UserCard
                  image={image}
                  nickname={nickname}
                  sns={sns}
                  gender={gender}
                  age={age}
                  location={location}
                  intro={intro}
                  food={food}
                  id={id}
                  userId={userId}
                  close={() => setOpenProfile(false)}
                />
              )}
            </List>
          );
        })}
      </ListBox>
    </React.Fragment>
  );
};

const ListBox = styled.div`
  width: 100%;
  padding-top: 3.55em;
  cursor: pointer;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid #e3e3e3;
  padding: 1em;
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  position: relative;
`;

const ChatBox = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 2.5em;
  cursor: pointer;
`;

const HostBox = styled.img`
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  left: 3.5em;
  top: 7.1em;
  z-index: 1000;
`;

export default UserList;
