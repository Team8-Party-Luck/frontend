import React, { useState, useEffect } from "react";
import AlarmCard from "../components/Alarm/AlarmCard";
import Header from "../shared/Header";
import styled from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { actionCreators as alarmActions } from "../redux/modules/alarm";
const Alarm = () => {

  const alarmList = useSelector((state) => state?.alarm?.list);
  console.log(alarmList);


  const dispatch = useDispatch();
  // useEffect(() => {
  //   const getAlarmData = () => {
  //     axios
  //       .get(`http://54.180.88.119/alarmList`, {
  //         headers: {
  //           Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getAlarmData();
  // }, []);
  
  React.useLayoutEffect(() => {
    dispatch(alarmActions.getAlarmData());
  }, [])
  
  return (
    <React.Fragment>
      <Header name={"알람"} />
      <AlarmBox>
        {alarmList?.map((cur, idx) => (
          <AlarmCard {...cur} key={idx} />
        ))}

        <AlarmCard />
      </AlarmBox>
    </React.Fragment>
  );
};

export default Alarm;

const AlarmBox = styled.div`
  padding-top: 3rem;
`;
