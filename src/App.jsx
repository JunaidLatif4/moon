import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Calculator from "./Components/calculator/calculator";
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
