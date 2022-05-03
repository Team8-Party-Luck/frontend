import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Age({capacity, setCapacity}) {
  const [value, setValue] = React.useState(top100Films);
  return (
    <Autocomplete
      disablePortal
      variant="standard"
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: "80%", mb: 1, mt: 2 }}
      renderInput={(params) => <TextField {...params} label="모이는 인원" />}
      onChange={(event, newValue) => {
        setCapacity(Number(newValue.label));
      }}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "7" },
  { label: "8" },
];
