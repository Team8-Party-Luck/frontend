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
            src="https://images.unsplash.com/photo-1650784422954-9e522e77f473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
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

// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Avatar from "@mui/material/Avatar";
// import Box from "@mui/material/Box";

// const MediaCard = (props) => {
//   const { user_info } = props;

//   console.log(user_info);

//   return (
//     <Card sx={{ mt: 5, mx: 3, bgcolor: "#ccff90" }}>
//       <CardContent>
//         <Box sx={{ display: "flex" }}>
//           <Typography
//             gutterBottom
//             variant="h4"
//             component="div"
//             style={{ flex: 1 }}
//           >
//             이상민
//           </Typography>
//           <Avatar
//             alt="Remy Sharp"
//             src="https://images.unsplash.com/photo-1650784422954-9e522e77f473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
//             sx={{ width: 50, height: 50 }}
//             style={{ marginRight: "5rem" }}
//           />
//         </Box>
//         <br />
//         <Typography variant="body2" color="text.secondary">
//           여자 20대 서울
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           참여한 파티:2 주최한 파티:2
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">정보수정</Button>
//         <Button size="small">로그아웃</Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default MediaCard;
