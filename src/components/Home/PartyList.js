import * as React from "react";
import PropTypes from "prop-types";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PartyCard from "./PartyCard";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as crewActions } from "../../redux/modules/crew";

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
  React.useEffect(() => {
    dispatch(crewActions.getDataDB());
  }, []);
  
  const crewList = useSelector((state) => state?.crew?.crew?.results);
  const answer = crewList.map((num) => {
    return num
  })

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
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
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