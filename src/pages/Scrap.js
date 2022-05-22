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

const Scrap = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(crewActions.getScrapData());
    dispatch(userActions.userCheckDB());
  }, []);

  const scrapData = useSelector((state) => state?.crew?.scrap?.results);
  const userInfo = useSelector((state) => state?.user?.check?.result);
  console.log(scrapData);

  if (scrapData?.length === 0) {
    return (
      <React.Fragment>
        <Header name={"찜한 파티"} />
        <ListBox>
          <NullData title={"앗! 찜한 파티가 없습니다"} />
        </ListBox>
        <BottomNav />
      </React.Fragment>
    );
  } else {
    return (
      <ConBox>
        <Header name={"찜한 파티"} />
        <WrapBox>
          {scrapData?.length > 0 &&
            scrapData?.map((cur, idx) => (
              <AllData {...cur} userInfo={userInfo} key={idx} />
            ))}
        </WrapBox>
        <BottomNav />
      </ConBox>
    );
  }
};

const ListBox = styled.div`
  width: 100%;
  padding: 1.5em;
  padding-top: 20em;
  padding-bottom: 5em;
`;

const WrapBox = styled.div`
  width: 100%;
  padding-top: 3.5em;
  padding-bottom: 5em;
`;

const ConBox = styled.div`
  width: 100%;
`;

export default Scrap;
