import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { autocompleteClasses } from "@mui/material";
const UserParty = () => {
  return (
    <React.Fragment>
      <Box textAlign="center" sx={{ mt: 10, mb: 37 }}>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          sx={{
            width: "90%",
            height: "3rem",
            mb: 3,
          }}
        >
          내가 참여한 파티
        </Button>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          sx={{
            width: "90%",
            height: "3rem",
            mb: 3,
          }}
        >
          내가 주최한 파티
        </Button>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          sx={{
            width: "90%",
            height: "3rem",
            mb: 3,
          }}
        >
          스크랩
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default UserParty;
