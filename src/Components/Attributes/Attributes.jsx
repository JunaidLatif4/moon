import React, { useState, useEffect } from 'react'
import moment from "moment";

import { IoIosArrowForward } from "react-icons/io"
import { Parallax } from "react-parallax";

import "./Attributes.scss"

const Attributes = () => {

    const [currentTime, setCurrentTime] = useState(moment());
    const targetTime = moment("2021-11-30 07:00");
    const timeBetween = moment.duration(targetTime.diff(currentTime));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className="attributes_container">

                <div className="box" >
                    <div className="heading">
                        Mooning Monkey Attributes
                    </div>
                    <Parallax
                        // strength={}
                        renderLayer={(percentage) => (
                            <button style={{ transform: `scale(${(1 * (percentage + .2)) > 1 ? 1 : 1 * (percentage + .2)})`, transition: "all .2s linear" }}> collection attributes  <span> <IoIosArrowForward /> </span> </button>
                        )}
                    >
                    </Parallax>
                </div>

                <div className="box2">
                    <Parallax
                        // strength={}
                        renderLayer={(percentage) => (
                            <div className="detail" style={{ transform: `scale(${(1 * (percentage + .2)) > 1 ? 1 : 1 * (percentage + .2)})`, transition: "all .2s linear" }}>
                                ALL MOONING MONKEY ATTRIBUTES WILL BE REVEALED RIGHT AFTER THE SALE…
                            </div>
                        )}
                    >
                    </Parallax>
                    <div className="nftp__left_timer">
                        <div className="nftp__timer_days"><div className="nftp__timer_daystop">{timeBetween.days()}</div><div className="nftp__timer_daysbottom">Day(s)</div></div>
                        <div className="nftp__timer_days"><div className="nftp__timer_hourstop">{timeBetween.hours()}</div><div className="nftp__timer_hoursbottom">Hour(s)</div></div>
                        <div className="nftp__timer_days"><div className="nftp__timer_minstop">{timeBetween.minutes()}</div><div className="nftp__timer_minsbottom">Minute(s)</div></div>
                        <div className="nftp__timer_days"><div className="nftp__timer_secondtop">{timeBetween.seconds()}</div><div className="nftp__timer_secondbottom">Second(s)</div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Attributes
