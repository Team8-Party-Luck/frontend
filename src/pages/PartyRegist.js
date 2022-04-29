import React from 'react';
import RegiHeaderNav from '../components/PartyRegist/RegiHeaderNav';
import RegiWrite from '../components/PartyRegist/RegiWrite';
import BottomNav from '../shared/BottomNav';

const PartyRegist = () => {
  return(<React.Fragment>
    <RegiHeaderNav/>
    <RegiWrite/>
    <BottomNav/>
  </React.Fragment>)
}

export default PartyRegist