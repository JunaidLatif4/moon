import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assests/Footer/logo.png";
import Black from "../../assests/Footer/black.svg";
import Dis from "../../assests/Footer/dis.png";
import Send from "../../assests/Footer/send.png";
import Twitter from "../../assests/Footer/twitter.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <img src={Black} alt="ERROR" className="black" />
        <div className="box">
          <div className="stamp_box">
            <img src={Logo} alt="ERROR" className="logo" />
            <div className="social_box">
              <img src={Send} alt="" />
              <img src={Dis} alt="" />
              <img src={Twitter} alt="" />
            </div>
          </div>
          <div className="content">
            <div className="heading">MOONING MONKEY</div>
            <nav>
              <NavLink to="/"> HOME </NavLink>
              <NavLink to="/#buy"> BUY NOW </NavLink>
              <NavLink to="/token"> TOKEN </NavLink>
              <NavLink to="/#roadmap"> ROADMAP </NavLink>
              <NavLink to="/#membership"> MEMBERSHIP </NavLink>
              <NavLink to="/#team"> TEAM </NavLink>
              <NavLink to="/#faq"> FAQ </NavLink>
              <a
                href="https://mooningmonkeyofficial.gitbook.io/mooning-monkey/"
                target="_blank"
              >
                {" "}
                DOCS{" "}
              </a>
              <NavLink to="/Evaluation"> EVOLUTION LAB </NavLink>
              <NavLink to="/comic"> COMIC BOOK </NavLink>
              <NavLink to="/calculator"> CALCULATOR </NavLink>
              <NavLink to="/attributes"> ATTRIBUTES </NavLink>
            </nav>
            <div className="copy">Copyright © 2021 MOONING MONKEY</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
