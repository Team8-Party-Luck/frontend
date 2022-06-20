import * as React from "react";
import styled from "styled-components";

import ic_alarm_cancel from "../../static/images/icon/ic_alarm_cancel.png";
import ic_alarm_complete from "../../static/images/icon/ic_alarm_complete.png";
import ic_alarm_edit from "../../static/images/icon/ic_alarm_edit.png";
import ic_alarm_party from "../../static/images/icon/ic_alarm_party.png";

export default function AlarmCard(cur) {
  console.log(cur.image)
  console.log(cur.title)
  console.log(cur.alarms)
  console.log(cur.createdAt)
  console.log(cur.store)
  console.log(cur.userId)
  return (
    
    <React.Fragment>
      <AlarmDiv>
        <MessageDiv>
          <img src={ic_alarm_edit} alt="ic_alarm_edit" />
          <div>{cur.alarms}</div>
          <div>오후 2:30</div>
        </MessageDiv>
        <MessageConDiv>
          <div>
            <p>파티 이름이 들어갈 자리입니다</p>
            <p>{cur.image}</p>
          </div>
          <img
          alt="파티 이미지"
            src={cur.title}
          />
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
  border: 1px solid gray;
  padding: 0.5rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p:nth-child(2) {
    margin-top: 0.2rem;
    font-size: 0.9rem;
    color: gray;
  }
  img:last-child {
    width: 3rem;
    height: 3rem;
    border-radius: 15px;
  }
`;
