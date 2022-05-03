import React from "react";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { cityArea } from "../../shared/CityData";
import { regionArea } from "../../shared/CityData";

const SetLocation = (props) => {
  const { city, setCity, region, setRegion } = props;

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };
  const handleChangeRegion = (e) => {
    setRegion(e.target.value);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", width: "100%", margin: "0 auto" }}>
        <FormControl fullWidth sx={{ minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">시/도</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={city}
            label="Age"
            onChange={handleChangeCity}
            sx={{ width: "100%", margin: "0 auto" }}
          >
            {cityArea.map((cur, idx) => (
              <MenuItem value={cur} key={idx}>
                {cur}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">구/군</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={region}
            label="Age"
            onChange={handleChangeRegion}
            sx={{ width: "100%", margin: "0 auto" }}
          >
            {city === "서울특별시"
              ? regionArea[0].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "인천광역시"
              ? regionArea[1].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "대전광역시"
              ? regionArea[2].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "광주광역시"
              ? regionArea[3].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "대구광역시"
              ? regionArea[4].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "울산광역시"
              ? regionArea[5].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "부산광역시"
              ? regionArea[6].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "경기도"
              ? regionArea[7].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "강원도"
              ? regionArea[8].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "충청북도"
              ? regionArea[9].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "충청남도"
              ? regionArea[10].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "전라북도"
              ? regionArea[11].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "전라남도"
              ? regionArea[12].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "경상북도"
              ? regionArea[13].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "경상남도"
              ? regionArea[14].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "제주도"
              ? regionArea[15].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : null}
          </Select>
        </FormControl>
      </Box>
    </React.Fragment>
  );
};

export default SetLocation;
