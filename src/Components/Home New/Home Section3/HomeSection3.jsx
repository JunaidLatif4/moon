import React, { useState } from "react";
import "./homeSection3.scss";
import { IoIosArrowForward } from "react-icons/io";
import { Parallax } from "react-parallax";
import { HashLink as NavLink } from "react-router-hash-link";
import Sec3 from "../../../assests/Home/sec3.jpg";
import Sec4F from "../../../assests/Home/sec4front.png";

const HomeSection3 = () => {
  const [game, setGame] = useState("1");

  return (
    <>
      <div className="homeSection3">
        <img src={Sec3} alt="ERROR" className="back" />

        <div className="box">
          <Parallax
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
            <p
              onClick={() => {
                setGame("1");
              }}
              style={game == "1" ? { color: "#5dcbf6" } : { color: "#f831ec" }}
            >
              {" "}
              <span>GAME CONCEPT</span>
            </p>
            <span className="line"></span>
            <p
              className="p2"
              style={game == "2" ? { color: "#5dcbf6" } : { color: "#f831ec" }}
              onClick={() => {
                setGame("2");
              }}
            >
              <span> BENEFITS OVERVIEW</span>
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
                      gambling game that will provide you with endless hours of
                      thrilling fun, while also giving you the opportunity to
                      win MILLIONS.{" "}
                    </li>
                    <li>
                      {" "}
                      The gameplay consists of an increasing curve that an crash
                      at any time, keeping everyone at the edges of their seats,
                      trying to figure out when they should cash out.{" "}
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
                      50% Of The Total Game Profit Will Be Shared With Co-Owners
                      Such As Yourself EVERY MONDAY{" "}
                    </li>
                    <li>
                      {" "}
                      You Will Get Extra Bonuses Based On Your Mooning Monkey’s
                      Evolution Stage, Earn More Money, Access More Information,
                      And Get Exclusive Access To The Mooning Monkey’s Secrets
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
      </div>
    </>
  );
};

export default HomeSection3;
