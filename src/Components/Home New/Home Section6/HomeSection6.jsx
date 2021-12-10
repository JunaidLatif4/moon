import React from "react";
import "./homeSection6.scss";
import { Parallax } from "react-parallax";
import { HashLink } from "react-router-hash-link";
import { IoIosArrowForward } from "react-icons/io";
import img5 from "../../../assests/Home2/img5.png";

const HomeSection6 = () => {
  return (
    <>
      <div className="homeSection6">
        <div className="main">
          <div className="heading">EVOLUTION MADNESS </div>

          <div className="section">
            <div className="left">
              <img src={img5} alt="Error" className="left__img" />
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
                      The <span>Mooning Monkeys</span> will go through 3 stages
                      of evolution using an advanced technology they’ll find
                      during their travels,
                    </div>

                    <div className="para">
                      Going from <span>Ordinary Mooning Monkeys</span>, to{" "}
                      <span> Galactic Gorillas</span>, to{" "}
                      <span>Alien Gorillas</span>, to the final stage of{" "}
                      <span>Eternal Yetis</span>. The more evolved your{" "}
                      <span>Mooning Monkey</span> is, the more rewards and
                      opportunities you’re going to get.
                    </div>

                    <div className="para padding-none">
                      These <span>500 Chosen Mooning Monkeys</span> will
                      eternally live on the <span>Solana Blockchain</span>,
                      travelling deep space, going on adventures, and constantly
                      providing you with passive rewards.
                    </div>
                  </div>
                )}
              ></Parallax>
              <div className="right__btn">
                <Parallax
                  renderLayer={(percentage) => (
                    <HashLink to="/Evaluation">
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
                        VISIT EVOLUTION LAB
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

export default HomeSection6;
