import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

export default function TimeSelect({time, setTime}) {
  const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));

  // const str = '13:12'.split(':')
  // const hi = new Date(`2019-12-11 ${str[0]}:${str[1]}:30`)
  // console.log(hi)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileTimePicker
          label="만날 시간"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            let hours = newValue.getHours();
            hours = hours < 10 ? `0${hours}` : hours;
            let minutes = newValue.getMinutes();
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            let answer = `${hours}시 ${minutes}분`
            setTime(answer);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
  );
}

// renderInput={(params) => <TextField {...params} sx={{width: 100, display: 'inline'}}/>}
