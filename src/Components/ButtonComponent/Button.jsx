import React from 'react'

import { IoIosArrowForward } from "react-icons/io"

import "./Button.scss"

const Button = () => {
    return (
        <>
            <div className="button_container">
                <button> Your Text <span> <IoIosArrowForward /> </span> </button>
            </div>
        </>
    )
}

export default Button
