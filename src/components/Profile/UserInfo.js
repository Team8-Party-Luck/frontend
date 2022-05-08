import React from "react";
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

import { Box, Grid } from "@mui/material";

const UserInfo = (props) => {
  const { user_info } = props;

  return (
    <Box sx={{ padding: 2 }}>
      {/* <Card
        sx={{
          width: "100%",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[400], width: "4em", height: "4em" }}
              aria-label="recipe"
              src={user_info?.image}
            ></Avatar>
          }
          action={
            <IconButton
              aria-label="settings"
              onClick={() => {
                history.push("/edit");
              }}
            >
              <EditIcon />
            </IconButton>
          }
        />
        <hr style={{ margin: "0 1em" }} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {user_info?.intro}
          </Typography>
          <Typography
            component="h3"
            variant="p"
            sx={{ position: "absolute", top: "1.5em", left: "6em" }}
          >
            {user_info?.nickname}
          </Typography>
          <Typography
            component="h4"
            variant="p"
            sx={{
              position: "absolute",
              top: "4.5em",
              left: "8.1em",
              color: "gray",
              fontSize: "14px",
            }}
          >
            {user_info?.gender} {user_info?.age} {user_info?.city}{" "}
            {user_info?.region}
          </Typography>
        </CardContent>
      </Card> */}
      <Box sx={{ display: "flex", marginTop: 3 }}>
        <Avatar
          sx={{
            bgcolor: red[400],
            width: "2em",
            height: "2em",
            marginRight: "0.7em",
          }}
          aria-label="recipe"
          src={user_info?.image}
        />
        <Box sx={{ width: "100%", paddingTop: 0.4 }}>
          <Typography
            component="p"
            variant="p"
            sx={{ fontSize: "1em", marginBottom: 0.5 }}
          >
            {user_info?.nickname}
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{ color: "gray", fontSize: "0.7em" }}
          >
            {user_info?.gender} · {user_info?.age} · {user_info?.city}{" "}
            {user_info?.region}
          </Typography>
        </Box>
      </Box>
      <NonFixBox>{user_info?.intro}</NonFixBox>
    </Box>
  );
};

const NonFixBox = styled.div`
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 3px;

  margin-top: 1.5em;
  padding-left: 0.7em;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
  font-size: 0.8em;
`;

export default UserInfo;
