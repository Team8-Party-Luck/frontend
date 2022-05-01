import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

export default function TimeSelect({time, setTime}) {
  const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileTimePicker
          label="만날 시간"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            setTime(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
  );
}

// renderInput={(params) => <TextField {...params} sx={{width: 100, display: 'inline'}}/>}
