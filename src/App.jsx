import React from "react";

import "./App.scss";
import Calculator from "./components/calculator";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Calculator} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
