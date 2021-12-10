import React, { useState, useEffect } from "react";
import "./homeSection4.scss";
import moment from "moment";
import { IoIosArrowForward } from "react-icons/io";
import { Parallax } from "react-parallax";
import Sec4P from "../../../assests/Home/sec4profile.png";

const HomeSection4 = () => {
  const [game1, setGame1] = useState("1");
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
    <>
      <div id="buy" className="homeSection4">
        <div className="box">
          <div className="heading">
            <div className="title">MINTING</div>
            <div className="sub-date">16 DECEMBER 2021 AT 7PM UTC</div>
            <div className="detail">
              The final amount in SOL will be updated 12 hours before the
              miniting event and will correspond to XXX USD per Mooning Monkey.
            </div>
          </div>

          <div className="detail1">
            {/* <p style={{ color: '#5dcbf6' }}> GAME CONCEPT </p> */}
            <p
              onClick={() => {
                setGame1("1");
              }}
              style={game1 == "1" ? { color: "#5dcbf6" } : { color: "#f831ec" }}
            >
              {" "}
              BUY MOONING MONKEYS
            </p>
            <span></span>
            <p
              className="p2"
              style={game1 == "2" ? { color: "#5dcbf6" } : { color: "#f831ec" }}
              onClick={() => {
                setGame1("2");
              }}
            >
              {" "}
              GET PHANTOM WALLET
            </p>
          </div>

          <div className="data">
            {game1 == "1" ? (
              <>
                <div className="content">
                  <p className="p1">TAKE OFF IS IMMINENT.</p>
                  <p className="p2">SUIT UP AND GET READY!</p>

                  <div className="nftp__left_timer">
                    <div className="nftp__timer_days">
                      <div className="nftp__timer_daystop">
                        {timeBetween.days()}
                      </div>
                      <div className="nftp__timer_daysbottom">Day(s)</div>
                    </div>
                    <div className="nftp__timer_days">
                      <div className="nftp__timer_hourstop mt100">:</div>
                    </div>
                    <div className="nftp__timer_days">
                      <div className="nftp__timer_hourstop">
                        {timeBetween.hours()}
                      </div>
                      <div className="nftp__timer_hoursbottom">Hour(s)</div>
                    </div>
                    <div className="nftp__timer_days">
                      <div className="nftp__timer_hourstop mt100">:</div>
                    </div>
                    <div className="nftp__timer_days">
                      <div className="nftp__timer_minstop">
                        {timeBetween.minutes()}
                      </div>
                      <div className="nftp__timer_minsbottom">Minute(s)</div>
                    </div>
                    <div className="nftp__timer_days">
                      <div className="nftp__timer_hourstop mt100">:</div>
                    </div>
                    <div className="nftp__timer_days">
                      <div className="nftp__timer_secondtop">
                        {timeBetween.seconds()}
                      </div>
                      <div className="nftp__timer_secondbottom">Second(s)</div>
                    </div>
                  </div>

                  <div className="p3">
                    A maximum of ONLY 12 Mooning Monkeys can be purchased per
                    wallet or the equivalent in SOL the day of the Minting
                    Event.
                  </div>
                </div>

                <Parallax
                  style={{ overflow: "inharit !important" }}
                  renderLayer={(percentage) => (
                    <div
                      className="wallet"
                      style={{
                        transform: `scale(${
                          1 * (percentage + 0.5) > 1
                            ? 1
                            : 1 * (percentage + 0.5)
                        })`,
                        transition: "all .2s linear",
                      }}
                    >
                      <div className="title">
                        {" "}
                        DESIRED AMOUNT OF MOONING MONKEYS{" "}
                      </div>
                      <div className="detail">
                        {" "}
                        Enter the amount of Mooning Monkeys You would like to
                        purchase{" "}
                      </div>
                      <div className="profile">
                        <img src={Sec4P} alt="ERROR" />
                        <div className="price">
                          <div className="p1">Price per Monkey</div>
                          <div className="p2">
                            <span> X </span> SOL each
                          </div>
                          <div className="p3">12,000 amount remaining</div>
                        </div>
                      </div>
                      <div className="input">
                        <input type="text" defaultValue="10" />{" "}
                        <span> XX SOL max </span>
                      </div>
                      <div className="total">
                        <div className="p1"> Total </div>
                        <div className="p2">
                          {" "}
                          <span> XX </span> SOL{" "}
                        </div>
                      </div>
                      <button>
                        {" "}
                        connect to wallet{" "}
                        <span>
                          {" "}
                          <IoIosArrowForward />{" "}
                        </span>{" "}
                      </button>
                    </div>
                  )}
                ></Parallax>
              </>
            ) : (
              <div style={{ padding: "30px" }}>
                <div class="datap1">
                  In order to participate in the Mooning Monkey Minting Event,
                  you’ll need to install the Phantom Wallet. Please follow the
                  following instructions and/or the suggested video tutorial:
                </div>
                <Parallax
                  renderLayer={(percentage) => (
                    <div
                      className="datap2"
                      style={{
                        transform: `scale(${
                          1 * (percentage + 0.5) > 1
                            ? 1
                            : 1 * (percentage + 0.5)
                        })`,
                        transition: "all .2s linear",
                      }}
                    >
                      <ol style={{ paddingLeft: "32px" }}>
                        <li>
                          Visit:{" "}
                          <a
                            style={{ color: "#f831ec" }}
                            href="https://phantom.app/"
                            target="_blank"
                          >
                            https://phantom.app/
                          </a>
                        </li>
                        <li>Click “add to Chrome”</li>
                        <li>Follow Phantom guided instruction steps.</li>
                        <li>
                          Send SOL to your newly created Phantom Wallet to
                          purchase the desired amount of Mooning Monkeys you
                          wish to acquire.
                        </li>
                      </ol>
                      <ul>
                        <li>
                          For a simple well explained video tutorial please
                          click{" "}
                          <a
                            style={{ color: "#f831ec" }}
                            href="https://www.youtube.com/watch?v=4vzgPiLrpAE"
                            target="_blank"
                          >
                            HERE
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                ></Parallax>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection4;
