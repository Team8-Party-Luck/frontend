import React from "react";
import styled from "styled-components";
//리덕스
import { history } from "../../redux/configStore";
//이미지
import goArrow from "../../static/images/icon/arw_gray.png";
//컬러시스템
import { color } from "../../shared/ColorSystem";

const Menu = (props) => {
  return (
    <WrapBox>
      <MenuText>메뉴</MenuText>
      <ListBox
        onClick={() => {
          history.push("/joined");
        }}
      >
        <div>
          참여 히스토리 <CountText>{props?.joinedData?.length}</CountText>
        </div>
        <ArrowImg src={goArrow} alt="애로우이미지" />
      </ListBox>
      <ListBox
        onClick={() => {
          history.push("/scrap");
        }}
      >
        <div>
          찜한 파티 <CountText>{props?.scrapData?.length}</CountText>
        </div>
        <ArrowImg src={goArrow} alt="애로우이미지" />
      </ListBox>
      <ListBox
        onClick={() => {
          history.push("/account");
        }}
      >
        계정
        <ArrowImg src={goArrow} alt="애로우이미지" />
      </ListBox>
      <ListBox
        onClick={() => {
          history.push("/inquary");
        }}
      >
        문의하기
        <ArrowImg src={goArrow} alt="애로우이미지" />
      </ListBox>
    </WrapBox>
  );
};

const WrapBox = styled.div`
  width: 100%;
  padding: 1.2em;
`;

const MenuText = styled.p`
  font-size: 0.8em;
  color: ${color.sub1};
  margin-top: 1em;
  margin-bottom: 0.5em;
`;

const ListBox = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  cursor: pointer;
`;

const CountText = styled.span`
  color: ${color.disabled};
  margin-left: 0.5em;
`;

const ArrowImg = styled.img`
  width: 0.55em;
`;

export default Menu;
