import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const PartyDetailBottomNav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      {/* <BottomNavigation
        sx={{ width: "95%", position: "fixed", display: "flex", bottom: 10 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      > */}
      {/* <Stack spacing={2} direction="row">
          <Button variant="outlined" sx={{ width: "9rem" }}>
            수정
          </Button>
          <Button variant="outlined" sx={{ width: "9rem" }}>
            파티삭제
          </Button>
        </Stack> */}
      {/* </BottomNavigation> */}

      <Box
        sx={{ width: "95%", position: "fixed", display: "flex", bottom: 10 }}
        justifyContent="center"
        alignItems="center"
      >
        <Stack spacing={2} direction="row">
          <Button variant="outlined" sx={{ width: "9rem" }}>
            수정
          </Button>
          <Button variant="outlined" sx={{ width: "9rem" }}>
            파티삭제
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default PartyDetailBottomNav;
