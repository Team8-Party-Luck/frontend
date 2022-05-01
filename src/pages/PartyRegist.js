import React from 'react';
import RegiHeaderNav from '../components/PartyRegist/RegiHeaderNav';
import RegiWrite from '../components/PartyRegist/RegiWrite';
import BottomNav from '../shared/BottomNav';
import HeaderNav from '../shared/HeaderNav';

const PartyRegist = () => {
  return(<React.Fragment>
    <RegiHeaderNav/>
    <RegiWrite/>
    <BottomNav/>
  </React.Fragment>)
}

export default PartyRegist