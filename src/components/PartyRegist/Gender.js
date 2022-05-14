import React, {useState} from 'react';
import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const RowRadioButtonsGroup = ({ gender, setGender }) => {
  const [form, setForm] = useState("whole");
  const handleRadio = (e) => {
    setForm(e.target.value);
  };
  return (
    <React.Fragment>
    <label>
        <ImageRadio
          type="radio"
          value="whole"
          checked={form === "whole"}
          onChange={handleRadio}
        />
        모두
      </label>
      <label>
        <ImageRadio
          type="radio"
          value="male"
          checked={form === "male"}
          onChange={handleRadio}
        />
        남성
      </label>
      <label>
        <ImageRadio
          type="radio"
          value="female"
          checked={form === "female"}
          onChange={handleRadio}
        />
       여성
      </label>


    </React.Fragment>
    // <FormControl>
    //   <RadioGroup
    //     row
    //     aria-labelledby="demo-row-radio-buttons-group-label"
    //     name="row-radio-buttons-group"
    //     defaultValue="모두"
    //     value={gender || "모두"}

    //   >
    //     <FormControlLabel
    //       value="모두"
    //       control={<Radio />}
    //       label="모두"
    //       sx={{ fontSize: 10 }}
    //       onClick={() => {
    //         setGender("모두");
    //       }}
    //     />
    //     <FormControlLabel
    //       value="여성"
    //       control={<Radio />}
    //       label="여성"
    //       onClick={() => {
    //         setGender("여성");
    //       }}
    //     />
    //     <FormControlLabel
    //       value="남성"
    //       control={<Radio />}
    //       label="남성"
    //       onClick={() => {
    //         setGender("남성");
    //       }}
    //     />
    //   </RadioGroup>
    // </FormControl>
  );
};


const ImageRadio = styled.input`
  height: 18px;
  width: 18px;
  vertical-align: middle;
  margin: 15px 7px 15px 10px;
  accent-color: #f7543e;
`;

export default RowRadioButtonsGroup;
