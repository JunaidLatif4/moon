import React from "react";
import "../Home Section7/homeSection7.scss";
import { Parallax } from "react-parallax";
import { HashLink } from "react-router-hash-link";
import { IoIosArrowForward } from "react-icons/io";
import img8 from "../../../assests/Home2/img8.png";
const HomeSection9 = () => {
  return (
    <>
      <div className="homeSection7">
        <div className="main">
          <div className="heading">
            <span>INSANE SURPRISES</span>
          </div>

          <div className="section">
            <div className="left">
              <div className="paras">
                <div className="para">
                  These surprises will be announced along with the pre and post
                  roadmap launch of the game. These surprises range from
                  airdrops, to winning prizes, to massive project developments.
                </div>
                <div className="para padding-none">
                  In order to have access to the surprises, all you need to do
                  is own a <span>Mooning Monkey</span>, if you don’t already own
                  one, click <span>HERE</span> to get your own{" "}
                  <span>Mooning Monkey</span> There won’t be another sequel. If
                  you want to be a part of this journey
                </div>
              </div>
              <div className="right__btn">
                <Parallax
                  renderLayer={(percentage) => (
                    <HashLink to="/#roadmap">
                      <button
                        style={{
                          transform: `scale(${
                            1 * (percentage + 0.8) > 1
                              ? 1
                              : 1 * (percentage + 0.8)
                          }) `,
                          transition: "all .3s linear",
                        }}
                      >
                        CHECK OUT ROADMAP
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </button>
                    </HashLink>
                  )}
                ></Parallax>
              </div>
            </div>

            <div className="right">
              <div className="img">
                <Parallax
                  renderLayer={(percentage) => (
                    <div
                      style={{
                        transform: `scale(${
                          1 * (percentage + 0.5) > 1
                            ? 1
                            : 1 * (percentage + 0.5)
                        }) `,
                        transition: "all .3s linear",
                      }}
                    >
                      <img src={img8} alt="Error" className="left__img" />
                    </div>
                  )}
                ></Parallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection9;
