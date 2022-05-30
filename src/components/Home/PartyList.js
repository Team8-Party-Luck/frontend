import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import axios from "axios";
import styled from "styled-components";

//mui
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//file
import { actionCreators as crewActions } from "../../redux/modules/crew";
import { actionCreators as userActions } from "../../redux/modules/user";
import AllData from "./AllData";
import RegionSelect from "./RegionSelect";
import NullData from "../../shared/NullData";
import { crewApi } from "../../shared/api";

//img
import locationImg from "../../static/images/logo/img_search.png";

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
        <Box>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const PartyList = (props) => {
  const dispatch = useDispatch();
  const ref = useRef();

  const [partyList, setPartyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(null);
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  React.useEffect(() => {
    crewApi.getAllList(page).then((res) => {
      // console.log(res.data.results);
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
    dispatch(userActions.userCheckDB());
  }, []);

  const willData = useSelector((state) => state?.crew?.will);
  const scrapData = useSelector((state) => state?.crew?.scrap?.results);
  const userInfo = useSelector((state) => state?.user?.check?.result);
  // console.log(userInfo);

  //지역필터
  const regionData = useSelector((state) => state?.crew?.region);
  const cityData = useSelector((state) => state?.crew?.city);

  // console.log(regionData);
  // 무한스크롤을 함수
  // Grid onScroll 이벤트에 넣어두어, Grid 스크롤 발생 시 실행됨
  const InfinityScroll = _.debounce((e) => {
    if (
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight <
      10
    ) {
      crewApi.getAllList(page).then((res) => {
        // console.log(res.data);

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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF6853",
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="전체 파티" {...a11yProps(0)} />
            <Tab label="파티 탐색" {...a11yProps(1)} />
            <Tab label="참여할 파티" {...a11yProps(2)} />
            <Tab label="찜한 파티" {...a11yProps(3)} />
          </Tabs>
        </Box>
      </ThemeProvider>

      <TabPanel value={value} index={0}>
        <ListBox ref={ref} onScroll={InfinityScroll}>
          {partyList?.map((cur, idx) => (
            <AllData {...cur} userInfo={userInfo} key={idx} />
          ))}
        </ListBox>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ThemeProvider theme={theme}>
          <RegionSelect
            city={city}
            setCity={setCity}
            region={region}
            setRegion={setRegion}
          />
        </ThemeProvider>
        {cityData === undefined ? (
          <LocBox>
            <LocImg src={locationImg} />
            <LocText>
              지역을 선택하여 <br /> 가까운 위치의 파티를 검색해 보세요!
            </LocText>
          </LocBox>
        ) : cityData?.length === 0 ? (
          <Box sx={{ marginTop: "8em" }}>
            <NullData title={"앗! 파티검색 결과가 없습니다"} />
          </Box>
        ) : regionData?.length === 0 && cityData?.length === 0 ? (
          <Box sx={{ marginTop: "8em" }}>
            <NullData title={"앗! 파티검색 결과가 없습니다"} />
          </Box>
        ) : regionData?.length >= 1 && cityData?.length >= 1 ? (
          <ListBox>
            {regionData?.map((cur, idx) => (
              <AllData {...cur} userInfo={userInfo} key={idx} />
            ))}
          </ListBox>
        ) : region?.length === 0 && cityData?.length >= 1 ? (
          <ListBox>
            {cityData?.map((cur, idx) => (
              <AllData {...cur} userInfo={userInfo} key={idx} />
            ))}
          </ListBox>
        ) : (
          <ListBox>
            {regionData?.map((cur, idx) => (
              <AllData {...cur} userInfo={userInfo} key={idx} />
            ))}
          </ListBox>
        )}
      </TabPanel>

      <TabPanel value={value} index={2}>
        {willData?.length === 0 ? (
          <Box sx={{ marginTop: "10em" }}>
            <NullData title={"앗! 참여 예정인 파티가 없습니다"} />
          </Box>
        ) : (
          <ListBox>
            {willData?.map((cur, idx) => (
              <AllData {...cur} userInfo={userInfo} key={idx} />
            ))}
          </ListBox>
        )}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {scrapData?.length === 0 ? (
          <Box sx={{ marginTop: "10em" }}>
            <NullData title={"앗! 찜한 파티가 없습니다"} />
          </Box>
        ) : (
          <ListBox>
            {scrapData?.map((cur, idx) => (
              <AllData {...cur} userInfo={userInfo} key={idx} />
            ))}
          </ListBox>
        )}
      </TabPanel>
    </React.Fragment>
  );
};

const ListBox = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  padding-bottom: 5.5em;
  overflow-y: auto;
`;

const LocBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 5.5em;
  overflow-y: auto;
`;

const LocImg = styled.img`
  width: 70%;
  margin: 1em auto;
  margin-top: 3em;
`;

const LocText = styled.p`
  font-size: 1em;
  margin: 0 auto;
  text-align: center;
  color: #5b5b5b;
`;

export default PartyList;
