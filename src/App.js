import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configStore";
import Home from "./pages/Home";
import PartyRegist from "./pages/PartyRegist";
import User from "./pages/User";
import Alarm from "./pages/Alarm";
import SeeMore from "./components/Home/SeeMore";
import Chat from "./pages/Chat";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/alarm" exact component={Alarm} />
        <Route path="/seeMore" exact component={SeeMore} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/regi" exact component={PartyRegist} />
        <Route path="/user" exact component={User} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
