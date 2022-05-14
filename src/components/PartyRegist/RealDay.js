import * as React from "react";

//mui
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";


const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6853",
    },
  },
});

const RealDay = ({ date, setDate }) => {
  const [value, setValue] = React.useState(new Date());
  const str = new Date(`2022-${date}`)
  // const str = '2022-09-20'.split('-')
  // const hi = new Date(str[0], str[1]-1, str[2] )
  // console.log(hi)

  return (
    <DayStyle>
      <LocalizationProvider dateAdapter={AdapterDateFns}>

      <ThemeProvider theme={theme}>
        <DatePicker
        variant="standard"
          openTo="day"
          views={["day"]}
          placeholder="만날 날짜"
          value={isNaN(str) !== true ? str : value}
          inputVariant=""
          onChange={(newValue) => {
            setValue(newValue);
            let month = String(value.getMonth()+1)
            month = month >= 10 ? month: '0' + month;
            let day = String(value.getDate());
            day = day >= 10 ? day : '0' + day;
            let answer = `${month}-${day}`
            setDate(answer)
          }}  
          renderInput={(params) => <TextField {...params} helperText={null} />}
          InputLabelProps={{
            shrink: true,
          }}
        />
         </ThemeProvider>
      </LocalizationProvider>
    </DayStyle>
    
  );
};

const DayStyle = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export default RealDay;


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

// export default function RealDay() {
//   const classes = useStyles();

//   return (
//     <form className={classes.container} noValidate>
//       <TextField
//         type="date"
//         defaultValue="2017-05-24"
//         className={classes.textField}
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />
//     </form>
//   );
// }