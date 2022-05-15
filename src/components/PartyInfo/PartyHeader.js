import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import { history } from "../../redux/configStore";
import { useDispatch } from "react-redux";
import { actionCreators as crewActions } from "../../redux/modules/crew";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PartyHeader = (props) => {
  const dispatch = useDispatch();

  const sendScrap = () => {
    dispatch(crewActions.sendScrapData(props?.partyId));
  };
  return (
    <Box
      sx={{
        width: "100%",
        padding: 2,
        display: "flex",
        borderBottom: "1px solid #dfdfdf",
        position: "fixed",
        background: "white",
        paddingTop: 2.2,
        zIndex: 1000,
      }}
    >
      <Box
        onClick={() => {
          history.goBack();
        }}
        sx={{ position: "absolute" }}
      >
        <ArrowBackIosIcon fontSize="medium" />
      </Box>
      <Typography
        component="p"
        variant="p"
        sx={{
          fontWeight: "bold",
          color: "black",
          fontSize: "1.2em",
          margin: "0 auto",
        }}
      >
        파티정보
      </Typography>
      {props?.partyUser?.sub === false ? (
        <FavoriteBorderIcon
          style={{ color: "black", position: "absolute", right: 40 }}
          onClick={() => {
            sendScrap();
          }}
        />
      ) : (
        //   <img
        //     src="image/home/detail/ic_heart_inactive.png"
        //     alt="빈하트"
        //       onClick={() => {
        //         sendScrap();
        //       }}
        //   />
        <FavoriteIcon
          style={{ color: "black", position: "absolute", right: 40 }}
          onClick={() => {
            sendScrap();
          }}
        />
        //   <img
        //     src="image/home/detail/ic_heart.png"
        //     alt="하트"
        //       onClick={() => {
        //         sendScrap();
        //       }}
        //   />
      )}
    </Box>
  );
};

export default PartyHeader;
