import React, { useEffect } from "react";
import Header from "../shared/Header";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { history } from "../redux/configStore";
import Avatar from "@mui/material/Avatar";
import BottomNav from "../shared/BottomNav";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as crewActions } from "../redux/modules/crew";

const Joined = () => {
  const data = [
    {
      image: "",
      title: "제목이 들어갈 자립니다",
      store: "가게이름",
      capacity: "인원",
      address: "주소",
      date: "날짜",
      time: "시간",
      partyId: 1,
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => dispatch(crewActions.getJoinedData()), []);

  const joinedData = useSelector((state) => state?.crew?.joined?.results);
  console.log(joinedData);

  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "2em",
        }}
      >
        <Avatar
          variant={"rounded"}
          alt="The image"
          src={"props.image"}
          style={{
            width: 90,
            height: 90,
          }}
          onClick={() => {
            history.push(`/partyInfo/${data?.partyId}`);
          }}
        />
        <CardContent sx={{ flex: " 1 auto", p: 0, ml: 1, mb: 2 }}>
          <Stack spacing={0.8}>
            <Typography component="div" variant="h6">
              제목이 들어갈 자리입니다
            </Typography>

            <Typography style={{ fontSize: "0.8rem" }}>
              가게 &nbsp; 인원
            </Typography>
            <Typography style={{ fontSize: "0.8rem" }}>
              주소 날짜 시간
            </Typography>
          </Stack>
        </CardContent>
      </Box>
      {joinedData?.map((cur, idx) => (
        <Box
          sx={{ display: "flex", flexDirection: "row", margin: "2em" }}
          key={idx}
        >
          <Avatar
            variant={"rounded"}
            alt="The image"
            src={"props.image"}
            style={{
              width: 90,
              height: 90,
            }}
            onClick={() => {
              history.push(`/partyInfo/${cur?.partyId}`);
            }}
          />
          <CardContent sx={{ flex: " 1 auto", p: 0, ml: 1, mb: 2 }}>
            <Stack spacing={0.8}>
              <Typography component="div" variant="h6">
                {cur?.title}
              </Typography>

              <Typography style={{ fontSize: "0.8rem" }}>
                {cur?.store} &nbsp; {cur?.capacity}
              </Typography>
              <Typography style={{ fontSize: "0.8rem" }}>
                {cur?.address} {cur?.date} {cur?.time}
              </Typography>
            </Stack>
          </CardContent>
        </Box>
      ))}

      <BottomNav />
    </Box>
  );
};

export default Joined;
