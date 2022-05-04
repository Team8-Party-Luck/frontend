import React from 'react';

import Box from '@mui/material/Box';

const PartyDetailDesc = ({desc}) => {
  return(<Box sx={{m:2, mt:3}}>
    {desc}
  </Box>)
}

export default PartyDetailDesc