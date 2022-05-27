import React, { useState } from "react";

//mui
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const RealDay = ({ date, setDate }) => {
  const [value, setValue] = useState(new Date());

  const str = new Date(`2022-${date}`);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        minDate={new Date()}
        label="만날 날짜"
        toolbarTitle="만날 날짜"
        cancelText="취소"
        okText="저장"
        openTo="day"
        inputFormat={"yyyy.MM.dd"}
        // 워닝 방지
        mask={"____.__.__"}
        value={isNaN(str) !== true ? str : value}
        onChange={(newValue) => {
          setValue(newValue);
              //날짜 문자열 변환
              let month = newValue.getMonth() + 1;
              month = month >= 10 ? month : "0" + month;
              let day = newValue.getDate();
              day = day >= 10 ? day : "0" + day;
              let realDate = `${month}-${day}`;
          setDate(realDate);
        }}
        renderInput={(params) => <TextField {...params} variant="standard" />}
      />
    </LocalizationProvider>
  );
};

export default RealDay;

//구분자
// import React, { forwardRef, useState, useRef } from "react";
// import styled from "styled-components";

// //react-datepicker
// import ko from "date-fns/locale/ko";
// import DatePicker, { registerLocale } from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const RealDay = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
//     <DateButton onClick={onClick} ref={ref}>
//       {value}
//     </DateButton>
//   ));

//   return (
//     <React.Fragment>
//       <DatePicker
//         customInput={<ExampleCustomInput />}
//         dateFormat="yyyy.MM.dd(eee)"
//         locale={ko}
//         selected={startDate}
//         minDate={startDate}
//         onChange={(date) => setStartDate(date)}
//         disabledKeyboardNavigation
//         withPortal
//       >
//         <div >
//           <CancelButton style={{float:'left'}}>취소</CancelButton>
//           <CancelButton style={{float:'right'}}>저장</CancelButton>
//         </div>
//       </DatePicker>

//     </React.Fragment>
//   );
// };

// export default RealDay;

// const DateButton = styled.button`
//   border: none;
//   border-bottom: 1px solid black;
//   width: 9rem;
//   font-size: 1rem;
// `;

// const CancelButton = styled.button`
// border: 1px solid #cccccc;
// border-radius: 8px;
// width: 7rem;
// height: 3rem;
// `

// import React, { useState } from "react";
// // import "react-modern-calendar-datepicker/lib/DatePicker.css";
// import ko from "date-fns/locale/ko";
// import DatePicker, { registerLocale } from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const RealDay = () => {
//   const [selectedDay, setSelectedDay] = useState(new Date());

//   // render regular HTML input element
//   const renderCustomInput = ({ ref }) => (
//     <input
//       readOnly
//       ref={ref} // necessary
//       placeholder="I'm a custom input"
//       value={selectedDay ? `✅: ${selectedDay.day}` : ''}
//       style={{
//         textAlign: 'center',
//         padding: '1rem 1.5rem',
//         fontSize: '1.5rem',
//         border: '1px solid #9c88ff',
//         borderRadius: '100px',
//         boxShadow: '0 1.5rem 2rem rgba(156, 136, 255, 0.2)',
//         color: '#9c88ff',
//         outline: 'none',
//       }}
//       className="my-custom-input-class" // a styling class
//     />
//   )

//   return (
//     <DatePicker
//       value={selectedDay}
//       onChange={setSelectedDay}
//       renderInput={renderCustomInput} // render a custom input
//       shouldHighlightWeekends
//     />
//   );
// };

// export default RealDay;
