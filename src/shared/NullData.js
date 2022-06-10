//조회된 값이 없을 경우 보여주는 컴포넌트
import React from "react";
import styled from "styled-components";

//이미지
import NullLogo from "../static/images/logo/Frame 220@2x.png";

const NullData = (props) => {
  return (
    <LogoBox>
      <img
        src={NullLogo}
        alt="컨펌로고"
        style={{ width: "50%", margin: "0 auto" }}
      />
      <TitleText>{props.title}</TitleText>
    </LogoBox>
  );
};

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.p`
  font-size: 1em;
  margin: 0 auto;
  text-align: center;
  margin-top: 2em;
  color: #5b5b5b;
`;

export default NullData;
