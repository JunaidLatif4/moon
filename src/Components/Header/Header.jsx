import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
      <div className={`header_container ${changeNavbar ? "scroll_header" : null}`}>
        <div className="box">
          <nav>
            <NavLink to="/"> HOME </NavLink>
            <NavLink to="/"> BUY NOW </NavLink>
            <NavLink to="/"> TAK TOKEN </NavLink>
            <div className="learn"> <a href=""> LEARN MORE </a>
              <div className="learn_drop">
                <NavLink to="/"> ROADMAP </NavLink>
                <NavLink to="/"> MEMBERSHIP </NavLink>
                <NavLink to="/"> TEAM </NavLink>
                <NavLink to="/"> FAQS </NavLink>
                <NavLink to="/"> DOCS </NavLink>
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
            <NavLink to="/"> COMICS </NavLink>
            <NavLink to="/"> CALCULATOR </NavLink>
            <NavLink to="/"> ATTRIBUTES </NavLink>
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
              <NavLink to="/"> BUY NOW </NavLink>
              <NavLink to="/"> TAK TOKEN </NavLink>
              <NavLink to="/"> LEARN MORE </NavLink>
              <NavLink to="/" className="sub"> ROADMAP </NavLink>
              <NavLink to="/" className="sub"> MEMBERSHIP </NavLink>
              <NavLink to="/" className="sub"> TEAM </NavLink>
              <NavLink to="/" className="sub"> FAQS </NavLink>
              <NavLink to="/Evaluation"> EVOLUTION LAB </NavLink>
              <NavLink to="/Evaluation"> COMICS </NavLink>
              <NavLink to="/Evaluation"> CALCULATOR </NavLink>
              <NavLink to="/Evaluation"> ATTRIBUTES </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
