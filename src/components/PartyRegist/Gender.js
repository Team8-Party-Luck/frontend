import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const RowRadioButtonsGroup = ({ gender, setGender }) => {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="모두"
        value={gender || "모두"}

      >
        <FormControlLabel
          value="모두"
          control={<Radio />}
          label="모두"
          sx={{ fontSize: 10 }}
          onClick={() => {
            setGender("모두");
          }}
        />
        <FormControlLabel
          value="여자"
          control={<Radio />}
          label="여자"
          onClick={() => {
            setGender("여자");
          }}
        />
        <FormControlLabel
          value="남자"
          control={<Radio />}
          label="남자"
          onClick={() => {
            setGender("남자");
          }}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RowRadioButtonsGroup;
