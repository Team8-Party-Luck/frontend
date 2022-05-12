import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export default function AlarmCard() {
  return (
    <Box sx={{mt:'2rem'}}>
      <Typography sx={{ml:'1rem', my:'0.5rem'}}>
      신청한 파티의 정보가 수정되었습니다.
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          border: "0.1px solid black",
          marginX: "1rem",
          padding: "0.2rem",
          borderRadius: "0.5rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Typography sx={{mt:0.5}}>파티명을 입력해요~ 몇글자까지 </Typography>
            <Typography>매드포갈릭 홍대입구점 </Typography>
          </Grid>
          <Grid item xs={3}>
            <CardMedia
              component="img"
              sx={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem", marginLeft:1.7 }}
              image="https://images.unsplash.com/photo-1638913658642-8f22bae3335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Live from space album cover"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
