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
import AllData from "./AllData";

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

  React.useEffect(() => {
    dispatch(crewActions.getWillData());
    dispatch(crewActions.getScrapData());
  }, []);

  const willData = useSelector((state) => state?.crew?.will);
  const scrapData = useSelector((state) => state?.crew?.scrap?.results);

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
          {partyList?.map((cur, idx) => (
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
            />
          ))}
        </ListBox>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {willData?.map((cur, idx) => (
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
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {scrapData?.map((cur, idx) => (
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
          />
        ))}
      </TabPanel>
    </Box>
  );
};

const ListBox = styled.div`
  width: 100%;
  height: 30em;
  // padding-top: 1.5em;
  overflow-y: auto;
`;

export default PartyList;
