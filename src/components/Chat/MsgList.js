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

const MsgList = () => {
  return (
    <Box sx={{ display: "flex", border: "1px solid black", padding: 2 }}>
      <Avatar
        sx={{
          bgcolor: red[400],
          width: "3em",
          height: "3em",
          marginRight: "0.7em",
        }}
        aria-label="recipe"
        //   src={}
      />
      <Box sx={{ width: "100%", paddingTop: 0.4 }}>
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
          어쩌구 저쩌구~
        </Typography>
      </Box>
    </Box>
  );
};

export default MsgList;
