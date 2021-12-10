import React from "react";
import "../Home Section6/homeSection6.scss";
import { Parallax } from "react-parallax";
import { HashLink } from "react-router-hash-link";
import { IoIosArrowForward } from "react-icons/io";
import img7 from "../../../assests/Home2/img7.png";
const HomeSection8 = () => {
  return (
    <>
      <div className="homeSection6">
        <div className="main">
          <div className="heading">TOKEN REWARD PROGRAM</div>
          <div className="section">
            <div className="left">
              <Parallax
                renderLayer={(percentage) => (
                  <div
                    style={{
                      transform: `scale(${
                        1 * (percentage + 0.5) > 1 ? 1 : 1 * (percentage + 0.5)
                      }) `,
                      transition: "all .3s linear",
                    }}
                  >
                    <img src={img7} alt="Error" className="left__img" />
                  </div>
                )}
              ></Parallax>
            </div>

            <div className="right">
              <Parallax
                renderLayer={(percentage) => (
                  <div
                    className="paras"
                    style={{
                      transform: `scale(${
                        1 * (percentage + 0.5) > 1 ? 1 : 1 * (percentage + 0.5)
                      }) `,
                      transition: "all .3s linear",
                    }}
                  >
                    <div className="para">
                      <span>The Mooning Monkey Mission</span> goes far beyond
                      the simple NFT collectible sphere.
                    </div>
                    <div className="para">
                      We are building a galactical ecosystem that will
                      handsomely reward <span>ALL</span> participants. By simply
                      holding any of the evolution <span>NFT’s</span>, you’ll
                      receive daily <span>Takion Tokens ($TAK)</span>
                    </div>
                    <div className="para padding-none">
                      You’ll be able to Yield, stake, evolve earn extra rewards
                      and much more… All of which will{" "}
                      <span>EARN YOU MONEY</span>, passively, without requiring
                      any extra effort.
                    </div>
                  </div>
                )}
              ></Parallax>
              <div className="right__btn">
                <Parallax
                  renderLayer={(percentage) => (
                    <HashLink to="/token">
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
                        TOKEN UTILITY OVERVIEW
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </button>
                    </HashLink>
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

export default HomeSection8;
