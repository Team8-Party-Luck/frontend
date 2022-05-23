import React from "react";
import styled from "styled-components";
//컬러시스템
import { color } from "../../shared/ColorSystem";

const EditDetail = (props) => {
  const { intro, setIntro, sns, setSns } = props;
  return (
    <WrapBox>
      <NicknameText>자기소개</NicknameText>
      <NicknameInput
        onChange={(e) => {
          setIntro(e.target.value);
        }}
        defaultValue={intro}
      />
      <NicknameText>SNS</NicknameText>
      <NicknameInput
        onChange={(e) => {
          setSns(e.target.value);
        }}
        defaultValue={sns}
      />
    </WrapBox>
  );
};

const WrapBox = styled.div`
  width: 100%;
  margin-top: 1.5em;
`;

const NicknameText = styled.p`
  font-size: 1em;
  margin: 0.2em 0;
  margin-top: 1em;
`;

const NicknameInput = styled.input`
  width: 100%;
  height: 2.5em;
  border: 1px solid ${color.line};
  border-radius: 3px;
  padding-left: 0.5em;
  font-size: 1em;
`;

export default EditDetail;
