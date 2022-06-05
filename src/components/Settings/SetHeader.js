import React from "react";
import styled from "styled-components";
import { color } from "../../shared/ColorSystem";

const SetHeader = (props) => {
  const { gender, age, city, region, food, nickname, intro, count } = props;
  return (
    <HeaderBox>
      <Contain>
        {gender &&
        age &&
        city &&
        region &&
        food.length !== 0 &&
        nickname &&
        intro ? (
          <Progress width={(5 / 5) * 100 + "%"} BgColor={color.primary} />
        ) : (
          <Progress width={(count / 5) * 100 + "%"} BgColor={color.primary} />
        )}
        {/* <Progress width={(count / 5) * 100 + "%"} /> */}
      </Contain>
      <HeaderText>
        이제 프로필 정보 입력 후 <br /> 바로 잇츨링을 사용할 수 있습니다!🙌🏻
      </HeaderText>
    </HeaderBox>
  );
};

const Contain = styled.div`
  margin: 0.5em auto;
  background-color: ${color.pale};
  width: 100%;
  height: 0.7em;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;
const Progress = styled.div`
  background: ${(props) => props.BgColor};
  // background: red;
  width: ${(props) => props.width};
  height: 100%;
  transition: width 1s;
  border-radius: 20px;
`;

const HeaderBox = styled.div`
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
`;

const HeaderText = styled.p`
  margin-top: 1em;
  font-size: 1.1em;
`;

export default SetHeader;
