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

import { Box, Grid } from "@mui/material";

const UserInfo = () => {
  const data = ["한식", "일식", "양식", "아시안", "아시안", "아시안"];
  return (
    <Box sx={{ padding: 2 }}>
      <Card
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
        {/* <hr style={{ margin: "0.5em 1em", background: "red" }} />
        <Grid container spacing={6} padding={"0 1em"}>
          {data?.map((cur, idx) => (
            <Grid item xs={2} key={idx}>
              <Box
                bgcolor={"#FF6853"}
                sx={{
                  width: "2.3em",
                  height: "2.3em",
                  borderRadius: "2.3em",
                  margin: "0 auto",
                }}
              >
                <Box
                  sx={{
                    width: "fitContent",
                    margin: "0 auto",
                    textAlign: "center",
                    fontSize: "0.7em",
                    color: "white",
                    fontWeight: "bold",
                    paddingTop: "1em",
                  }}
                >
                  {cur}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid> */}
        <hr style={{ margin: "0 1em" }} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            여기에 대충 자기소개가 들어갈 예정
          </Typography>
          <Typography
            component="h3"
            variant="p"
            sx={{ position: "absolute", top: "1.5em", left: "6em" }}
          >
            닉네임
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
            나이, 연령대, 사는 곳 들어갈 거임
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserInfo;
