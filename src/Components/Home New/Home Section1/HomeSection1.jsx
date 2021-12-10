import React from "react";
import "./homeSection1.scss";
import Sec1 from "../../../assests/Home/sec1.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { HashLink as NavLink } from "react-router-hash-link";
import pdf from "../../../assests/Home/MM FINAL 1 PAGER.pdf";

const HomeSection1 = () => {
  return (
    <>
      <div className="homeSection1" id="home">
        <img src={Sec1} alt="ERROR" className="back" />

        <div className="content">
          <div className="heading">
            ONBOARD THE GREATEST SPACE MISSION OF ALL TIME!
          </div>
          <div className="detail1">
            Save The Mooning Monkeys From Imminent Extinction. Earn Astronomical
            Rewards, Exclusive Membership Privileges & A Lifetime Source Of
            Passive Income.
          </div>
          <div className="detail2">
            Join <span> The Mooning Monkeys </span> on their epic space journey,
            an <span> Exclusive NFT Project </span> featuring art from another
            world, and <span> Unrivalled-Utility </span> from galaxies far
            beyond.
          </div>
          <div className="detail3">
            Co-own and profit from the revisited and revamped famous{" "}
            <span> Crash Game </span>, be one of the first to own an{" "}
            <span> Epic Sci-Fi Comic Book </span> in <span> NFT </span> format,
            and become a proud owner of one of the most{" "}
            <span> Stylish, Rare, And Utility-Packed NFT’s </span>.
          </div>
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
      </div>
    </>
  );
};

export default HomeSection1;
