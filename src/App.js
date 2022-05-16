import Login from "./pages/Login";
import Setting from "./pages/Setting";
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
import Edit from "./pages/Edit";
import Spinner from "./components/Spinner";
import Inquary from "./pages/Inquary";
import Account from "./pages/Account";
import Joined from "./pages/Joined";
import Scrap from "./pages/Scrap";
import ChatDetail from "./pages/ChatDetail";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "./redux/modules/user";
import PartyRevise from "./components/PartyRegist/PartyRevise";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.userCheckDB());
  }, []);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/alarm" exact component={Alarm} />
        <Route path="/seeMore" exact component={SeeMore} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/chat/:roomId" exact component={ChatDetail} />
        <Route path="/regi" exact component={PartyRegist} />
        <Route path="/partyInfo/:partyId" exact component={PartyInfo} />
        <Route path="/revise" exact component={PartyRevise} />
        <Route path="/userList" exact component={UserList} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/edit" exact component={Edit} />
        <Route path="/spin" exact component={Spinner} />
        <Route path="/setting" exact component={Setting} />
        <Route path="/joined" exact component={Joined} />
        <Route path="/scrap" exact component={Scrap} />
        <Route path="/Account" exact component={Account} />
        <Route path="/inquary" exact component={Inquary} />
        <Route path="/auth/kakao" component={OAuth2RedirectHandeler}></Route>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
