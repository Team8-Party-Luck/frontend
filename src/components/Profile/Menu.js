import React from "react";
import { history } from "../../redux/configStore";
import goArrow from "../../static/images/icon/arw_gray.png";
import styled from "styled-components";
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
        <img src={goArrow} style={{ width: 9, height: 15 }} />
      </ListBox>
      <ListBox
        onClick={() => {
          history.push("/scrap");
        }}
      >
        <div>
          찜한 파티 <CountText>{props?.scrapData?.length}</CountText>
        </div>
        <img src={goArrow} style={{ width: 9, height: 15 }} />
      </ListBox>
      <ListBox
        onClick={() => {
          history.push("/account");
        }}
      >
        계정 <img src={goArrow} style={{ width: 9, height: 15 }} />
      </ListBox>
      <ListBox
        onClick={() => {
          history.push("/inquary");
        }}
      >
        문의하기 <img src={goArrow} style={{ width: 9, height: 15 }} />
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
  color: gray;
  font-weight: 600;
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
  color: #ccc;
  margin-left: 0.5em;
`;

export default Menu;
