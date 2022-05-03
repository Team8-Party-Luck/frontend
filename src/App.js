import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Setting from "./pages/Setting";
import Setting2 from "./pages/Setting2";
import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configStore";
import Home from "./pages/Home";
import PartyRegist from "./pages/PartyRegist";
import Alarm from "./pages/Alarm";
import SeeMore from "./components/Home/SeeMore";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import OAuth2RedirectHandeler from "./shared/OAuth2RedirectHandeler";
import UserList from "./pages/UserList";
import PartyInfo from "./pages/PartyInfo";
import { useDispatch } from "react-redux";
import { actionCreators as crewActions } from "./redux/modules/crew";

function App() {
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(crewActions.getDataDB());
  // }, []);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/alarm" exact component={Alarm} />
        <Route path="/seeMore" exact component={SeeMore} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/regi" exact component={PartyRegist} />
        <Route path="/partyInfo" exact component={PartyInfo} />
        <Route path="/userList" exact component={UserList} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/setting" exact component={Setting} />
        <Route path="/setting2" exact component={Setting2} />
        <Route path="/auth/kakao" component={OAuth2RedirectHandeler}></Route>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
