import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Calculator from "./Components/calculator";
import Header from "./Components/Header/Header";
import Token from "./Components/Token/Token";

import "./App.scss";

const App = () => {
  return (
    <>
      <Header>
        <Switch>
          <Route path="/" component={Calculator} />
          <Route path="/token" component={Token} />
        </Switch>
      </Header>
    </>
  );
};

export default App;
