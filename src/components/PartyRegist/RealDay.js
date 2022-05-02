import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styled from "styled-components";

const RealDay = ({ date, setDate }) => {
  const [value, setValue] = React.useState(new Date());

  return (
    <DayStyle>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          openTo="day"
          views={["day"]}
          label="만날 날짜"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            let month = String(value.getMonth()+1)
            let day = String(value.getDate())
            let answer = `${month}월 ${day}일`
            setDate(answer)
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
    </DayStyle>
  );
};

const DayStyle = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export default RealDay;
