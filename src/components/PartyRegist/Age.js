import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Age({capacity, setCapacity}) {
  const [value, setValue] = React.useState(top100Films);

  return (
    <Autocomplete
      disablePortal
      variant="standard"
      value={capacity || "2"}
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: "90%",}}
      renderInput={(params) => <TextField {...params} />}
      onChange={(event, newValue) => {
        setCapacity(newValue.label);
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
