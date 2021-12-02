import React, { useState, useEffect } from "react";
import moment from "moment";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { IoIosArrowForward } from "react-icons/io";
import { Parallax } from "react-parallax";
import { HashLink as NavLink } from "react-router-hash-link";
import video from "../../assests/video/mooningMonkey.mp4";
import Sec1 from "../../assests/Home/sec1.jpg";
import Sec3 from "../../assests/Home/sec3.jpg";
import Sec3F from "../../assests/Home/sec3front.png";
import Sec4F from "../../assests/Home/sec4front.png";
import Sec4P from "../../assests/Home/sec4profile.png";
import CardImg from "../../assests/Home/cardg.png";
import BackBlur from "../../assests/Home/cardback.png";
import Question from "./Question";
import Home2 from "./Home2";
import pdf from "../../assests/Home/MM FINAL 1 PAGER.pdf";
import CardData from "./sec11Data";

import "./Home.scss";

const Home = () => {
  const [cancel, setCancel] = useState(true);
  const [read, setRead] = useState(false);
  const [currentTime, setCurrentTime] = useState(moment());
  const targetTime = moment.utc("2021-12-16 07:00 pm");
  const timeBetween = moment.duration(targetTime.diff(currentTime));
  const [game, setGame] = useState("1");
  const [game1, setGame1] = useState("1");
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {cancel == true ? (
        <div className="first-video">
          <div className="video-wrapper">
            <div className="inner">
              <iframe
                loading="lazy"
                src={video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
              ></iframe>
              {/* <video controls autostart autoPlay src={video} type="video/mp4" /> */}
            </div>

            <div
              className="cross"
              onClick={() => {
                setCancel(false);
              }}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      ) : null}

      {read == true ? (
        <div className="team-modal-wrapper">
          <div className="wrapper">
            <div className="title">Marketing Team</div>

            <div className="inner">
              <span>
                This experienced team of mooning monkeys have spent endless
                hours studying how to get other mooning monkeys excited, how to
                clearly deliver a message, how to gather a crowd, and how to
                make sure people are watching.
              </span>
              <span>
                They know every pub, bar, and restaurant in the crypto town, as
                well as the best way to interest its residents in their product,
                assuring a successful launch to our mission.
              </span>
            </div>

            <div
              className="cross"
              onClick={() => {
                setRead(false);
              }}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      ) : null}

      <div className="home_container">
        <section className="section1_container" id="home">
          <img src={Sec1} alt="ERROR" className="back" />
          <div className="heading">
            ONBOARD THE GREATEST <br /> SPACE MISSION OF ALL TIME!
          </div>
          <div className="detail">
            Save The Mooning Monkeys From Imminent Extinction. Earn Astronomical
            Rewards, Exclusive Membership Privileges & A Lifetime Source Of
            Passive Income.
          </div>
          <div className="detail">
            Join <span> The Mooning Monkeys </span> on their epic space journey,
            an <span> Exclusive NFT Project </span> featuring art from another
            world, and <span> Unrivalled-Utility </span> from galaxies far
            beyond.
          </div>
          <div className="detail">
            Co-own and profit from the revisited and revamped famous{" "}
            <span> Crash Game </span>, be one of the first to own an{" "}
            <span> Epic Sci-Fi Comic Book </span> in <span> NFT </span> format,
            and become a proud owner of one of the most{" "}
            <span> Stylish, Rare, And Utility-Packed NFT’s </span>.
          </div>
          <div className="btn_box">
            <a
              href="https://t.me/MooningMonkeyOfficial"
              target="blank"
              rel="noopener"
            >
              <button style={{ backgroundColor: "#f832ec" }}>
                {" "}
                join telegram{" "}
                <span>
                  {" "}
                  <IoIosArrowForward />{" "}
                </span>{" "}
              </button>
            </a>
            <a
              href="https://discord.gg/mooningmonkeyofficial"
              target="blank"
              rel="noopener"
            >
              <button style={{ backgroundColor: "#f832ec" }}>
                {" "}
                join discord{" "}
                <span>
                  {" "}
                  <IoIosArrowForward />{" "}
                </span>{" "}
              </button>
            </a>
            <NavLink to="/#buy">
              <button>
                {" "}
                buy now{" "}
                <span>
                  {" "}
                  <IoIosArrowForward />{" "}
                </span>{" "}
              </button>
            </NavLink>
            <a href={pdf} target="_blank">
              <button>
                {" "}
                one pager{" "}
                <span>
                  {" "}
                  <IoIosArrowForward />{" "}
                </span>{" "}
              </button>
            </a>
            <NavLink to="/calculator">
              <button>
                {" "}
                profit calculator{" "}
                <span>
                  {" "}
                  <IoIosArrowForward />{" "}
                </span>{" "}
              </button>
            </NavLink>
          </div>
        </section>

        <section className="section2_container">
          <div className="box">
            <div className="card">
              <img src={BackBlur} alt="ERROR" className="back" />
              <img src={CardImg} alt="ERROR" />
            </div>

            <Parallax
              // strength={}
              renderLayer={(percentage) => (
                <div
                  className="data"
                  style={{
                    transform: `scale(${
                      1 * (percentage + 0.3) > 1 ? 1 : 1 * (percentage + 0.3)
                    })`,
                    transition: "all .2s linear",
                  }}
                >
                  <div className="heading">RARITY AND SPEC</div>
                  <div className="detail">
                    <span> Mooning Monkeys </span> HATE Being Boring Copies Of
                    Each Other,
                  </div>
                  <div className="detail">
                    This epic space journey is going to begin with{" "}
                    <span> 12,000 </span> exciting, unique, and valuable mooning
                    monkeys being sent to the moon and beyond.
                  </div>
                  <div className="detail">
                    They will have to evolve to survive, reducing their
                    population to only <span> 500 Elite Beings </span> that are
                    infinitely more powerful, and of course, more{" "}
                    <span> Valuable </span>.
                  </div>
                  <div className="detail">
                    <span> Unique, Distinct, Rare, And Valuable! </span>
                    All <span> Mooning Monkeys </span> are unique crypto heroes
                    that have been drilled around{" "}
                    <span> 239 DISTINCTIVE TRAITS </span> which define their
                    rarity, and their value.
                  </div>
                </div>
              )}
            ></Parallax>
          </div>
        </section>

        <section className="section3_container">
          <img src={Sec3} alt="ERROR" className="back" />
          <div className="box">
            <Parallax
              // strength={}
              renderLayer={(percentage) => (
                <div
                  className="heading"
                  style={{
                    transform: `scale(${
                      1 * (percentage + 0.6) > 1 ? 1 : 1 * (percentage + 0.6)
                    })`,
                    transition: "all .2s linear",
                  }}
                >
                  CO-OWN THE GAME AND SHARE PROFIT
                </div>
              )}
            ></Parallax>
            <div className="detail">
              {/* <p style={{ color: '#5dcbf6' }}> GAME CONCEPT </p> */}
              <p
                onClick={() => {
                  setGame("1");
                }}
                style={
                  game == "1" ? { color: "#5dcbf6" } : { color: "#f831ec" }
                }
              >
                {" "}
                GAME CONCEPT{" "}
              </p>
              <span></span>
              <p
                className="p2"
                style={
                  game == "2" ? { color: "#5dcbf6" } : { color: "#f831ec" }
                }
                onClick={() => {
                  setGame("2");
                }}
              >
                {" "}
                BENEFITS OVERVIEW{" "}
              </p>
            </div>

            <div className={game == "1" ? "data": "data data1"}>
              <div className="content">
                {game == "1" ? (
                  <>
                    <div className="title">
                      What’s The Mooning Monkey Crash Game?
                    </div>
                    <ul>
                      <li>
                        {" "}
                        Mooning Monkey is an exciting, online, multiplayer
                        gambling game that will provide you with endless hours
                        of thrilling fun, while also giving you the opportunity
                        to win MILLIONS.{" "}
                      </li>
                      <li>
                        {" "}
                        The gameplay consists of an increasing curve that an
                        crash at any time, keeping everyone at the edges of
                        their seats, trying to figure out when they should cash
                        out.{" "}
                      </li>
                      <li>
                        {" "}
                        While we are preparing the game launch, have fun playing
                        with our profit calculator{" "}
                      </li>
                    </ul>{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    <div className="title">
                      Make Money While Comfortably Sitting In Your Bed, Relaxing
                      On The Beach, Or Having Your Own Adventures…
                    </div>
                    <ul>
                      <li>
                        {" "}
                        50% Of The Total Game Profit Will Be Shared With
                        Co-Owners Such As Yourself EVERY MONDAY{" "}
                      </li>
                      <li>
                        {" "}
                        You Will Get Extra Bonuses Based On Your Mooning
                        Monkey’s Evolution Stage, Earn More Money, Access More
                        Information, And Get Exclusive Access To The Mooning
                        Monkey’s Secrets
                      </li>
                      <li>
                        {" "}
                        Bankroll Participation Option Available To Increase
                        Community Engagement, Mooning Monkey Holder Profits, And
                        Bankroll Participant’s Profits
                      </li>
                      <li>
                        {" "}
                        Gain Exclusive Access To A Referral Program That Sells
                        Itself And Allows You To Earn Even MORE Money
                      </li>
                    </ul>
                  </>
                )}
                <img src={Sec4F} alt="ERROR" className="sec3f" />
              </div>
              <div className="btn_box">
                <NavLink to="/calculator">
                  <button>
                    {" "}
                    profit calculator{" "}
                    <span>
                      {" "}
                      <IoIosArrowForward />{" "}
                    </span>{" "}
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        <section id="buy" className="section4_container">
          <div className="box">
            <div className="heading">
              <div className="title">MINTING</div>
              <div className="sub-date">16 DECEMBER 2021 AT 7PM UTC</div>
              <div className="detail">
                The final amount in SOL will be updated 12 hours before the
                miniting event and will correspond to XXX USD per Mooning
                Monkey.
              </div>
            </div>
            <div className="detail1">
              {/* <p style={{ color: '#5dcbf6' }}> GAME CONCEPT </p> */}
              <p
                onClick={() => {
                  setGame1("1");
                }}
                style={
                  game1 == "1" ? { color: "#5dcbf6" } : { color: "#f831ec" }
                }
              >
                {" "}
                BUY MOONING MONKEYS
              </p>
              <span></span>
              <p
                className="p2"
                style={
                  game1 == "2" ? { color: "#5dcbf6" } : { color: "#f831ec" }
                }
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
                        <div className="nftp__timer_secondbottom">
                          Second(s)
                        </div>
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
                    // strength={}
                    renderLayer={(percentage) => (
                      <div
                        className="wallet"
                        style={{
                          transform: `scale(${
                            1 * (percentage + 0.4) > 1
                              ? 1
                              : 1 * (percentage + 0.4)
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
                    // strength={}
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
        </section>

        <Home2 />

        <section id="team" className="section11_container">
          <div className="box">
            <div className="heading">DEGEN MONKEY LAUNCHERS</div>
            <div className="content">Meet the team</div>
            <div className="cards">
              {CardData.map((data) => {
                return (
                  <>
                    <div className="crd">
                      <img src={data.img} alt="ERROR" />
                      <div className="data">
                        <div className="title">{data.heading}</div>
                        <div className="detail">
                          {data.detail}{" "}
                          <span
                            onClick={() => {
                              setRead(true);
                            }}
                          >
                            {" "}
                            Read more{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>

        <Question />
      </div>
    </>
  );
};

export default Home;
