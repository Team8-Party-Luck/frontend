//문의하기 페이지
import React from "react";
import styled from "styled-components";

//컴포넌트
import Header from "../shared/Header";
import NullData from "../shared/NullData";

const Inquary = () => {
  return (
    <div>
      <Header name={"문의하기"} />
      <ListBox>
        <NullData title={"앗! 준비중인 서비스입니다"} />
      </ListBox>
    </div>
  );
};

const ListBox = styled.div`
  width: 100%;
  padding: 1.5em;
  padding-top: 20em;
  padding-bottom: 5em;
  overflow-y: auto;
`;

export default Inquary;
