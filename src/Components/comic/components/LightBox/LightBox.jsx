import React from 'react'
import "./LightBox.css"

const LightBox = ({ children }) => {
    return (
        <div className="light__box">
            {children}
        </div>
    )
}

export default LightBox
