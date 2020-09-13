import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";

import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalProvider>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </GlobalProvider>
      </div>
    );
  }
}

export default App;
