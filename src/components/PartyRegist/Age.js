import * as React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import styled from "styled-components";

export default function Age({capacity, setCapacity}) {
  const [value, setValue] = React.useState(number);
  

  return (
    <AutoComplete
      disablePortal
      value={capacity || number[0]}
      options={number}
      sx={{ width: "95%",}}
      renderInput={(params) => <TextField  {...params}/>}
      onChange={(event, newValue) => {
        setCapacity(newValue.label);
      }}
      isOptionEqualToValue={(option, value) =>
        option.iso === value.iso
      }
    />
  );
}

const number = [
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "7" },
  { label: "8" },
];

const AutoComplete = styled(Autocomplete)`
  & .MuiInputBase-input {
    height: 1rem;
  }
`;