import React from "react";
import styled from "styled-components";
//컬러시스템
import { color } from "../../shared/ColorSystem";

const EditDisabled = (props) => {
  const { gender, age } = props;
  return (
    <React.Fragment>
      <FlexBox>
        <NicknameText>성별</NicknameText>
        <DisabledText>수정 불가한 정보입니다</DisabledText>
      </FlexBox>
      <NonFixBox>{gender}</NonFixBox>
      <FlexBox>
        <NicknameText>나이</NicknameText>
        <DisabledText>수정 불가한 정보입니다</DisabledText>
      </FlexBox>
      <NonFixBox>{age}</NonFixBox>
    </React.Fragment>
  );
};

const FlexBox = styled.div`
  width: 100%;
  display: flex;
`;

const NonFixBox = styled.div`
  width: 100%;
  height: 2.3em;
  background: ${color.line};
  border-radius: 3px;
  margin-bottom: 1em;
  margin-top: 0.3em;
  padding-left: 0.7em;
  padding-top: 0.6em;
`;

const NicknameText = styled.p`
  font-size: 1em;
  padding-bottom: 0.2em;
`;

const DisabledText = styled.p`
  color: ${color.disabled};
  font-size: 0.9em;
  margin-left: 1em;
`;

export default EditDisabled;
