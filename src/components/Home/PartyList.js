import * as React from "react";
import PropTypes from "prop-types";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PartyCard from "./PartyCard";
import PartySpread from "./PartySpread";
import { useInView } from "react-intersection-observer";
import { Avatar, CardContent, Stack } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as crewActions } from "../../redux/modules/crew";
import { history } from "../../redux/configStore";
import { useState } from "react";
import _ from "lodash";
import { useCallback } from "react";
import { useRef } from "react";
import axios from "axios";
import styled from "styled-components";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingLeft: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PartyList = (props) => {
  const dispatch = useDispatch();

  const ref = useRef();

  const [partyList, setPartyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(null);

  // 무한스크롤을 함수
  // Grid onScroll 이벤트에 넣어두어, Grid 스크롤 발생 시 실행됨
  const InfinityScroll = _.throttle((e) => {
    if (
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight <
      100
    ) {
      axios.get(`http://3.38.180.96/api/parties/raw/${page}`).then((res) => {
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
    axios.get(`http://3.38.180.96/api/parties/raw/${page}`).then((res) => {
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

  // const crewList = useSelector((state) => state?.crew?.crew);
  // console.log(crewList);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="파티 탐색" {...a11yProps(0)} />
          <Tab label="참여예정 파티" {...a11yProps(1)} />
          <Tab label="마감임박 파티" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <ListBox ref={ref} onScroll={InfinityScroll}>
          {partyList?.map((cur, idx) => {
            return (
              <Box
                sx={{ display: "flex", flexDirection: "row" }}
                key={cur?.partyId}
              >
                <Avatar
                  variant={"rounded"}
                  alt="The image"
                  src={"cur?.image"}
                  style={{
                    width: 90,
                    height: 90,
                  }}
                  onClick={() => {
                    history.push(`/partyInfo/${cur?.partyId}`);
                  }}
                />
                <CardContent sx={{ flex: " 1 auto", p: 0, ml: 1, mb: 2 }}>
                  <Stack spacing={0.8}>
                    <Typography component="div" variant="h6">
                      {cur?.title}
                    </Typography>

                    <Typography style={{ fontSize: "0.8rem" }}>
                      {cur?.store} &nbsp; {cur?.capacity}
                    </Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>
                      {cur?.address}
                      {cur?.date}
                      {cur?.time}
                    </Typography>
                  </Stack>
                </CardContent>
              </Box>
            );
          })}
        </ListBox>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
      </TabPanel>
    </Box>
  );
};

const ListBox = styled.div`
  width: 100%;
  height: 30em;
  padding-top: 1.5em;

  overflow-y: auto;
`;

export default PartyList;
