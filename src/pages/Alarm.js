import React from "react";
import AlarmCard from "../components/Alarm/AlarmCard";
// import HeaderNav from '../shared/HeaderNav';

// import { actionCreators as userActions } from "../../redux/modules/user";

const Alarm = () => {
  return (
    <React.Fragment>
      {/* <HeaderNav name="알림"/> */}
      <AlarmCard />
      <AlarmCard />
    </React.Fragment>
  );
};

export default Alarm;
