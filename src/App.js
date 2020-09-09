import React from "react";
import { Route, Switch } from "react-router";

import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";

import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/sign-in">
            <Login />
          </Route>
        </Switch>
      </GlobalProvider>
    </div>
  );
}

export default App;
