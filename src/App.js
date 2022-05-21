import Login from "./pages/Login";
import Setting from "./pages/Setting";
import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configStore";
import Home from "./pages/Home";
import PartyRegist from "./pages/PartyRegist";
import Alarm from "./pages/Alarm";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import OAuth2RedirectHandeler from "./shared/OAuth2RedirectHandeler";
import UserList from "./pages/UserList";
import PartyInfo from "./pages/PartyInfo";
import Edit from "./pages/Edit";
import Spinner from "./components/Spinner";
import Inquary from "./pages/Inquary";
import Account from "./pages/Account";
import Joined from "./pages/Joined";
import Scrap from "./pages/Scrap";
import ChatDetail from "./pages/ChatDetail";
import PartyRevise from "./components/PartyRegist/PartyRevise";
import Modal from "./shared/Modal";
import ConfirmPage from "./pages/ConfirmPage";
import styled from "styled-components";
import background from './static/images/website/웹페이지.png'

// import { actionCreators as alarmActions } from "./redux/modules/alarm";

function App() {
  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(alarmActions.ConnectSub());
  // }, []);

  return (
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/alarm" exact component={Alarm} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/chatdetail/:roomId" exact component={ChatDetail} />
        <Route path="/regi" exact component={PartyRegist} />
        <Route path="/partyInfo/:partyId" exact component={PartyInfo} />
        <Route path="/revise" exact component={PartyRevise} />
        <Route path="/userList/:partyid" exact component={UserList} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/edit" exact component={Edit} />
        <Route path="/spin" exact component={Spinner} />
        <Route path="/setting" exact component={Setting} />
        <Route path="/joined" exact component={Joined} />
        <Route path="/scrap" exact component={Scrap} />
        <Route path="/Account" exact component={Account} />
        <Route path="/inquary" exact component={Inquary} />
        <Route path="/confirm/:partyId" exact component={ConfirmPage} />
        <Route path="/modal" exact component={Modal} />
        <Route path="/auth/kakao" component={OAuth2RedirectHandeler}></Route>
      </ConnectedRouter>

  );
}

export default App;

