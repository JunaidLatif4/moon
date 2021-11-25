import React from "react";

import "./App.scss";
// import Calculator from "./components/calculator";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Token from "./Components/Token/Token";
import Comic from "./Components/comic/Comic";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route path="/" component={Calculator} /> */}
          <Route path="/token" component={Token} />
          <Route path="/comic" component={Comic} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
