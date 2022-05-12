import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useHistory } from "react-router";

const HeaderNav = () => {
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "white", position: "relative", height: "5em" }}>
        <Toolbar sx={{ marginTop: "0.8em" }}>
          <img src="image/bar/exam.png" style={{ width: 170 }} />
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
              <Badge badgeContent={20} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderNav;
