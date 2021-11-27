import React, { useState, useEffect } from 'react'
import LightBox from '../LightBox/LightBox'
import "./NFTPage.css"
import ArrowDown from "../../../../assests/comic/arrow-down1.png"
import QuestionMark from "../../../../assests/comic/questionmark.png"
import PlayBtn from "../../../../assests/comic/paybtn.png"
import BlueBtn from '../BlueBtn/BlueBtn'
import GradiantBtn from '../GradiantBtn/GradiantBtn'
import PriceBox from '../PriceBox.jsx/PriceBox'
import moment from "moment";


const NFTPage = () => {
    const [dropdown, setDropdown] = useState(false)
    const [activeBox1, setActiveBox1] = useState("1");
    const dropItems = ["1", "2", "3", "4", "5", "6", "7"];
    const [currentTime, setCurrentTime] = useState(moment());
    const targetTime = moment("2021-11-30 07:00");
    const timeBetween = moment.duration(targetTime.diff(currentTime));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const [activeDropdown, setActiveDropdown] = useState("1");



    return (
        <div className="nft__page">
            <div className="nft__page_header">
                <div className="nft__page_heading">OWN AN NFT PAGE OF THE COMIC</div>
                <div className="nft__page_desc">Owning a page, or even better, a full comic book, will allow you to receive special surprises, bonuses, and rewards!</div>
                <div className="nft__page_menu">
                    <div className={`nft__page_menuitem ${activeBox1 == "1" && "active__menu_item"}`} onClick={() => { setActiveBox1("1") }}>Part1</div>
                    <div className={`nft__page_menuitem ${activeBox1 == "2" && "active__menu_item"}`} onClick={() => { setActiveBox1("2") }}>Part2</div>
                    <div className={`nft__page_menuitem ${activeBox1 == "3" && "active__menu_item"}`} onClick={() => { setActiveBox1("3") }}>Part3</div>
                    <div className={`nft__page_menuitem ${activeBox1 == "4" && "active__menu_item"}`} onClick={() => { setActiveBox1("4") }}>Part4</div>
                </div>
            </div>
            <LightBox>
                {/* {activeBox1 === "1" && <div className="nftp__box1">
                    <div className="nft__page_subheading">
                        In order to purchase a comic book page,<br />
                        you’ll need to own at least 1 Mooning Monkey.
                    </div>
                    <div className="nft__page_innerbox">
                        <LightBox>
                            <div className="nftp__innerbox_content">Page &nbsp;<span className="nftp__innerbox_dropdown" onClick={() => setDropdown(!dropdown)}>
                                {dropdown && <div className="dropdown__items_wrap">
                                    {dropItems.map((item, index) => {
                                        return (<div className="dropdown__item" style={{ background: item === activeDropdown ? "#f832ec" : "black" }} onClick={(e) => setActiveDropdown(item)}>
                                            {item}
                                        </div>)
                                    })}
                                </div>}
                                {activeDropdown}<img src={ArrowDown} className="nftp__innerbox_dropicon" /> </span>&nbsp; of Part 1 </div>
                        </LightBox>
                    </div>
                    <div className="nftp__box_containers">
                        <div className="nftp__box_left">
                            <div className="doted__box"></div>
                            <BlueBtn text={`CONNECT WALLET`} />
                        </div>
                        <div className="nftp__box_right">
                            <img src={QuestionMark} className="nftp__question_mark" />
                            <BlueBtn text={`BUY NOW`} />
                        </div>
                    </div>
                    <div className="nftp__bottom_wrapper">
                        <GradiantBtn text="PROFILE CALCULATOR" />
                    </div>
                </div>} */}
                {activeBox1 === "1" && <div className="nftp__box1">
                    <div className="nft__page_subheading">
                        In order to purchase a comic book page,<br />
                        you’ll need to own at least 1 Mooning Monkey.
                    </div>
                    <div className="nft__page_innerbox">
                        <LightBox>
                            <div className="nftp__innerbox_content">Page &nbsp;<span className="nftp__innerbox_dropdown" onClick={() => setDropdown(!dropdown)}>
                                {dropdown && <div className="dropdown__items_wrap">
                                    {dropItems.map((item, index) => {
                                        return (<div className="dropdown__item" style={{ background: item === activeDropdown ? "#f832ec" : "black" }} onClick={(e) => setActiveDropdown(item)}>
                                            {item}
                                        </div>)
                                    })}
                                </div>}
                                {activeDropdown}<img src={ArrowDown} className="nftp__innerbox_dropicon" /> </span>&nbsp; of Part 1 </div>
                        </LightBox>
                    </div>

                    <div className="nftp__box_containers">
                        <div className="nftp__box_left">
                            <div className="nftp__left_pheading">PUT YOUR HELMET ON.</div>
                            <div className="nftp__left_sheading">METEORIC SANSATIONS GUARANTEED!</div>
                            <div className="nftp__left_timer">
                                <div className="nftp__timer_days"><div className="nftp__timer_daystop">{timeBetween.days()}</div><div className="nftp__timer_daysbottom">Day(s)</div></div>
                                <div className="nftp__timer_days"><div className="nftp__timer_hourstop">{timeBetween.hours()}</div><div className="nftp__timer_hoursbottom">Hour(s)</div></div>
                                <div className="nftp__timer_days"><div className="nftp__timer_minstop">{timeBetween.minutes()}</div><div className="nftp__timer_minsbottom">Minute(s)</div></div>
                                <div className="nftp__timer_days"><div className="nftp__timer_secondtop">{timeBetween.seconds()}</div><div className="nftp__timer_secondbottom">Second(s)</div></div>
                            </div>
                            <div className="nftp__left_bottom">A maximum of 1 page per wallet can be purchased.<br /><span>ONLY $TAK TOKEN WILL BE ACCEPTED</span></div>
                        </div>

                        <div className="nftp__box_right">
                            <PriceBox />
                        </div>
                    </div>
                    <div className="nftp__bottom_wrapper">
                        {/* <GradiantBtn text="PROFILE CALCULATOR" /> */}
                        <div className="nftp__bottom_text">The Final $TAK amount will be updated 12 hours before the mining event and will correspond to $1000 per Page</div>
                    </div>
                </div>}
                {activeBox1 !== "1" && <div className="nftp__box2">
                    <div className="nftp__box2_text">This part is not yet available, in the meantime, feel free to check out other gadgets such as our profit calculator:</div>
                    <GradiantBtn text="PROFILE CALCULATOR" />
                </div>}
            </LightBox >
        </div >
    )
}

export default NFTPage
