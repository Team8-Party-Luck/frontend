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

const Joined = () => {
  const dispatch = useDispatch();

  const token = sessionStorage.getItem("token");

  const ref = useRef();

  const [partyList, setPartyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(null);
  console.log(page);

  // 무한스크롤을 함수
  // Grid onScroll 이벤트에 넣어두어, Grid 스크롤 발생 시 실행됨
  const InfinityScroll = _.throttle((e) => {
    if (
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight <
      100
    ) {
      axios
        .get(`http://3.38.180.96:8080/api/parties/history/in/${page}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json;charset=UTF-8",
            accept: "application/json,",
          },
        })
        .then((res) => {
          setPartyList([...partyList, ...res.data.results]);
          setIsLoading(false);
          if (res.data.results.length < 10) {
            setHasNext(false);
          } else {
            setHasNext(true);
          }
          setPage(page + 1);
        });
    }
  }, 300);

  React.useEffect(() => {
    axios
      .get(`http://3.38.180.96:8080/api/parties/history/in/${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
        },
      })
      .then((res) => {
        console.log(res.data.results);
        setPartyList([...partyList, ...res.data.results]);
        setIsLoading(false);
        if (res.data.results.length < 10) {
          setHasNext(false);
        } else {
          setHasNext(true);
        }
        setPage(page + 1);
      });
  }, []);

  // useEffect(() => dispatch(crewActions.getScrapData()), []);

  // const scrapData = useSelector((state) => state?.crew?.scrap?.results);
  // console.log(scrapData);

  return (
    <Box>
      <Header name={"참여 히스토리"} />
      <ListBox ref={ref} onScroll={InfinityScroll}>
        {partyList?.map((cur, idx) => (
          <Box
            onClick={() => {
              history.push(`/partyInfo/${cur?.partyId}`);
            }}
            key={idx}
            sx={{ marginTop: "1em" }}
          >
            <Typography sx={{ fontWeight: "bold", marginBottom: 0.3 }}>
              {cur?.title}
            </Typography>
            <Box sx={{ display: "flex" }} key={cur?.partyId}>
              <Avatar
                variant={"rounded"}
                alt="The image"
                src={cur?.image[0]}
                style={{
                  width: 65,
                  height: 65,
                  borderRadius: "0.5em",
                }}
              />
              <Box sx={{ marginLeft: "0.5em" }}>
                <Typography style={{ fontSize: "0.9em", color: "gray" }}>
                  {cur?.store}
                </Typography>
                <Box sx={{ display: "flex", marginTop: 0.3 }}>
                  <img
                    src="image/home/ic_location.png"
                    style={{ width: 18, height: 18 }}
                    alt="위치"
                  />
                  <Typography sx={{ fontSize: 12 }}>
                    &nbsp;{cur?.address}&nbsp;&nbsp;
                  </Typography>

                  <img
                    src="image/home/ic_calendar.png"
                    style={{ width: 17, height: 17 }}
                    alt="달력"
                  />
                  <Typography sx={{ fontSize: 12 }}>
                    &nbsp;{cur?.date}&nbsp;&nbsp;
                  </Typography>
                  <img
                    src="image/home/ic_time.png"
                    style={{ width: 17, height: 17 }}
                    alt="시간"
                  />
                  <Typography sx={{ fontSize: 12 }}>
                    &nbsp;{cur?.time}&nbsp;&nbsp;
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", marginTop: 0.5 }}>
                  <img
                    src="image/home/ic_people.png"
                    style={{ width: 17, height: 17 }}
                    alt="시간"
                  />
                  <Typography sx={{ fontSize: 12 }}>
                    &nbsp;{cur?.capacity}명&nbsp; {cur?.age} {cur?.gender}모임
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
