import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Bookings from "./Containers/Booking";
import Cars from "./Containers/Cars/Cars";
import IPC from "./Containers/IPC/IPC";
import NavbarTool from "./Containers/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarTool />
        <Switch>
          {/* <Route path="/">
            < />
          </Route> */}
          <Route path="/bookings">
            <Bookings />
          </Route>
          <Route path="/ipc">
            <IPC />
          </Route>
          <Route path="/cars">
            <Cars />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
