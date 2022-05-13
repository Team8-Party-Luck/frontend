import { Box, Typography, Avatar } from "@mui/material";
import React from "react";
import { history } from "../../redux/configStore";

const AllData = (props) => {
  const {
    partyId,
    title,
    image,
    store,
    address,
    date,
    time,
    capacity,
    age,
    gender,
  } = props;

  return (
    <Box>
      <Box
        onClick={() => {
          history.push(`/partyInfo/${partyId}`);
        }}
        sx={{ marginTop: "1em" }}
      >
        <Typography sx={{ fontWeight: "bold", marginBottom: 0.3 }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Avatar
            variant={"rounded"}
            alt="The image"
            src={image}
            style={{
              width: 65,
              height: 65,
              borderRadius: "0.5em",
            }}
          />
          <Box sx={{ marginLeft: "0.5em" }}>
            <Typography style={{ fontSize: "0.9em", color: "gray" }}>
              {store}
            </Typography>
            <Box sx={{ display: "flex", marginTop: 0.3 }}>
              <img
                src="image/home/ic_location.png"
                style={{ width: 18, height: 18 }}
                alt="위치"
              />
              <Typography sx={{ fontSize: 12 }}>
                &nbsp;{address}&nbsp;&nbsp;
              </Typography>

              <img
                src="image/home/ic_calendar.png"
                style={{ width: 17, height: 17 }}
                alt="달력"
              />
              <Typography sx={{ fontSize: 12 }}>
                &nbsp;{date}&nbsp;&nbsp;
              </Typography>
              <img
                src="image/home/ic_time.png"
                style={{ width: 17, height: 17 }}
                alt="시간"
              />
              <Typography sx={{ fontSize: 12 }}>
                &nbsp;{time}&nbsp;&nbsp;
              </Typography>
            </Box>
            <Box sx={{ display: "flex", marginTop: 0.5 }}>
              <img
                src="image/home/ic_people.png"
                style={{ width: 17, height: 17 }}
                alt="시간"
              />
              <Typography sx={{ fontSize: 12 }}>
                &nbsp;{capacity}명&nbsp; {age} {gender}모임
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AllData;
