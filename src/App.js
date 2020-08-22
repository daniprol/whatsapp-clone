import React from "react";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import { useStateValue } from "./StateProvider";
import "./App.css";

function App() {
  // const [user, setUser] = useState(null);
  // const [state, dispatch] = useStateValue();
  // We can also do destructuring directly:
  const [{ user }, dispatch] = useStateValue();

  const indexPage = (
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
  );

  const loginPage = <Login />;
  return <div className="app">{!user ? loginPage : indexPage}</div>;
}

export default App;
