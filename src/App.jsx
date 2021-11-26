import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Calculator from "./Components/calculator";
import Header from "./Components/Header/Header";
import Token from "./Components/Token/Token";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home"

import "./App.scss";
import Evaluation from "./Components/EvaluationLab/Evaluation";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/token" component={Token} />
        <Route path="/Evaluation" component={Evaluation} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
