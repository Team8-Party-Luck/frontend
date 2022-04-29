import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import InitialSettings from "./pages/InitialSettings";
import Setting from "./pages/Setting";
import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configStore";
import OAuth2RedirectHandeler from "./shared/OAuth2RedirectHandeler";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/intial" exact component={InitialSettings} />
        <Route path="/setting" exact component={Setting} />
        <Route path="/auth/kakao" component={OAuth2RedirectHandeler}></Route>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
