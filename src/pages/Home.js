import React, { useEffect } from "react";
import BottomNav from "../shared/BottomNav";
import HeaderNav from "../components/Home/HeaderNav";
import PartyList from "../components/Home/PartyList";
import HomeBanner from "../components/Home/HomeBanner";
import { history } from "../redux/configStore";
import Add from "../shared/Add";


const Home = () => {
  return (
    <React.Fragment>
      <HeaderNav />
      <HomeBanner />
      <PartyList />
      <Add/>
      <BottomNav />
      
    </React.Fragment>
  );
};

export default Home;
