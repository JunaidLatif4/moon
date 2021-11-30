import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AiOutlineMenu } from "react-icons/ai";

import Logo from "../../assests/NavBar/logo.png";
import Send from "../../assests/NavBar/send.png";
import Twitter from "../../assests/NavBar/twitter.png";
import Dis from "../../assests/NavBar/dis.png";

import "./Header.scss";

const Header = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [changeNavbar, setChangeNavBar] = useState(false);
  const changingNavBar = () => {
    if (window.scrollY >= 80) {
      setChangeNavBar(true);
    } else {
      setChangeNavBar(false);
    }
  };
  window.addEventListener("scroll", changingNavBar);

  return (
    <>
      <div
        className={`header_container ${changeNavbar ? "scroll_header" : null}`}
      >
        <div className="box">
          <nav>
            <NavLink to="/"> HOME </NavLink>
            <HashLink to="/#buy"> BUY NOW </HashLink>
            <NavLink to="/token"> TAK TOKEN </NavLink>
            <div className="learn">
              {" "}
              <NavLink style={{ pointerEvents: "none" }} to="/">
                {" "}
                LEARN MORE{" "}
              </NavLink>
              <div className="learn_drop">
                <HashLink to="/#roadmap"> ROADMAP</HashLink>
                <HashLink to="/#membership"> MEMBERSHIP </HashLink>
                <HashLink to="/#team"> TEAM</HashLink>
                <HashLink to="/#faq"> FAQS </HashLink>
                <a
                  href="https://mooningmonkeyofficial.gitbook.io/mooning-monkey/"
                  target="_blank"
                >
                  {" "}
                  DOCS{" "}
                </a>
              </div>
            </div>
          </nav>
          <div className="img_box">
            <img src={Logo} alt="ERROR" className="logo" />
            <div className="social_box">
              <img src={Send} alt="ERROR" />
              <img src={Dis} alt="ERROR" />
              <img src={Twitter} alt="ERROR" />
            </div>
          </div>
          <nav>
            <NavLink to="/Evaluation"> EVOLUTION LAB </NavLink>
            <NavLink to="/comic"> COMICS </NavLink>
            <NavLink to="/calculator"> CALCULATOR </NavLink>
            <NavLink to="/attributes"> ATTRIBUTES </NavLink>
          </nav>
        </div>
        <div className="mbl_box">
          <img src={Logo} alt="ERROR" className="logo" />
          <div className="social_box">
            <img src={Send} alt="ERROR" />
            <img src={Dis} alt="ERROR" />
            <img src={Twitter} alt="ERROR" />
          </div>
          <div
            className="menu"
            onClick={() => setShowDrop(showDrop ? false : true)}
          >
            <AiOutlineMenu className="icon" />
          </div>
          <div className={`mbl_drop ${showDrop ? "show_drop" : null}`}>
            <div className="drop_box">
              <NavLink to="/"> HOME </NavLink>
              <a href="/#buy"> BUY NOW </a>
              <NavLink to="/token"> TAK TOKEN </NavLink>
              <NavLink style={{ userSelect: "none" }} to="/">
                {" "}
                LEARN MORE{" "}
              </NavLink>
              <NavLink to="/" className="sub">
                {" "}
                ROADMAP{" "}
              </NavLink>
              <a href="/#membership" className="sub">
                {" "}
                MEMBERSHIP{" "}
              </a>
              <a href="/#team" className="sub">
                {" "}
                TEAM{" "}
              </a>
              <a href="/#faq" className="sub">
                {" "}
                FAQS{" "}
              </a>
              <a
                className="sub"
                href="https://mooningmonkeyofficial.gitbook.io/mooning-monkey/"
                target="_blank"
              >
                {" "}
                DOCS{" "}
              </a>
              <NavLink to="/Evaluation"> EVOLUTION LAB </NavLink>
              <NavLink to="/comic"> COMICS </NavLink>
              <NavLink to="/calculator"> CALCULATOR </NavLink>
              <NavLink to="/attributes"> ATTRIBUTES </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
