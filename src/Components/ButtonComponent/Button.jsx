import React from 'react'

import { IoIosArrowForward } from "react-icons/io"

import "./Button.scss"

const Button = ({ className , click, text, bcolor, width, fontSize, bshadow }) => {
    return (
        <>
            <div className="button_container">
                <button className onClick={() => click ? click : null}> {text}  <span> <IoIosArrowForward style={{ fontSize: fontSize ? fontSize : null }} /> </span> </button>
            </div>
        </>
    )
}

export default Button
