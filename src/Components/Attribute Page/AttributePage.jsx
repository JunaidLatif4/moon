import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import "./attribute.scss";

const AttributePage = () => {
  return (
    <>
      <div className="attribute-component">
        <div className="box">
          <div className="heading">Mooning Monkey Attributes</div>

          <button>
            collection attributes
            <span>
              <IoIosArrowForward />
            </span>
          </button>
        </div>

        <div className="box2">
          <div className="detail">
            ALL MOONING MONKEY ATTRIBUTES WILL BE REVEALED RIGHT AFTER THE SALE…
          </div>

          {/* <div className="nftp__left_timer">
            <div className="nftp__timer_days">
              <div className="nftp__timer_daystop">{timeBetween.days()}</div>
              <div className="nftp__timer_daysbottom">Day(s)</div>
            </div>
            <div className="nftp__timer_days">
              <div className="nftp__timer_hourstop">{timeBetween.hours()}</div>
              <div className="nftp__timer_hoursbottom">Hour(s)</div>
            </div>
            <div className="nftp__timer_days">
              <div className="nftp__timer_minstop">{timeBetween.minutes()}</div>
              <div className="nftp__timer_minsbottom">Minute(s)</div>
            </div>
            <div className="nftp__timer_days">
              <div className="nftp__timer_secondtop">
                {timeBetween.seconds()}
              </div>
              <div className="nftp__timer_secondbottom">Second(s)</div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AttributePage;
