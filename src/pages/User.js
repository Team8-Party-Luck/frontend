import React from 'react';
import UserInfo from '../components/User/UserInfo';
import UserParty from '../components/User/UserParty';
import BottomNav from '../shared/BottomNav';

const User = () => {
  return (<React.Fragment>
    <UserInfo/>
    <UserParty/>
    <BottomNav/>
  </React.Fragment>)
}

export default User;