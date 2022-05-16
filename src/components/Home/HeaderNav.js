import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeLogo from "../../static/images/logo/topbar_logo.png";
import AlarmImg from "../../static/images/icon/ic_alarm.png";
import { useHistory } from "react-router";

const HeaderNav = () => {
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "white", position: "relative", height: "5em" }}>
        <Toolbar sx={{ marginTop: "0.8em" }}>
          <img src={HomeLogo} alt="홈로고" />
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              sx={{ color: "black" }}
              onClick={() => {
                history.push("/alarm");
              }}
            >
              <img
                src={AlarmImg}
                alt="알람"
                style={{ width: 25, height: 25 }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderNav;
