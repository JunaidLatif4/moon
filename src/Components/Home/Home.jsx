import React from 'react'

import { IoIosArrowForward } from "react-icons/io"

import Sec1 from "../../assests/Home/sec1.jpg"
import Button from "../ButtonComponent/Button"

import "./Home.scss"

const Home = () => {
    return (
        <>
            <div className="home_container">
                <section className="section1_container">
                    <img src={Sec1} alt="ERROR" className="back" />
                    <div className="heading">
                        ONBOARD THE GREATEST <br /> SPACE MISSION OF ALL TIME!
                    </div>
                    <div className="detail">
                        Save The Mooning Monkeys From Imminent Extinction. Earn Astronomical Rewards, Exclusive Membership Privileges & A Lifetime Source Of Passive Income.
                    </div>
                    <div className="detail">
                        Join <span> The Mooning Monkeys </span> on their epic space journey, an <span> Exclusive NFT Project </span> featuring art from another world, and <span> Unrivalled-Utility </span> from galaxies far beyond.
                    </div>
                    <div className="detail">
                        Co-own and profit from the revisited and revamped famous <span> Crash Game </span>, be one of the first to own an <span> Epic Sci-Fi Comic Book </span> in <span> NFT </span> format, and become a proud owner of one of the most <span> Stylish, Rare, And Utility-Packed NFT’s </span>.
                    </div>
                    <div className="btn_box">
                        <button style={{ backgroundColor: "#f832ec" }}> join telegram  <span> <IoIosArrowForward /> </span> </button>
                        <button style={{ backgroundColor: "#f832ec" }}> join discord  <span> <IoIosArrowForward /> </span> </button>
                        <button> buy now  <span> <IoIosArrowForward /> </span> </button>
                        <button> one pager  <span> <IoIosArrowForward /> </span> </button>
                        <button> profit calculator  <span> <IoIosArrowForward /> </span> </button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
