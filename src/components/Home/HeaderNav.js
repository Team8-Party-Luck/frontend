import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import { actionCreators as alarmActions } from "../../redux/modules/alarm";
import HomeLogo from "../../static/images/logo/로고(4배수).png";
import AlarmImg from "../../static/images/icon/ic_alarm.png";
import GuideIcon from "../../static/images/icon/ic_guide2@4x.png";
//pwa추가버튼 후에 추가 에정
// import Add from "../../shared/Add";

// import SockJS from "sockjs-client";
// import * as Stomp from "stompjs";
// let sock = new SockJS("http://54.180.88.119/ws-stomp");
// let ws = Stomp.over(sock);
// const token = sessionStorage.getItem("token");
// const userid = sessionStorage.getItem("userid");

const HeaderNav = () => {
  const history = useHistory();
  // const dispatch = useDispatch();

  // 알람 서버 연결
  // function ConnectSub() {
  //   try {
  //     ws.connect({ token: token }, () => {
  //       console.log("STOMP Connection");

  //       ws.subscribe(`/alarm/${userid}`, (res) => {
  //         console.log("받은 메세지", res);
  //         const newMessage = JSON.parse(res.body);

  //         // dispatch(getAlarm(newMessage));
  //       });
  //     });
  //   } catch (error) {
  //     console.log(error.response);
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   ConnectSub();

  //   return async () => {
  //     try {
  //       ws.disconnect(() => {
  //         ws.unsubscribe("sub-0");
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // }, []);

  //전체조회
  // /alarmList
  // React.useEffect(() => {
  //   dispatch(alarmActions.ConnectSub());

  //   // return () => {
  //   //   dispatch(alarmActions.DisConnectUnsub());
  //   // };
  // }, []);

  const alarmData = useSelector((state) => state?.alarm?.alarm);
  console.log(alarmData);

  return (
    <WrapBox>
      <LogoBox>
        <img src={HomeLogo} style={{ width: "60%" }} alt="홈로고" />{" "}
      </LogoBox>
      <FlexBox>
        <ImgBox
          src={GuideIcon}
          alt="가이드북 아이콘"
          onClick={() => {
            history.push(`/guide`);
          }}
        />
        <ImgBox
          src={AlarmImg}
          alt="알람로고"
          onClick={() => {
            history.push("/alarm");
          }}
        />
      </FlexBox>
    </WrapBox>
  );
};

const WrapBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5em;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  z-index: 100;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.img`
  width: 1.5em;
  margin-left: 1em;
  cursor: pointer;
`;

const LogoBox = styled.div`
  width: 100%;
`;

export default HeaderNav;
