import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import styled from "styled-components";


const Day = ({day, setDay}) => {
  const [value, setValue] = React.useState(new Date());

  return (
    <DayStyle>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label="만날 날짜"
          value={value}
          onChange={(newValue) => {
            setValue(newValue.getFullYear());
            let year = newValue.getFullYear();
            let month = newValue.getMonth();
            setDay(newValue)
            console.log(value)
          }}
          renderInput={(params) => <TextField {...params} sx={{dispaly:'inline'}}/>}
        />
    </LocalizationProvider>
    </DayStyle>
  );
}



const DayStyle = styled.div`
margin-top: 1rem;
margin-bottom:1rem;

`
export default Day;