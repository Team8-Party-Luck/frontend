import React from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";

const PartyDetailDesc = ({ desc }) => {
  return (
    <Box sx={{ mb: "4rem", mx:'2rem' }}>
     {desc}
    </Box>
  );
};

export default PartyDetailDesc;

