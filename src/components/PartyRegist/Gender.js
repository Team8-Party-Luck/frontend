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
          value="여성"
          control={<Radio />}
          label="여성"
          onClick={() => {
            setGender("여성");
          }}
        />
        <FormControlLabel
          value="남성"
          control={<Radio />}
          label="남성"
          onClick={() => {
            setGender("남성");
          }}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RowRadioButtonsGroup;
