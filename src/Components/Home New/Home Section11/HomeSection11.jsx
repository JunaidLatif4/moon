import React, { useState } from "react";
import "./homeSection11.scss";
import CardData from "../sec11Data";
import CloseIcon from "@mui/icons-material/Close";

const HomeSection11 = () => {
  const [read, setRead] = useState("0");

  return (
    <>
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

      <div id="team" className="homeSection11">
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
      </div>
    </>
  );
};

export default HomeSection11;
