import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { history } from "../../redux/configStore";

const UserInfo = (props) => {
  const { user_info } = props;

  console.log(user_info);

  return (
    <Box sx={{ mt: 7, mx: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Avatar
            sx={{ width: 50, height: 50, mr: 3, ml: 1.5 }}
            alt="Remy Sharp"
            src={user_info?.image}
          />
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs sx={{ mt: 1 }}>
              <Typography gutterBottom variant="subtitle1" component="div">
                {user_info?.nickname}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {user_info?.gender} {user_info?.age} {user_info?.city}{" "}
                {user_info?.region}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                {user_info?.intro}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                history.push("/edit");
              }}
            >
              수정
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserInfo;
