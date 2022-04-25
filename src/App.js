import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configStore";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={Login} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
