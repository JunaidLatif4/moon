import React from "react";
import "./Home2.scss";

import img1 from "../../assests/Home2/img1.png";
import img2 from "../../assests/Home2/img2.png";
import img3 from "../../assests/Home2/img3.png";
import img4 from "../../assests/Home2/img4.png";
import img5 from "../../assests/Home2/img5.png";
import img6 from "../../assests/Home2/img6.png";
import img7 from "../../assests/Home2/img7.png";
import img8 from "../../assests/Home2/img8.png";
import { Parallax } from "react-parallax";
import { IoIosArrowForward } from "react-icons/io";


const Home2 = () => {
  return (
    <>
      <div className="home2__container">
        {/* <div className="sect1">
          <div className="heading">MEMBERSHIP</div>
          <div className="para">
            On top of co-sharing astronomical profits from the game, here is
            what else awaits Mooning Monkey NFT holders….
          </div>

          <div className="grid">
            <div className="box">
              <div className="img">
                <Parallax
                  renderLayer={(percentage) => (
                    <div
                      style={{
                        transform: `scale(${
                          1 * (percentage + 0.2) > 1
                            ? 1
                            : 1 * (percentage + 0.2)
                        }) `,
                        transition: "all .3s linear",
                      }}
                    >
                      <img src={img1} alt="Error" className="box__img" />
                    </div>
                  )}
                ></Parallax>
              </div>
              <div className="box__heading">EVOLUTION MADNESS</div>
              <div className="para1">
                EVOLUTION MADNESS The <span>Mooning Monkeys</span> are facing an
                extinction level event, and, in order to survive, they{" "}
                <span>NEED</span> to <span>EVOLVE</span>. Fortunately, they have
                a plan…
              </div>
              <div className="para2">
                During their travels, they will turn from{" "}
                <span>
                  12,000 Ordinary Mooning Monkeys, into 500 Eternal, Valuable,
                  And Unique Yeti’s.
                </span>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <div className="img">
                  <Parallax
                    renderLayer={(percentage) => (
                      <div
                        style={{
                          transform: `scale(${
                            1 * (percentage + 0.2) > 1
                              ? 1
                              : 1 * (percentage + 0.2)
                          }) `,
                          transition: "all .3s linear",
                        }}
                      >
                        <img src={img2} alt="Error" className="box__img" />
                      </div>
                    )}
                  ></Parallax>
                </div>
              </div>
              <div className="box__heading">COMIC BOOK</div>
              <div className="para1">
                This intriguing and action-packed story, available in a{" "}
                <span>Limited Digital NFT Edition</span>, will bring back the
                excitement you had back as a kid, when you were reading your
                favorite comic books, fantasizing all day about limitless worlds
                and opportunities.
              </div>
            </div>
            <div className="box">
              <div className="img">
                <div className="img">
                  <Parallax
                    renderLayer={(percentage) => (
                      <div
                        style={{
                          transform: `scale(${
                            1 * (percentage + 0.2) > 1
                              ? 1
                              : 1 * (percentage + 0.2)
                          }) `,
                          transition: "all .3s linear",
                        }}
                      >
                        <img src={img3} alt="Error" className="box__img" />
                      </div>
                    )}
                  ></Parallax>
                </div>
              </div>
              <div className="box__heading">TOKEN REWARD PROGRAM</div>
              <div className="para1">
                This membership will give you the opportunity to{" "}
                <span>Earn Even More Rewards</span> by receiving{" "}
                <span>DAILY TAKIONS ($TAK)</span> without having to do any extra
                work, while you simply hold your{" "}
                <span>Mooning Monkeys, AND</span>, passively earn money from
                your game profits.
              </div>
            </div>
            <div className="box">
              <div className="img">
                <div className="img">
                  <Parallax
                    renderLayer={(percentage) => (
                      <div
                        style={{
                          transform: `scale(${
                            1 * (percentage + 0.2) > 1
                              ? 1
                              : 1 * (percentage + 0.2)
                          }) `,
                          transition: "all .3s linear",
                        }}
                      >
                        <img src={img4} alt="Error" className="box__img" />
                      </div>
                    )}
                  ></Parallax>
                </div>
              </div>
              <div className="box__heading">TONS OF SURPRISES</div>
              <div className="para1">
                Unfortunately, since they are surprises, we can’t reveal them
                right now, but just know that we’re talking about the{" "}
                <span> good kind of surprises!</span> (Not The Kind Which Will
                Require You To Evolve Into An Eternal Yeti)
              </div>
            </div>
          </div>
        </div> */}

        <div className="sect2">
          <div className="sect2__left">
            <div className="heading">EVOLUTION MADNESS </div>
            <div className="img">
              <img src={img5} alt="Error" className="left__img" />
            </div>
          </div>
          <div className="sect2__right">
            <div className="right__paras">
              <div className="para1">
                The <span>Mooning Monkeys</span> will go through 3 stages of
                evolution using an advanced technology they’ll find during their
                travels,
              </div>
              <div className="para2">
                Going from <span>Ordinary Mooning Monkeys</span>, to{" "}
                <span> Galactic Gorillas</span>, to <span>Alien Gorillas</span>,
                to the final stage of <span>Eternal Yetis</span>. The more
                evolved your <span>Mooning Monkey</span> is, the more rewards
                and opportunities you’re going to get.
              </div>
              <div className="para3">
                These <span>500 Chosen Mooning Monkeys</span> will eternally
                live on the <span>Solana Blockchain</span>, travelling deep
                space, going on adventures, and constantly providing you with
                passive rewards.
              </div>
            </div>
            <div className="right__btn">
              <Parallax
                renderLayer={(percentage) => (
                  <button
                    // style={{
                    //   transform: `scale(${
                    //     1 * (percentage + 0.2) > 1 ? 1 : 1 * (percentage + 0.2)
                    //   }) `,
                    //   transition: "all .3s linear",
                    // }}
                  >
                    VISIT EVOLUTION LAB
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </button>
                )}
              ></Parallax>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2;
