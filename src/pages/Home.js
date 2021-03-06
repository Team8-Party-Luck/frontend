import React from "react";
import BottomNav from "../shared/BottomNav";
import HeaderNav from "../components/Home/HeaderNav";
import PartyList from "../components/Home/PartyList";
import HomeBanner from "../components/Home/HomeBanner";

const Home = () => {
  return (
    <React.Fragment>
      <HeaderNav />
      <HomeBanner />
      <PartyList />
      <BottomNav />
    </React.Fragment>
  );
};

export default Home;
