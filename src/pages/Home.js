import React, { useEffect } from "react";
import BottomNav from "../shared/BottomNav";
import HeaderNav from "../components/Home/HeaderNav";
import SimpleSlider from "../components/Home/SimpleSlider";
import PartyList from "../components/Home/PartyList";
import { history } from "../redux/configStore";

const Home = () => {
  return (
    <React.Fragment>
      <HeaderNav />
      <SimpleSlider />
      <PartyList />
      <BottomNav />
    </React.Fragment>
  );
};

export default Home;
