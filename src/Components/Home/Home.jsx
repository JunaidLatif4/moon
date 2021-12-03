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
  const [read, setRead] = useState("0");
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

      {read == "1" ? (
        <div className="team-modal-wrapper">
          <div className="wrapper">
            <div className="title">OPERATION MANAGER</div>

            <div className="inner">
              <span>
                The mooning monkey that’s going to be overlooking, coordinating,
                preparing, and making sure that every single mooning monkey
                makes it through their epic space journey and achieves their
                goal unscathed.
              </span>
              <span>
                This dedicated, relentless, and perceptive mooning monkey will
                keep every single department in check, tightening loose screws,
                oiling squeaking parts, and leaving no room for mistakes.
              </span>
            </div>

            <div
              className="cross"
              onClick={() => {
                setRead("0");
              }}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      ) : read == "2" ? (
        <div className="team-modal-wrapper">
          <div className="wrapper">
            <div className="title">NFT ARTIST</div>

            <div className="inner">
              <span>
                It’s extremely easy to spot NFT’s created by pixel randomizers.
                They’re lifeless; they don’t have that “flare”. And that’s why,
                under no circumstance, would we use such a method
              </span>
              <span>
                <span className="home_span_color">
                  {" "}
                  The Mooning Monkey Collections
                </span>{" "}
                have been created by a real artist, the type of artist that
                loved art since he was young, and, for some reason, he always
                had a weird tendency to draw monkeys! Curious…
              </span>
            </div>

            <div
              className="cross"
              onClick={() => {
                setRead("0");
              }}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      ) : read == "3" ? (
        <div className="team-modal-wrapper">
          <div className="wrapper">
            <div className="title">COMIC ARTIST</div>

            <div className="inner">
              <span>
                You remember that first comic book that truly got you hooked?
                Reading page after page, being absorbed in that world, and
                screaming in agony whenever you finished one of the volumes and
                had to wait for a new one?
              </span>
              <span>
                Like it or not, our comic artist is one of the best, and you{" "}
                <span className="home_span_color">WILL</span> love this Sci-Fi,
                Drama, And Action Packed Series. You’ve been warned.
              </span>
            </div>

            <div
              className="cross"
              onClick={() => {
                setRead("0");
              }}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      ) : read == "4" ? (
        <div className="team-modal-wrapper">
          <div className="wrapper">
            <div className="title">BLOCKCHAIN DEVELOPER TEAM</div>

            <div className="inner">
              <span>
                This coordinated team of paranoid monkeys double check
                everything, it’s kind of their thing. They’re dedicated to their
                craft, and they spend a ridiculous amount of time making sure
                that everything <span className="home_span_color">ALWAYS</span>{" "}
                works.
              </span>
              <span>
                They professionally handle all of the Block chain aspects, from
                the initial minting contracts, to evolution minting contracts,
                comic book mintings, and everything else needed to complete your
                mission.
              </span>
            </div>

            <div
              className="cross"
              onClick={() => {
                setRead("0");
              }}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      ) : read == "5" ? (
        <div className="team-modal-wrapper">
          <div className="wrapper">
            <div className="title">GAME DEVELOPER</div>

            <div className="inner">
              <span>
                Games are fun, and when they’ve been created by a team of
                experienced game developers which are full of passion, and have
                complete freedom to do whatever they want,
                <span className="home_span_color"> EXTRA</span> fun!
              </span>
              <span>
                Sit down, relax, grab your favorite beverage, your favorite
                snack, clear up your schedule so your fun doesn’t get ruined,
                and enjoy this launch to the moon.
              </span>
            </div>

            <div
              className="cross"
              onClick={() => {
                setRead("0");
              }}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      ) : read == "6" ? (
        <div className="team-modal-wrapper">
          <div className="wrapper">
            <div className="title">WEB DEVELOPER</div>

            <div className="inner">
              <span>
                Navigating through space is not easy, you need someone who knows
                his way around those parts, and who can get you to exactly where
                you want to go, without any problems interfering.
              </span>
              <span>
                This smart-a** of a mooning monkey is really good at what he
                does, and you can be sure that while exploring space yourself,
                you’ll have a smooth and intuitive experience all the way,
                thanks to him.
              </span>
            </div>

            <div
              className="cross"
              onClick={() => {
                setRead("0");
              }}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      ) : read == "7" ? (
        <div className="team-modal-wrapper">
          <div className="wrapper">
            <div className="title">WEB DESIGNER</div>

            <div className="inner">
              <span>
                WEB DESIGNER The mooning monkeys have always been impressed by
                aesthetics and pretty sceneries. Looking up at the sky above,
                seeing those pretty stars, they always thought, how much more
                beautiful would they be up close?
              </span>
              <span>
                And, the only <span className="home_span_color">thing</span>{" "}
                THIS mooning monkey loves more than looking at pretty things, is
                actually <span>CREATING</span> those things. And, as you can see
                from our website, she’s already started!
              </span>
            </div>

            <div
              className="cross"
              onClick={() => {
                setRead("0");
              }}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      ) : read == "8" ? (
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
                setRead("0");
              }}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      ) : read == "9" ? (
        <div className="team-modal-wrapper">
          <div className="wrapper">
            <div className="title">TOKENOMICS AND FINANCIAL MODELING</div>

            <div className="inner">
              <span>
                Proper calculations are needed for any rocket launch, but this
                isn’t just “any” rocket launch. It’s special, why? Simple!
                Because it was orchestrated by a rare financial modeling
                engineer from <span className="home_span_color">another</span>{" "}
                universe! Duh…
              </span>
              <span>
                These special calculations have been fueling this pre-launch
                since day one, setting the entire mission up for success before
                it even started.
              </span>
            </div>

            <div
              className="cross"
              onClick={() => {
                setRead("0");
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

            <div className={game == "1" ? "data" : "data data1"}>
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
              {CardData.map((data, index) => {
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
                              setRead(data.id);
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
