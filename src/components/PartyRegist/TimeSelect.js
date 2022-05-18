import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {ko} from 'date-fns/locale'
export default function TimeSelect({ time, setTime }) {
  const [value, setValue] = useState( new Date());

  const str = new Date(`2022-01-01 ${time}`);
  // const str = '13:12'.split(':')
  // const hi = new Date(`2019-12-11 ${str[0]}:${str[1]}:30`)
  // console.log(hi)

  const theme = createTheme(
    {
      palette: {
        primary: { main: '#FF6853' },
      },
    },
  );

  return (
    <LocalizationProvider  locale={ko} dateAdapter={AdapterDateFns}>
      <ThemeProvider  theme={theme}>
        <MobileTimePicker
          label="만날 시간"
          cancelText="취소"
          
          okText="저장"
          inputFormat={"a hh:mm "}
          //워닝 방지
          mask={"__:__"}
          value={isNaN(str) !== true ? str : value}

          onChange={(newValue) => {
            setValue(newValue);
            let hours = newValue.getHours();
            hours = hours < 10 ? `0${hours}` : hours;
            let minutes = newValue.getMinutes();
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            let answer = `${hours}:${minutes}`;
            setTime(answer);
          }}
          renderInput={(params) => (
            <TextField variant="standard" placeholder="만날 시간" {...params} />
          )}
        />
      </ThemeProvider>
    </LocalizationProvider>
  );
}



