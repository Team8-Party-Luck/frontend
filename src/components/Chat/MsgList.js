import { history } from "../../redux/configStore";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";
import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as chatActions } from "../../redux/modules/chat";

const MsgList = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(chatActions.getChatListDB());
  }, []);

  const chatList = useSelector((state) => state?.chat?.list);
  console.log(chatList);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          borderBottom: "1px solid #dfdfdf",
          padding: 1.5,
          paddingTop: "4.5em",
        }}
      >
        <Avatar
          sx={{
            bgcolor: red[400],
            width: "2.7em",
            height: "2.7em",
            marginRight: "0.7em",
          }}
          aria-label="recipe"
          //   src={}
        />
        <Box sx={{ width: "100%", paddingTop: 0.2, position: "relative" }}>
          <Typography
            component="p"
            variant="p"
            sx={{ fontSize: "1em", marginBottom: 0.5 }}
          >
            여기는 유저네임~
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{ color: "gray", fontSize: "0.7em" }}
          >
            어쩌구 저쩌구~어쩌구 저쩌구~어쩌구 저쩌구~어쩌구 저쩌구~어쩌구
            저쩌구~어쩌구 저쩌구~어쩌구 저쩌구~어쩌구 저쩌구~
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "gray",
              fontSize: "0.5em",
              position: "absolute",
              top: 3,
              right: 1,
            }}
          >
            오후 2:30
          </Typography>
        </Box>
      </Box>
      {/* {chatList?.map((cur,idx)=>{
      return(
        <Box sx={{ display: "flex", borderBottom: "1px solid #dfdfdf", padding: 1.5 }}>
        <Avatar
          sx={{
            bgcolor: red[400],
            width: "2.7em",
            height: "2.7em",
            marginRight: "0.7em",
          }}
          aria-label="recipe"
            src={chatList?.image}
        />
        <Box sx={{ width: "100%", paddingTop: 0.2, position: "relative" }}>
          <Typography
            component="p"
            variant="p"
            sx={{ fontSize: "1em", marginBottom: 0.5 }}
          >
            {chatList?.sender}
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{ color: "gray", fontSize: "0.7em" }}
          >
            {chatList?.lastMessage}
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "gray",
              fontSize: "0.5em",
              position: "absolute",
              top: 3,
              right: 1,
            }}
          >
            {chatList?.createdAt}
          </Typography>
        </Box>
      </Box>
      )
    })} */}
    </Box>
  );
};

export default MsgList;
