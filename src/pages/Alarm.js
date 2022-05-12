import React from 'react';
import AlarmCard from '../components/Alarm/AlarmCard';
import HeaderNav from '../shared/HeaderNav';



const Alarm = () => {
  return(<React.Fragment>
    <HeaderNav name="알림"/>
    <AlarmCard/>
    <AlarmCard/>
    <AlarmCard/>
    <AlarmCard/>
    <AlarmCard/>
  </React.Fragment>)
}

export default Alarm;