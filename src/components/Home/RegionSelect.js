import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MenuItem, Select, FormControl, InputLabel, Box } from "@mui/material";
import styled from "styled-components";

import { cityArea } from "../../shared/CityData";
import { regionArea } from "../../shared/CityData";
import { actionCreators as crewActions } from "../../redux/modules/crew";

//지역선택 scroll
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const RegionSelect = ({ city, setCity, region, setRegion }) => {
  const dispatch = useDispatch();

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangeRegion = (e) => {
    setRegion(e.target.value);

    let answer = `${city} ${e.target.value}`;
    const regionInfo = {
      answer: answer,
    };
    // console.log(regionInfo);
    dispatch(crewActions.getRegionData(regionInfo));
  };

  return (
    <React.Fragment>
      <RegionBox>
        <FormControl fullWidth sx={{ minWidth: 120 }} size="small">
          {/* <InputLabel display="placeholder">시/도</InputLabel> */}
          <Select
            displayEmpty
            MenuProps={MenuProps}
            value={city || ""}
            onChange={handleChangeCity}
            style={{ width: "90%", margin: "0 auto", background: "white" }}
          >
            <MenuItem value="">
              <em>시/도</em>
            </MenuItem>
            {cityArea.map((cur, idx) => (
              <MenuItem value={cur} key={idx}>
                {cur}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ minWidth: 120 }} size="small">
          {/* <InputLabel  displayEmpty id="demo-select-small">구/군</InputLabel>/ */}
          <Select
            displayEmpty
            MenuProps={MenuProps}
            labelId="demo-select-small"
            id="demo-select-small"
            value={region || ""}
            onChange={handleChangeRegion}
            style={{ width: "90%", margin: "0 auto", background: "white" }}
          >
            <MenuItem value="">
              <em>구/군</em>
            </MenuItem>
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
      </RegionBox>
    </React.Fragment>
  );
};

export default RegionSelect;

const RegionBox = styled.div`
  display: flex;
  width: 100%;
  height: 4.6em;
  background: #eee;
  padding: 1em 2em;
`;


