import React from 'react'
import BlueBtn from '../BlueBtn/BlueBtn'
import "./PriceBox.css"
import Monkey from "../../../../assests/comic/monkey.png"

const PriceBox = () => {
    return (
        <div className="price__box">
            <div className="price__box_heading">MAKE SURE TO HAVE SOME SOL TO PAY TX FEES</div>
            <div className="price__box_desc">remember that you can purchase only 1 page per wallet</div>
            <div className="price__box_header">
                <div className="price__box_headerleft"><img src={Monkey} className="price__box_img" /></div>
                <div className="price__box_headerright">
                    <div className="pbhr__top">Price per Page</div>
                    <div className="pbhr__middle"><span>100,000</span> TAK each</div>
                    <div className="pbhr__bottom">x amount remaining</div>
                </div>
            </div>
            <div className="price__box_inputbox">
                <input type="text" className="price__box_input" placeholder="100,000 TAK max" />
            </div>
            <div className="price__box_total">
                <div className="pb__total_left">Total</div>
                <div className="pb__total_right"><span>100'000</span>TAK</div>
            </div>
            <div className="price__box_bottom">
                <BlueBtn text="CONNECT WALLET" style={{ width: "90%" }} />
            </div>
        </div>
    )
}

export default PriceBox
