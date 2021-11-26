import React from 'react'

import { IoIosArrowForward } from "react-icons/io"
import { Parallax, Background } from "react-parallax";

import Sec1 from "../../assests/Home/sec1.jpg"
import CardImg from "../../assests/Home/cardg.png"
import BackBlur from "../../assests/Home/cardback.png"
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

                <section className="section2_container">
                    <div className="box">
                        <div className="card">
                            <img src={BackBlur} alt="ERROR" className='back' />
                            <img src={CardImg} alt="ERROR" />
                        </div>

                        <Parallax
                            strength={100}
                            renderLayer={(percentage) => (
                                <div className="data" style={{ transform: `scale(${.8 * percentage})` }}>
                                    <div className="heading">
                                        RARITY AND SPEC
                                    </div>
                                    <div className="detail">
                                        <span> Mooning Monkeys </span> HATE Being Boring Copies Of Each Other,
                                    </div>
                                    <div className="detail">
                                        This epic space journey is going to begin with <span> 12,000 </span> exciting, unique, and valuable mooning monkeys being sent to the moon and beyond.
                                    </div>
                                    <div className="detail">
                                        They will have to evolve to survive, reducing their population to only <span> 500 Elite Beings </span> that are infinitely more powerful, and of course, more <span> Valuable </span>.
                                    </div>
                                    <div className="detail">
                                        <span> Unique, Distinct, Rare, And Valuable! </span>
                                        All <span> Mooning Monkeys </span> are unique crypto heroes that have been drilled around <span> 239 DISTINCTIVE TRAITS </span> which define their rarity, and their value.
                                    </div>
                                </div>
                            )}
                        >
                        </Parallax>


                    </div>
                </section>

                <section className="section3_container">

                </section>
            </div>
        </>
    )
}

export default Home
