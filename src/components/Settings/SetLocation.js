import React from "react";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import { cityArea } from "../../shared/CityData";
import { regionArea } from "../../shared/CityData";

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

const SetLocation = (props) => {
  const { city, setCity, region, setRegion, user_info, count, setCount, name } =
    props;

  const [value, setValue] = useState(false);

  function add_count() {
    if (count === 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };
  const handleChangeRegion = (e) => {
    setRegion(e.target.value);
  };

  return (
    <React.Fragment>
      {name ? <InnerText>{name}</InnerText> : null}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          margin: " auto",
          marginTop: 2,
          marginBottom: 4,
        }}
      >
        <FormControl fullWidth sx={{ minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">시/도</InputLabel>
          <Select
            MenuProps={MenuProps}
            labelId="demo-select-small"
            id="demo-select-small"
            value={city}
            defaultValue={user_info?.city}
            label="Age"
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
          onClick={() => {
            {
              !region ? add_count() : setValue();
            }
          }}
        >
          <InputLabel id="demo-select-small">구/군</InputLabel>
          <Select
            MenuProps={MenuProps}
            labelId="demo-select-small"
            id="demo-select-small"
            value={region}
            // defaultValue={user_info?.region}
            label="Age"
            onChange={handleChangeRegion}
            sx={{ width: "96%", margin: "0 auto" }}
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
};

const InnerText = styled.p`
  font-size: 1em;
`;

export default SetLocation;
