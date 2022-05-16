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
import FoodList from "./FoodList";

const UserInfo = (props) => {
  const { user_info } = props;

  return (
    <ProfileBox>
      <InfoBox>
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
          <NameText>{user_info?.nickname}</NameText>
          <DetailText>
            {user_info?.gender} · {user_info?.age} · {user_info?.city}{" "}
            {user_info?.region}
          </DetailText>
        </Box>
      </InfoBox>
      <NonFixBox>{user_info?.intro}</NonFixBox>
      <FoodList user_info={user_info} />
    </ProfileBox>
  );
};

const ProfileBox = styled.div`
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 0.5em;
  margin: 1em auto;
  padding: 1em;
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #dfdfdf;
  padding-bottom: 1em;
`;

const NameText = styled.p`
  font-size: 1em;
  font-weight: 600;
`;

const DetailText = styled.p`
  font-size: 0.7em;
  color: gray;
`;

const FoodText = styled.p`
  font-size: 0.7em;
  color: gray;
  font-weight: 600;
  margin-top: 1em;
  margin-bottom: 0.5em;
`;

const NonFixBox = styled.div`
  width: 100%;
  font-size: 0.8em;
  margin-top: 1em;
  word-wrap: break-word;
  word-break: break-word;
`;

export default UserInfo;
