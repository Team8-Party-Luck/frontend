// import * as React from "react";

// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";

// import styled from "styled-components";

// export default function Age({capacity, setCapacity}) {
//   const [value, setValue] = React.useState(number);
  
//   console.log(capacity)
//   return (
//     <TextField
//       disablePortal
//       select
//       readOnly
//       value={String(capacity) || ''}
//       options={number}
//       sx={{ width: "95%",}}
//       renderInput={(params) => <TextField   {...params}/>}
//       onChange={(event, newValue) => {
//         setCapacity(newValue.label);
//       }}
//       isOptionEqualToValue={(option, value) =>
//         option.iso === value.iso
//       }
//     />
//   );
// }

// const number = [
//   { label: "2" },
//   { label: "3" },
//   { label: "4" },
//   { label: "5" },
//   { label: "6" },
//   { label: "7" },
//   { label: "8" },
// ];

// const AutoComplete = styled(Autocomplete)`
//   & .MuiInputBase-input {
//     height: 1rem;
//   }
// `;

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const number = [
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
];

export default function Age({capacity, setCapacity}) {
  const [value, setValue] = React.useState('EUR');

  const handleChange = (event) => {
    setValue(event.target.value);
    setCapacity(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          select
          value={String(capacity) || ''}
          onChange={handleChange}
        >
          {number.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}