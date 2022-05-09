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
        <Box sx={{ p: 3 }}>
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

  const [pageNum, setPageNum] = useState(1);

  const scrollEvent = useCallback(
    _.debounce(() => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      console.log(scrollHeight, scrollTop, clientHeight);
      if (scrollHeight - scrollTop - clientHeight < 100) {
        setPageNum((prev) => prev + 1);
      }
    }, 100)
  );

  React.useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  React.useEffect(() => {
    dispatch(crewActions.getDataDB(pageNum));
  }, [pageNum]);

  const crewList = useSelector((state) => state?.crew?.crew?.results);
  console.log(crewList);

  // const spread = crewList?.map((val) => (
  //   <PartySpread
  //     key={val?.partyId}
  //     partyId={val?.partyId}
  //     image={val?.image}
  //     title={val?.title}
  //     store={val?.store}
  //     address={val?.address}
  //     capacity={val?.capacity}
  //     date={val?.date}
  //     time={val?.time}
  //   />
  // ));

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
        {/* {spread} */}
        {crewList?.map((cur, idx) => (
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
        ))}
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

export default PartyList;
