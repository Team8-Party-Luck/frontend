//잘못된 경로로 들어왔을 시 보여주는 페이지
import React from "react";
import styled from "styled-components";

//리덕스
import { history } from "../redux/configStore";

//컴포넌트
import NullData from "../shared/NullData";

//컬러시스템
import { color } from "./ColorSystem";

const NotFound = () => {
  return (
    <WrapBox>
      <NullData title={"앗 요청하신 페이지를 찾을 수 없습니다!"}> </NullData>
      <BackBtn
        onClick={() => {
          history.replace("/");
        }}
      >
        홈으로 돌아가기
      </BackBtn>
    </WrapBox>
  );
};

const WrapBox = styled.div`
  width: 100%;
  padding: 1em;
  padding-top: 12em;
`;

const BackBtn = styled.button`
  width: 100%;
  height: 3em;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  margin-top: 5em;
  background-color: ${color.primary};
  color: white;
`;

export default NotFound;
