import React, { useState, useEffect } from "react";
import moment from "moment";

import { IoIosArrowForward } from "react-icons/io";
import { Parallax } from "react-parallax";

import "./Attributes.scss";

const Attributes = () => {
  window.scrollTo(0, 0);

  const [currentTime, setCurrentTime] = useState(moment());
  const targetTime = moment.utc("2021-12-16 07:00 pm");
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="attributes_container">
        <div className="box">
          <div className="heading">Mooning Monkey Attributes</div>
          <Parallax
            // strength={}
            renderLayer={(percentage) => (
              <button
                style={{
                  transform: `scale(${
                    1 * (percentage + 0.3) > 1 ? 1 : 1 * (percentage + 0.3)
                  })`,
                  transition: "all .2s linear",
                }}
              >
                {" "}
                collection attributes{" "}
                <span>
                  {" "}
                  <IoIosArrowForward />{" "}
                </span>{" "}
              </button>
            )}
          ></Parallax>
        </div>

        <div className="box2">
          <Parallax
            // strength={}
            renderLayer={(percentage) => (
              <div
                className="detail"
                style={{
                  transform: `scale(${
                    1 * (percentage + 0.4) > 1 ? 1 : 1 * (percentage + 0.4)
                  })`,
                  transition: "all .2s linear",
                }}
              >
                ALL MOONING MONKEY ATTRIBUTES WILL BE REVEALED RIGHT AFTER THE
                SALE…
              </div>
            )}
          ></Parallax>
          <div className="attribute_nftp__left_timer">
            <div className="nftp__timer_days time_bg_box">
              <div className="nftp__timer_daystop">{timeBetween.days()}</div>
              <div className="nftp__timer_daysbottom">Day(s)</div>
            </div>
            <div className="nftp__timer_days time_bg_box">
              <div className="nftp__timer_hourstop">{timeBetween.hours()}</div>
              <div className="nftp__timer_hoursbottom">Hour(s)</div>
            </div>
            <div className="nftp__timer_days time_bg_box">
              <div className="nftp__timer_minstop">{timeBetween.minutes()}</div>
              <div className="nftp__timer_minsbottom">Minute(s)</div>
            </div>
            <div className="nftp__timer_days time_bg_box">
              <div className="nftp__timer_secondtop">
                {timeBetween.seconds()}
              </div>
              <div className="nftp__timer_secondbottom">Second(s)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
