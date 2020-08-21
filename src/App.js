import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          {/* Sidebar */}
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Chat />
            </Route>
            <Route path="/rooms/:roomId">
              {/* Chat */}
              <Chat />
            </Route>
            {/* <Route path="/">
              <h1>Home screen</h1>
            </Route> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
