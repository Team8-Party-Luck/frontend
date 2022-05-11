import { Box, Avatar, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ChatBox = (props) => {
  const { message, userId, createdAt } = props;

  const userInfo = useSelector((state) => state?.user?.user?.result?.userid);

  console.log(userInfo);

  // const user = userId === userInfo.userId ? true : false;
  // console.log(userId);

  console.log(userInfo);

  return (
    <Box sx={{ display: "flex", padding: 1.5, position: "relative" }}>
      <Avatar
        sx={{
          bgcolor: red[400],
          width: "2em",
          height: "2em",
          marginRight: "0.7em",
        }}
        aria-label="recipe"
        //   src={}
      />
      <Box sx={{ width: "100%", paddingTop: 0.5 }}>
        <Typography
          component="p"
          variant="p"
          sx={{
            color: "gray",
            fontSize: "0.9em",
            width: "fit-content",
            maxWidth: "80%",
            border: "1px solid gray",
            padding: 1,
            borderRadius: 2,
          }}
        >
          어쩌구~저쩌구~어쩌구~저쩌구~어쩌구~저쩌구~어쩌구~저쩌구
        </Typography>
      </Box>
      {/* <Typography
          component="p"
          variant="p"
          sx={{
            color: "gray",
            fontSize: "0.5em",
            position: "absolute",
            bottom: "1.5em",
            left: "37em",
          }}
        >
          오후 2:30
        </Typography> */}
    </Box>
  );
};

const WrapBox = styled.div`
  align-items: ${(props) => (props.user ? "flex-end" : "flex-start")};
  margin: 10px;
  // height: 70px;
`;

export default ChatBox;
