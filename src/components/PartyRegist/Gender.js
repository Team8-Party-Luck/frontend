import React, { useState } from "react";
import styled from "styled-components";

import radioButton from "../../static/images/icon/라디오버튼.png";
import radioButtonSelc from "../../static/images/icon/라디오버튼-1.png";

const RowRadioButtonsGroup = ({ gender, setGender }) => {
  const [form, setForm] = useState("");

  const handleRadio = (e) => {
    setGender(e.target.value);
  };
  return (
    <React.Fragment>
      <span style={{ display: "flex", alignItems: "center" }}>
        {gender === "모두" ? (
          <img
            alt="라디오버튼"
            src={radioButtonSelc}
            style={{ width: "1.2rem", height: "1.2rem" }}
            value="모두"
            onClick={() => {
              setGender("모두");
            }}
          />
        ) : (
          <img
            alt="라디오버튼"
            src={radioButton}
            style={{ width: "1.2rem", height: "1.2rem" }}
            value="모두"
            onClick={() => {
              setGender("모두");
            }}
          />
        )}
         <span style={{ marginLeft:'0.3rem', marginRight: "1rem" }}>모두</span>
        {gender === "남성" ? (
          <img
            alt="라디오버튼"
            src={radioButtonSelc}
            style={{ width: "1.2rem", height: "1.2rem" }}
            value="남성"
            onClick={() => {
              setGender("남성");
            }}
          />
        ) : (
          <img
            alt="라디오버튼"
            src={radioButton}
            style={{ width: "1.2rem", height: "1.2rem" }}
            value="남성"
            onClick={() => {
              setGender("남성");
            }}
          />
        )}
<span style={{ marginLeft:'0.3rem', marginRight: "1rem" }}>남성</span>
        {gender === "여성" ? (
          <img
            alt="라디오버튼"
            src={radioButtonSelc}
            style={{ width: "1.2rem", height: "1.2rem" }}
            value="여성"
            onClick={() => {
              setGender("여성");
            }}
          />
        ) : (
          <img
            alt="라디오버튼"
            src={radioButton}
            style={{ width: "1.2rem", height: "1.2rem",  }}
            value="여성"
            onClick={() => {
              setGender("여성");
            }}
          />
        )}
        <span style={{marginLeft:'0.3rem', marginRight: "1rem" }}>여성</span>
      </span>
      {/* <label>
        <ImageRadio
          type="radio"
          value="모두"
          checked={gender === "모두"}
          onChange={handleRadio}
        />
        모두
      </label>
      <label>
        <ImageRadio
          type="radio"
          value="남성"
          checked={gender === "남성"}
          onChange={handleRadio}
        />
        남성
      </label>
      <label>
        <ImageRadio
          type="radio"
          value="여성"
          checked={gender === "여성"}
          onChange={handleRadio}
        />
        여성
      </label> */}
    </React.Fragment>
  );
};

const ImageRadio = styled.input`
  height: 18px;
  width: 18px;
  vertical-align: middle;
  margin: 15px 7px 15px 10px;
  accent-color: #f7543e;
`;

export default RowRadioButtonsGroup;
