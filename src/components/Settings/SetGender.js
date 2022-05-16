import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const SetGender = (props) => {
  const { gender, setGender, count, setCount } = props;
  const [value, setValue] = useState(true);

  function add_count() {
    if (count === 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <React.Fragment>
      <WrapBox>
        {gender === "남자" ? (
          <CheckBox
            onClick={() => {
              setGender("남자");
              setValue(!value);
            }}
          >
            <CheckText>남자</CheckText>
          </CheckBox>
        ) : (
          <NonCheckBox
            onClick={() => {
              setGender("남자");
              {
                !gender ? add_count() : setValue();
              }
            }}
          >
            <NonCheckText>남자</NonCheckText>
          </NonCheckBox>
        )}
        {gender === "여자" ? (
          <CheckBox
            onClick={() => {
              setGender("여자");
              setValue(!value);
            }}
          >
            <CheckText>여자</CheckText>
          </CheckBox>
        ) : (
          <NonCheckBox
            onClick={() => {
              setGender("여자");
              {
                !gender ? add_count() : setValue();
              }
            }}
          >
            <NonCheckText>여자</NonCheckText>
          </NonCheckBox>
        )}
      </WrapBox>
    </React.Fragment>
  );
};

const WrapBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 0.5em;
  margin-bottom: 2em;
`;

const CheckBox = styled.div`
  width: 4em;
  height: 2em;
  border-radius: 3em;
  margin-right: 0.5em;
  background: #ff6853;
  padding: 0.5em;
  margin: 0 auto;
`;
const NonCheckBox = styled.div`
  width: 4em;
  height: 2em;
  border-radius: 3em;
  margin-right: 0.5em;
  border: 1px solid #dfdfdf;
  padding: 0.45em;
  margin: 0 auto;
`;

const CheckText = styled.p`
  width: fit-content;
  color: white;
  font-size: 0.9em;
  margin: 0 auto;
`;

const NonCheckText = styled.p`
  width: fit-content;
  color: black;
  font-size: 0.9em;
  margin: 0 auto;
`;

export default SetGender;
