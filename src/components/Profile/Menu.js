import { Box, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { history } from "../../redux/configStore";
const Menu = () => {
  return (
    <Box sx={{ marginTop: "2em" }}>
      <Typography
        component="p"
        variant="p"
        sx={{
          width: "100%",
          paddingLeft: 2,
          fontSize: "0.8em",
          color: "gray",
        }}
      >
        메뉴
      </Typography>
      <List component="nav" aria-label="mailbox folders" sx={{}}>
        <ListItem
          button
          onClick={() => {
            history.push("/joined");
          }}
        >
          <ListItemText primary="참여 히스토리" />
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() => {
            history.push("/scrap");
          }}
        >
          <ListItemText primary="찜한 파티" />
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() => {
            history.push("/account");
          }}
        >
          <ListItemText primary="계정" />
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() => {
            history.push("/inquary");
          }}
        >
          <ListItemText primary="문의하기" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Menu;
