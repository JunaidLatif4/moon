import React from 'react'
import "./BlueBtn.css"

const BlueBtn = ({ text, style }) => {
    return (
        <div className="blue__btn_wrapper" id="blue__btn_wpr" style={style}>
            <span className="blue__btn_text">{text}</span>
            <span id="blue__btn_icn">{">"}</span>
        </div>
    )
}

export default BlueBtn
