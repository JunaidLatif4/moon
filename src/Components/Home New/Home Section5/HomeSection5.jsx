import React from "react";
import "./homeSection5.scss";
import { Parallax } from "react-parallax";
import img1 from "../../../assests/Home2/img1.png";
import img2 from "../../../assests/Home2/img2.png";
import img3 from "../../../assests/Home2/img3.png";
import img4 from "../../../assests/Home2/img4.png";

const HomeSection5 = () => {
  return (
    <>
      <div id="membership" className="homeSection5">
        <div className="heading">MEMBERSHIP</div>
        <Parallax
          // strength={}
          renderLayer={(percentage) => (
            <div
              className="para"
              style={{
                transform: `scale(${
                  1 * (percentage + 0.7) > 1 ? 1 : 1 * (percentage + 0.7)
                })`,
                transition: "all .2s linear",
              }}
            >
              On top of co-sharing astronomical profits from the game, here is
              what else awaits Mooning Monkey NFT holders….
            </div>
          )}
        ></Parallax>

        <div className="grid">
          <div className="box">
            <div className="img">
              <Parallax
                renderLayer={(percentage) => (
                  <div
                    style={{
                      transform: `scale(${
                        1 * (percentage + 0.3) > 1 ? 1 : 1 * (percentage + 0.3)
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
              <span>NEED</span> to <span>EVOLVE</span>. Fortunately, they have a
              plan…
            </div>
            <div className="para2">
              During their travels, they will turn from{" "}
              <span>
                12,000 Ordinary Mooning Monkeys, into 500 Eternal, Valuable, And
                Unique Yeti’s.
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
                          1 * (percentage + 0.3) > 1
                            ? 1
                            : 1 * (percentage + 0.3)
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
                          1 * (percentage + 0.3) > 1
                            ? 1
                            : 1 * (percentage + 0.3)
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
              work, while you simply hold your <span>Mooning Monkeys, AND</span>
              , passively earn money from your game profits.
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
                          1 * (percentage + 0.3) > 1
                            ? 1
                            : 1 * (percentage + 0.3)
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
      </div>
    </>
  );
};

export default HomeSection5;
