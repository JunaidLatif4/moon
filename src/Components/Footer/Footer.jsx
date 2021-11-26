import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from "../../assests/Footer/logo.png"
import Black from "../../assests/Footer/black.svg"
import Dis from "../../assests/Footer/dis.png"
import Send from "../../assests/Footer/send.png"
import Twitter from "../../assests/Footer/twitter.png"

import "./Footer.scss"

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
                        <div className="heading">
                            MOONING MONKEY
                        </div>
                        <nav>
                            <NavLink to="/"> HOME </NavLink>
                            <NavLink to="/"> BUY NOW </NavLink>
                            <NavLink to="/"> TOKEN </NavLink>
                            <NavLink to="/"> ROADMAP </NavLink>
                            <NavLink to="/"> MEMBERSHIP </NavLink>
                            <NavLink to="/"> TEAM </NavLink>
                            <NavLink to="/"> FAQ </NavLink>
                            <NavLink to="/"> DOCS </NavLink>
                            <NavLink to="/"> EVOLUTION LAB </NavLink>
                            <NavLink to="/"> COMIC BOOK </NavLink>
                            <NavLink to="/"> CALCULATOR </NavLink>
                            <NavLink to="/"> ATTRIBUTES </NavLink>
                        </nav>
                        <div className="copy">
                            Copyright © 2021 MOONING MONKEY
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
