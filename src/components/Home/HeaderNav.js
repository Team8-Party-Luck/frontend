import React from "react";
import { useHistory } from "react-router";
// import { useDispatch } from "react-redux";
// import SockJS from "sockjs-client";
// import * as Stomp from "stompjs";

import styled from "styled-components";

// import { actionCreators as alarmActions } from "../../redux/modules/alarm";
import HomeLogo from "../../static/images/logo/로고(4배수).png";
import AlarmImg from "../../static/images/icon/ic_alarm.png";
import GuideIcon from "../../static/images/icon/ic_guide2@4x.png";
import Add from "../../shared/Add";

// let sock = new SockJS("http://54.180.88.119/ws-stomp");
// let ws = Stomp.over(sock);

const HeaderNav = () => {
  const history = useHistory();

  //알람 연결
  // const alarmSub = () => {
  // try {
  //     ws.connect(
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "content-type": "application/json;charset=UTF-8",
  //           accept: "application/json,",
  //         },
  //       },
  //       () => {
  //         console.log("STOMP Connection");

  //         ws.subscribe(`/alarm/${userid}`, (res) => {
  //           console.log("받은 메세지", res);
  //           const newMessage = JSON.parse(res.body);

  //           dispatch(getAlarm(newMessage));
  //           // let messageAl = newMessage.messageAl;
  //           // let partyId = newMessage.messageAl;
  //           // let title = newMessage.messageAl;
  //           // let store = newMessage.messageAl;
  //           // let image = newMessage.messageAl;

  //           // let str = `<AlarmCard></AlarmCard>`;
  //           // $("alarm").append(str);
  //         });
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error.response);
  //     console.log(error);
  //   }
  // };
  // }

  React.useEffect(() => {
    // alarmSub();

    return () => {
      // wsDisConnect();
    };
  }, []);

  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(alarmActions.ConnectSub());
  // }, []);

  return (
    <WrapBox>
      <LogoBox>
        <img src={HomeLogo} style={{ width: "60%" }} alt="홈로고" />{" "}
      </LogoBox>
      asd
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
            // history.push("/alarm");
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
