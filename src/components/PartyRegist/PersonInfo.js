import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import styled from "styled-components";
import Age from "./Age";
import RowRadioButtonsGroup from "./Gender";
import AgeGroup from "./AgeGroup";

const PersonInfo = ({
  capacity,
  setCapacity,
  ageGroup,
  setAgeGroup,
  gender,
  setGender,
}) => {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
    >
      <h2 style={{ margin: "2rem" }}>모집인원 정보</h2>

      <Box sx={{ m: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={2.5} sx={{ mt: 2 }}>
            <h4>인원수</h4>
          </Grid>
          <Grid item xs={9.5}>
            <Age capacity={capacity} setCapacity={setCapacity} />
          </Grid>
        </Grid>
      </Box>
      <Divider />

      <Box sx={{ m: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={2.5} sx={{ mt: 1 }}>
            <h4>연령대</h4>
          </Grid>
          <Grid item>
            <AgeGroup ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
          </Grid>
        </Grid>
      </Box>
      <Divider />

      <Box sx={{ m: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={2.1} sx={{ mt: 1.5 }}>
            <h4>성별</h4>
          </Grid>
          <Grid item xs={9}>
            <RowRadioButtonsGroup gender={gender} setGender={setGender} />
          </Grid>
        </Grid>
      </Box>
      <Divider />

      <Button
        sx={{
          width: "85%",
          ml: "2rem",
          my: "2rem",
          border: 1,
          borderColor: "primary.main",
        }}
        onClick={toggleDrawer(anchor, false)}
      >
        등록
      </Button>
    </Box>
  );

  return (
    <div style={{ width: "85%" }}>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <TextField
            placeholder="모집인원 정보"
            value={
              `${capacity || ""}명 모집 / ${ageGroup || ""} / ${
                gender || ""
              }`
            }

            variant="standard"
            style={{ width: "100%" }}
            sx={{ mb: 1.5 }}
            onClick={toggleDrawer(anchor, true)}
            InputProps={{
              readOnly: true,
              endAdornment: <img src="image/profile/arw_gray.png" />,
            }}
          ></TextField>
          <Drawer
            PaperProps={{
              sx: {
                borderRadius: "2rem 2rem 0 0",
              },
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default PersonInfo;
