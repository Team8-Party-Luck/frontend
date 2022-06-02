import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configStore";
import styled from "styled-components";
import {
  Login,
  Setting,
  Home,
  PartyRegist,
  Alarm,
  Chat,
  Profile,
  OAuth2RedirectHandeler,
  UserList,
  PartyInfo,
  Edit,
  Inquary,
  Account,
  Joined,
  Scrap,
  ChatDetail,
  PartyRevise,
  Guide,
  ConfirmPage,
  NotFound,
} from "./pages/index.js";

import background from "./static/images/website/웹페이지.png";
import MobileFrame from "./components/common/MobileFrame";

// import { actionCreators as alarmActions } from "./redux/modules/alarm";

function App() {
  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(alarmActions.ConnectSub());
  // }, []);

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <Fullscreen>
      <Wrap>
        <MobileFrame className="MobileFramePage">
          <ConnectedRouter history={history}>
            <Switch>
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
              <Route path="/setting" exact component={Setting} />
              <Route path="/joined" exact component={Joined} />
              <Route path="/scrap" exact component={Scrap} />
              <Route path="/Account" exact component={Account} />
              <Route path="/inquary" exact component={Inquary} />
              <Route path="/confirm/:partyId" exact component={ConfirmPage} />
              <Route path="/guide" exact component={Guide} />
              <Route path="/auth/kakao" component={OAuth2RedirectHandeler} />
              <Route path="/*" exact component={NotFound} />
            </Switch>
          </ConnectedRouter>
        </MobileFrame>
      </Wrap>
    </Fullscreen>
  );
}

export default App;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  .MobileFramePage {
    z-index: 9999;
  }
`;

const Fullscreen = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  display: flex;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 540px) {
    justify-content: center;
  }
  @media (max-width: 1579px) and (min-width: 541px) {
    justify-content: flex-end;
  }
  @media (min-width: 1580px) {
  }
`;
