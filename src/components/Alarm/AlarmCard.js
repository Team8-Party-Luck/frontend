import * as React from "react";
import styled, { css } from "styled-components";

import ic_alarm_cancel from "../../static/images/icon/ic_alarm_cancel.png";
import ic_alarm_complete from "../../static/images/icon/ic_alarm_complete.png";
import ic_alarm_edit from "../../static/images/icon/ic_alarm_edit.png";
import ic_alarm_party from "../../static/images/icon/ic_alarm_party.png";

export default function AlarmCard() {
  return (
    <React.Fragment>
      <AlarmDiv>
        <MessageDiv>
          <img src={ic_alarm_edit} alt="ic_alarm_edit" />
          <div>신청한 파티의 정보가 수정되었습니다.</div>
          <div>오후 2:30</div>
        </MessageDiv>
        <MessageConDiv>
          <div>
          <p>파티명을 입력해요파티명을 입력해요</p>
          <p>매드포 갈릭 홍대입구점</p>
          </div>
          <img alt="임시 이미지" src="https://images.unsplash.com/photo-1653257924069-dac9af08fdf6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400" />
        </MessageConDiv>
      </AlarmDiv>
    </React.Fragment>
  );
}

//전체 박스 div
const AlarmDiv = styled.div`
  margin: 1rem;
`;

//메시지 내용 div
const MessageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  img:first-child {
    width: 2.2rem;
    height: 2.2rem;
  }
  div:nth-child(2) {
    width: 75%;
    font-weight: bold;
  }
  div:nth-child(3) {
    color: gray;
    font-size: 0.75rem;
    width: 18%;
  }
`;

// 메시지 content div
const MessageConDiv = styled.div`
border:1px solid gray;
padding:0.5rem;
border-radius:15px;
margin-bottom:1rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
  p:nth-child(2){
    margin-top:0.2rem;
    font-size:0.9rem;
    color:gray;
  }
  img:last-child{
    width: 3rem;
    height:3rem;
    border-radius:15px;
  }

`
