import React, { useState } from "react";
import styled from "styled-components";

//컬러시스템
import { color } from "../../shared/ColorSystem";

const SetAge = (props) => {
  const { age, setAge, count, setCount } = props;
  const [value, setValue] = useState(false);

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
        {age === "10대" ? (
          <CheckBox
            onClick={() => {
              setAge("10대");
            }}
          >
            <CheckText>10대</CheckText>
          </CheckBox>
        ) : (
          <NonCheckBox
            onClick={() => {
              setAge("10대");
              {
                !age ? add_count() : setValue();
              }
            }}
          >
            <NonCheckText>10대</NonCheckText>
          </NonCheckBox>
        )}
        {age === "20대" ? (
          <CheckBox
            onClick={() => {
              setAge("20대");
            }}
          >
            <CheckText>20대</CheckText>
          </CheckBox>
        ) : (
          <NonCheckBox
            onClick={() => {
              setAge("20대");
              {
                !age ? add_count() : setValue();
              }
            }}
          >
            <NonCheckText>20대</NonCheckText>
          </NonCheckBox>
        )}
        {age === "30대" ? (
          <CheckBox
            onClick={() => {
              setAge("30대");
            }}
          >
            <CheckText>30대</CheckText>
          </CheckBox>
        ) : (
          <NonCheckBox
            onClick={() => {
              setAge("30대");
              {
                !age ? add_count() : setValue();
              }
            }}
          >
            <NonCheckText>30대</NonCheckText>
          </NonCheckBox>
        )}
        {age === "40대" ? (
          <CheckBox
            onClick={() => {
              setAge("40대");
            }}
          >
            <CheckText>40대</CheckText>
          </CheckBox>
        ) : (
          <NonCheckBox
            onClick={() => {
              setAge("40대");
              {
                !age ? add_count() : setValue();
              }
            }}
          >
            <NonCheckText>40대</NonCheckText>
          </NonCheckBox>
        )}
        {age === "50대" ? (
          <CheckBox
            onClick={() => {
              setAge("50대");
            }}
          >
            <CheckText>50대</CheckText>
          </CheckBox>
        ) : (
          <NonCheckBox
            onClick={() => {
              setAge("50대");
              {
                !age ? add_count() : setValue();
              }
            }}
          >
            <NonCheckText>50대</NonCheckText>
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
  margin: 0 auto;
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
  margin: 0 auto;
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

export default SetAge;
