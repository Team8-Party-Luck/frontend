import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export default function RegionSelect({ city, setCity, district, setDistrict }) {
  const [value, setValue] = React.useState(options[0]);

  console.log(city)
  return (
    <React.Fragment>
      <Grid container sx={{ my: 2.5 }}>
        <Grid sx={{ ml: 3 }}>
          <Autocomplete
            value={value}
            // disablePortal
            onChange={(event, newValue) => {
              setValue(newValue);
              setCity(newValue.label);
            }}
            options={options}
            sx={{ width: 120 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>

        {city === "서울" && (
          <Grid item >
            <Autocomplete
              value={district}
              onChange={(event, newValue) => {
                setDistrict(newValue.label);
              }}
              options={seoulOptions}
              disablePortal
              sx={{ width: 140 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        )}
        {city === "부산" && (
          <Grid item >
            <Autocomplete
              value={district}
              onChange={(event, newValue) => {
                setDistrict(newValue.label);
              }}
              options={busanOptions}
              disablePortal
              sx={{ width: 140 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        )}
        {city === "인천" && (
          <Grid item >
            <Autocomplete
              value={district}
              onChange={(event, newValue) => {
                setDistrict(newValue.label);
              }}
              options={incheonOptions}
              disablePortal
              sx={{ width: 140 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        )}
        {city === "대구" && (
          <Grid item >
            <Autocomplete
              value={district}
              onChange={(event, newValue) => {
                setDistrict(newValue.label);
              }}
              options={daeguOptions}
              disablePortal
              sx={{ width: 140 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        )}
        {city === "대전" && (
          <Grid item >
            <Autocomplete
              value={district}
              onChange={(event, newValue) => {
                setDistrict(newValue.label);
              }}
              options={daejeonOptions}
              disablePortal
              sx={{ width: 140 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        )}
        {city === "광주" && (
          <Grid item >
            <Autocomplete
              value={district}
              onChange={(event, newValue) => {
                setDistrict(newValue.label);
              }}
              options={gwangjuOptions}
              disablePortal
              sx={{ width: 140 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        )}
        {city === "울산" && (
          <Grid item z>
            <Autocomplete
              value={district}
              onChange={(event, newValue) => {
                setDistrict(newValue.label);
              }}
              options={wollsanOptions}
              disablePortal
              sx={{ width: 140 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        )}

        <Button  sx={{ml:1}}variant="outlined">검색</Button>
      </Grid>
    </React.Fragment>
  );
}

const options = [
  { label: "서울" },
  { label: "부산" },
  { label: "인천" },
  { label: "대구" },
  { label: "대전" },
  { label: "광주" },
  { label: "울산" },
];

const seoulOptions = [
  { label: "종로구" },
  { label: "중구" },
  { label: "용산구" },
  { label: "성동구" },
  { label: "광진구" },
  { label: "동대문구" },
  { label: "중랑구" },
  { label: "성북구" },
  { label: "강북구" },
  { label: "도봉구" },
  { label: "노원구" },
  { label: "은평구" },
  { label: "서대문구" },
  { label: "마포구" },
  { label: "양천구" },
  { label: "강서구" },
  { label: "구로구" },
  { label: "금천구" },
  { label: "영등포구" },
  { label: "동작구" },
  { label: "관악구" },
  { label: "서초구" },
  { label: "강남구" },
  { label: "송파구" },
  { label: "강동구" },
];

const busanOptions = [
  { label: "중구" },
  { label: "서구" },
  { label: "동구" },
  { label: "영도구" },
  { label: "부산진구" },
  { label: "동래구" },
  { label: "남구" },
  { label: "북구" },
  { label: "해운대구" },
  { label: "사하구" },
  { label: "금정구" },
  { label: "강서구" },
  { label: "연제구" },
  { label: "수영구" },
  { label: "사상구" },
  { label: "기장군" },
];
const incheonOptions = [
  { label: "중구" },
  { label: "동구" },
  { label: "미추홀구" },
  { label: "연수구" },
  { label: "남동구" },
  { label: "부평구" },
  { label: "계양구" },
  { label: "서구" },
  { label: "강화군" },
  { label: "옹진군" },
];
const daeguOptions = [
  { label: "중구" },
  { label: "동구" },
  { label: "서구" },
  { label: "남구" },
  { label: "북구" },
  { label: "수성구" },
  { label: "달서구" },
  { label: "달성군" },
];
const daejeonOptions = [
  { label: "동구" },
  { label: "중구" },
  { label: "서구" },
  { label: "유성구" },
  { label: "대덕구" },
];
const gwangjuOptions = [
  { label: "동구" },
  { label: "서구" },
  { label: "남구" },
  { label: "북구" },
  { label: "광산구" },
];

const wollsanOptions = [
  { label: "을주군" },
  { label: "중구" },
  { label: "북구" },
  { label: "남구" },
  { label: "동구" },
];

