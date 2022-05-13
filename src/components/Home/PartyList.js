import * as React from "react";
import PropTypes from "prop-types";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PartyCard from "./PartyCard";

import { Avatar, CardContent, Stack } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as crewActions } from "../../redux/modules/crew";
import { history } from "../../redux/configStore";
import { useState } from "react";
import _ from "lodash";
import { useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import RegionSelect from "./RegionSelect";

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
  const [city, setCity] = useState("서울");
  const [district, setDistrict] = useState("");

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
          centered
        >
          <Tab label="파티 탐색" {...a11yProps(0)} />
          <Tab label="참여할 파티" {...a11yProps(1)} />
          <Tab label="찜한 파티" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {/* <RegionSelect
        city={city}
        setCity={setCity}
        district={district}
        setDistrict={setDistrict}
      /> */}

      <TabPanel value={value} index={0}>
        <ListBox ref={ref} onScroll={InfinityScroll}>
          {/* <Box sx={{ height: "50vh" }} > */}
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
          {/* </Box> */}
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
  height: 35em;
  // padding-top: 1.5em;
  overflow-y: auto;
`;

export default PartyList;
