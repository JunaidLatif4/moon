import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Calculator from "./Components/calculator";
import Header from "./Components/Header/Header";
import Token from "./Components/Token/Token";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home"

import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/token" component={Token} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
