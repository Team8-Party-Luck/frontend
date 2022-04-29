import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useHistory } from "react-router";

const HeaderNav = (props) => {
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "gray", position: "relative" }}>
        <Toolbar>
          <IconButton size="large" color="inherit" onClick={() => {
            history.push('/home');
          }}>
            <ArrowBackRoundedIcon />
          </IconButton>
          <Box sx={{ flexGrow: 0.4 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: "block" } }}
          >
            {props.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderNav;
