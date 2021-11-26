import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'


import Calculator from "./Components/calculator/calculator";
import Header from "./Components/Header/Header";
import Token from "./Components/Token/Token";
import Comic from "./Components/comic/Comic";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Evaluation from "./Components/EvaluationLab/Evaluation";

import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/token" component={Token} />
        <Route path="/Evaluation" component={Evaluation} />
        <Route path="/calculator" component={Calculator} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
