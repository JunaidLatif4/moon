import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Calculator from "./components/calculator";
import Header from "./Components/Header/Header";

import "./App.scss";

const App = () => {
  return (
    <>
        <Switch>
          <Route path="/header" component={Header} />
          <Route path="/" component={Calculator} />
        </Switch>
    </>
  );
};

export default App;
