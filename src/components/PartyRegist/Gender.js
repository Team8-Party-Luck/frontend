import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const RowRadioButtonsGroup = () => {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="모두" sx={{fontSize:10}}/>
        <FormControlLabel value="male" control={<Radio />} label="여자" />
        <FormControlLabel value="other" control={<Radio />} label="남자" />
      </RadioGroup>
    </FormControl>
  );
};

export default RowRadioButtonsGroup;
