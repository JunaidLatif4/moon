import React from 'react'
import { NavLink } from "react-router-dom"

import "./Header.scss"

const Header = () => {
    return (
        <>
            <div className="header_container">
                <div className="box">
                    <nav>
                        <NavLink to="/"> Home </NavLink>
                        <NavLink to="/"> BUY NOW </NavLink>
                        <NavLink to="/"> TAK TOKEM </NavLink>
                        <NavLink to="/"> Home </NavLink>
                    </nav>
                    <div className="img_box">

                    </div>
                    <nav>
                        <NavLink to="/"> EVOLUTION LAB </NavLink>
                        <NavLink to="/"> COMICS </NavLink>
                        <NavLink to="/"> CALCULATOR </NavLink>
                        <NavLink to="/"> ATTRIBUTES </NavLink>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header
