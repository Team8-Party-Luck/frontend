import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";

import { cityArea } from "../../shared/CityData";
import { regionArea } from "../../shared/CityData";
import { actionCreators as crewActions } from "../../redux/modules/crew";

const RegionSelect =({ city, setCity, region, setRegion })  => {
  const dispatch = useDispatch();

  


  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangeRegion =  (e) => {

       setRegion(e.target.value);

      let answer =  `${city} ${e.target.value}`;
      const regionInfo = {
        answer : answer,
      }
      console.log(regionInfo)
      dispatch(crewActions.getRegionData(regionInfo));
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          margin: "auto",
          marginTop: 2,
          marginBottom: 1,
        }}
      >
        <FormControl fullWidth sx={{ minWidth: 120 }} size="small">
          <InputLabel>시/도</InputLabel>
          <Select
            value={city || ''}
            onChange={handleChangeCity}
            sx={{ width: "96%", margin: "0 auto" }}
          >
            {cityArea.map((cur, idx) => (
              <MenuItem value={cur} key={idx}>
                {cur}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          sx={{ minWidth: 120 }}
          size="small"
        >
          <InputLabel>구/군</InputLabel>
          <Select
            value={region || ''}
            onChange={handleChangeRegion}
            sx={{ width: "85%", margin: "0 auto" }}
          >
            {city === "서울"
              ? regionArea[0].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "부산"
              ? regionArea[1].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "대구"
              ? regionArea[2].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "인천"
              ? regionArea[3].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "광주"
              ? regionArea[4].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "대전"
              ? regionArea[5].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "울산"
              ? regionArea[6].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "세종특별자치시"
              ? regionArea[7].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "경기"
              ? regionArea[8].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "강원"
              ? regionArea[9].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "충북"
              ? regionArea[10].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "충남"
              ? regionArea[11].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "전북"
              ? regionArea[12].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "전남"
              ? regionArea[13].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "경북"
              ? regionArea[14].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
              : city === "경남"
              ? regionArea[15].map((cur, idx) => (
                  <MenuItem value={cur} key={idx}>
                    {cur}
                  </MenuItem>
                ))
                : city === "제주특별자치도"
                ? regionArea[16].map((cur, idx) => (
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
}




export default RegionSelect;