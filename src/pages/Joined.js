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
import { useState } from "react";
import _ from "lodash";
import { useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import NullData from "../shared/NullData";

const Joined = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(crewActions.getJoinedData()), []);

  const joinedData = useSelector((state) => state?.crew?.joined?.results);
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
        <Header name={"찜한 파티"} />
        <ListBox>
          {joinedData?.length > 0 &&
            joinedData?.map((cur, idx) => (
              <Box
                onClick={() => {
                  history.push(`/partyInfo/${cur.partyId}`);
                }}
                key={idx}
                sx={{ marginTop: "1em" }}
              >
                <Typography sx={{ fontWeight: "bold", marginBottom: 0.3 }}>
                  {cur.title}
                </Typography>
                <Box sx={{ display: "flex" }} key={cur.partyId}>
                  <Avatar
                    variant={"rounded"}
                    alt="The image"
                    src={cur.image[0]}
                    style={{
                      width: 65,
                      height: 65,
                      borderRadius: "0.5em",
                    }}
                  />
                  <Box sx={{ marginLeft: "0.5em" }}>
                    <Typography style={{ fontSize: "0.9em", color: "gray" }}>
                      {cur.store}
                    </Typography>
                    <Box sx={{ display: "flex", marginTop: 0.3 }}>
                      <img
                        src="image/home/ic_location.png"
                        style={{ width: 18, height: 18 }}
                        alt="위치"
                      />
                      <Typography sx={{ fontSize: 12 }}>
                        &nbsp;{cur.address}&nbsp;&nbsp;
                      </Typography>

                      <img
                        src="image/home/ic_calendar.png"
                        style={{ width: 17, height: 17 }}
                        alt="달력"
                      />
                      <Typography sx={{ fontSize: 12 }}>
                        &nbsp;{cur.date}&nbsp;&nbsp;
                      </Typography>
                      <img
                        src="image/home/ic_time.png"
                        style={{ width: 17, height: 17 }}
                        alt="시간"
                      />
                      <Typography sx={{ fontSize: 12 }}>
                        &nbsp;{cur.time}&nbsp;&nbsp;
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", marginTop: 0.5 }}>
                      <img
                        src="image/home/ic_people.png"
                        style={{ width: 17, height: 17 }}
                        alt="시간"
                      />
                      <Typography sx={{ fontSize: 12 }}>
                        &nbsp;{cur.capacity}명&nbsp; {cur.age} {cur.gender}모임
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
        </ListBox>
        <BottomNav />
      </Box>
    );
  }
};

const ListBox = styled.div`
  width: 100%;
  height: 60em;
  padding: 1.5em;
  padding-top: 3em;
  padding-bottom: 5em;
  overflow-y: auto;
`;

export default Joined;
