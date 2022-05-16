import React, { useState } from "react";

//mui
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import PickersDay, {
  PickersDayProps,
  pickersDayClasses
} from "@mui/lab/PickersDay";





const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6853",
    },
    
  },

});

const RealDay = ({ date, setDate }) => {
  const [value, setValue] = useState(
    // new Date()
    null
  );

  const str = new Date(`2022-${date}`);
  // const str = '2022-09-20'.split('-')
  // const hi = new Date(str[0], str[1]-1, str[2] )
  // console.log(hi)

  
  return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <DatePicker
            toolbarTitle="만날 날짜"
            cancelText="취소"
            okText="저장"
            openTo="day"
            inputFormat={"yyyy.MM.dd"}
            //워닝 방지
            mask={"____-__-__"}
            placeholder={"수강기간 (From)"}
            value={isNaN(str) !== true ? str : value}
            
            onChange={(newValue) => {
              setValue(newValue);
              let month = newValue.getMonth() + 1;
              month = month >= 10 ? month : "0" + month;
              let day = newValue.getDate();
              day = day >= 10 ? day : "0" + day;
              let answer = `${month}-${day}`;
              setDate(answer);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder="만날 날짜"
              />
            )}
          />
        </ThemeProvider>
      </LocalizationProvider>
  );
};

const DayStyle = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 2rem;
`;
export default RealDay;

//달과 날짜가 안받아와질때 사용해보기
// let month = String(value.getMonth() + 1);
// let day = String(value.getDate());
