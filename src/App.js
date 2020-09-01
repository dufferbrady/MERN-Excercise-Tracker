import React from "react";

import Dashboard from "./components/Dashboard/Dashboard";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Dashboard />
      </GlobalProvider>
    </div>
  );
}

export default App;
