import React, { useEffect } from "react";
import BottomNav from "../shared/BottomNav";
import HeaderNav from "../components/Home/HeaderNav";
import SimpleSlider from "../components/Home/SimpleSlider";
import PartyList from "../components/Home/PartyList";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as crewActions } from "../redux/modules/crew";

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(crewActions.getDataDB());
  }, []);

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
