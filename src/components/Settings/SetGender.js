import React, { useState } from "react";
import styled from "styled-components";

//컬러시스템
import { color } from "../../shared/ColorSystem";

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
        {gender === "남성" ? (
          <CheckBox
            onClick={() => {
              setGender("남성");
              setValue(!value);
            }}
          >
            <CheckText>남성</CheckText>
          </CheckBox>
        ) : (
          <NonCheckBox
            onClick={() => {
              setGender("남성");
              {
                !gender ? add_count() : setValue();
              }
            }}
          >
            <NonCheckText>남성</NonCheckText>
          </NonCheckBox>
        )}
        {gender === "여성" ? (
          <CheckBox
            onClick={() => {
              setGender("여성");
              setValue(!value);
            }}
          >
            <CheckText>여성</CheckText>
          </CheckBox>
        ) : (
          <NonCheckBox
            onClick={() => {
              setGender("여성");
              {
                !gender ? add_count() : setValue();
              }
            }}
          >
            <NonCheckText>여성</NonCheckText>
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
  background: ${color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const NonCheckBox = styled.div`
  width: 4em;
  height: 2em;
  border-radius: 3em;
  border: 1px solid ${color.disabled};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CheckText = styled.p`
  width: fit-content;
  color: white;
  font-size: 0.9em;
  margin: 0 auto;
`;

const NonCheckText = styled.p`
  width: fit-content;
  font-size: 0.9em;
  margin: 0 auto;
`;

export default SetGender;
