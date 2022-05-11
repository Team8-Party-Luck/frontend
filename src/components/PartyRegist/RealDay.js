import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styled from "styled-components";

const RealDay = ({ date, setDate }) => {
  const [value, setValue] = React.useState(new Date());

  // const str = '2022-09-20'.split('-')
  // const hi = new Date(str[0], str[1]-1, str[2] )
  // console.log(hi)

  //지금은 연도까지는 바꾸지 않게 설정해두자.
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
            month = month >= 10 ? month: '0' + month;
            let day = String(value.getDate());
            day = day >= 10 ? day : '0' + day;
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
