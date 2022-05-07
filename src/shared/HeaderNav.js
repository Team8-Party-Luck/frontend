import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { actionCreators as crewActions } from "../redux/modules/crew";

const HeaderNav = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   console.log("나는야 렌더링");
  // },);

  // const asd = () => {
  //   dispatch(crewActions.sendScrapData(props?.partyId));
  //   dispatch(crewActions.getDetailInfo(props?.partyId));
  // };

  const sendScrap = () => {
    dispatch(crewActions.sendScrapData(props?.partyId));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "gray", position: "relative" }}>
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => {
              history.push("/home");
            }}
          >
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
        {props?.partyUser?.sub === false ? (
          <FavoriteBorderIcon
            style={{ color: "black" }}
            onClick={() => {
              sendScrap();
            }}
          />
        ) : (
          <FavoriteIcon
            style={{ color: "black" }}
            onClick={() => {
              sendScrap();
            }}
          />
        )}
      </AppBar>
    </Box>
  );
};

export default HeaderNav;
