import React from 'react'
import "./GradiantBtn.css"

const GradiantBtn = ({ text }) => {
    return (
        <div className="gradiant__btn_wrapper">
            <span className="gradiant__btn_text">{text}</span>
            <span className="gradiant__btn_icon">{">"}</span>
        </div>
    )
}

export default GradiantBtn
