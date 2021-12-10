import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import Calculator from "./Components/calculator/calculator";
import Header from "./Components/Header/Header";
import Token from "./Components/Token/Token";
import Comic from "./Components/comic/Comic";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import HomeNew from "./Components/Home New/Home";

import Home2 from "./Components/Home/Home2";
import Evaluation from "./Components/EvaluationLab/Evaluation";
import Attributes from "./Components/Attributes/Attributes";
import pdf from "./assests/comic/file.pdf";
import "./App.scss";
import AttributePage from "./Components/Attribute Page/AttributePage";
import { RiArrowUpSLine } from "react-icons/ri";
import $ from "jquery";
const App = () => {
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 600) {
  //     $(".et_pb_scroll_top").fadeIn();
  //   } else {
  //     $(".et_pb_scroll_top").fadeOut();
  //   }
  // });

  return (
    <>
      <Header />
      <a
        href="https://gleam.io/K258w/mooning-monkey-official-whitelist-lottery"
        class="whitelist-side"
        target="blank"
        style={{ cursor: "pointer" }}
      >
        WHITELIST
      </a>
      <span
        class="et_pb_scroll_top et-pb-icon et-visible"
        style={{ display: "inline" }}
        onClick={() => {
          window.scrollTo(0, 0);
          console.log("to");
        }}
      >
        <RiArrowUpSLine />
      </span>
      <Switch>
        <Route exact path="/oldhome" component={Home} />
        <Route exact path="/" component={HomeNew} />

        {/* <Route exact path="/home" component={Home} /> */}
        <Route exact path="/token" component={Token} />
        <Route exact path="/comic" component={Comic} />
        <Route exact path="/Evaluation" component={Evaluation} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/attributes" component={AttributePage} />

        {/* <Route exact path="/attributes" component={Attributes} /> */}
      </Switch>
      {/* <div
        class="flip-book-container"
        src={pdf}
        style={{ width: "100%", height: "400px" }}
      ></div> */}
      {/* <iframe
        src={pdf}
        allowfullscreen
        style={{ width: "100%", height: "60vh" }}
      ></iframe> */}
      <Footer />
    </>
  );
};

export default App;
