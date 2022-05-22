import React, { useEffect } from "react";
import Header from "../shared/Header";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { history } from "../redux/configStore";
import Avatar from "@mui/material/Avatar";
import BottomNav from "../shared/BottomNav";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as crewActions } from "../redux/modules/crew";
import { actionCreators as userActions } from "../redux/modules/user";
import { useState } from "react";
import _ from "lodash";
import { useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import NullData from "../shared/NullData";
import AllData from "../components/Home/AllData";

//이모티콘
import ic_location from "../static/images/icon/ic_location.png";
import ic_calendar from "../static/images/icon/ic_calendar.png";
import ic_time from "../static/images/icon/ic_time.png";
import ic_people from "../static/images/icon/ic_people.png";

const Joined = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(crewActions.getJoinedData());
    dispatch(userActions.userCheckDB());
  }, []);

  const joinedData = useSelector((state) => state?.crew?.joined?.results);
  const userInfo = useSelector((state) => state?.user?.check?.result);
  console.log(joinedData);

  if (joinedData?.length === 0) {
    return (
      <React.Fragment>
        <Header name={"참여 히스토리"} />
        <ListBox>
          <NullData title={"앗! 참여한 파티 내역이 없습니다"} />
        </ListBox>
        <BottomNav />
      </React.Fragment>
    );
  } else {
    return (
      <Box>
        <Header name={"참여 히스토리"} />
        <WrapBox>
          {joinedData?.length > 0 &&
            joinedData?.map((cur, idx) => (
              <AllData
                key={cur?.partyId}
                partyId={cur?.partyId}
                title={cur?.title}
                image={cur?.image}
                store={cur?.store}
                address={cur?.address}
                date={cur?.date}
                time={cur?.time}
                capacity={cur?.capacity}
                age={cur?.age}
                gender={cur?.gender}
                hostId={cur?.hostId}
                userInfo={userInfo}
              />
            ))}
        </WrapBox>
        <BottomNav />
      </Box>
    );
  }
};

const ListBox = styled.div`
  width: 100%;
  padding: 1.5em;
  padding-top: 20em;
  padding-bottom: 5em;
  overflow-y: auto;
  cursor: pointer;
`;

const WrapBox = styled.div`
  width: 100%;
  padding-top: 3.5em;
  padding-bottom: 5em;
`;

export default Joined;
