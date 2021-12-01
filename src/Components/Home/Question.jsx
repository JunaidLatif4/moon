import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import "./Question.scss";
import Dis from "../../assests/Footer/dis.png";
import Send from "../../assests/Footer/send.png";
import Twitter from "../../assests/Footer/twitter.png";

const Question = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpen2 = () => {
    setOpen2(!open2);
  };
  const handleOpen3 = () => {
    setOpen3(!open3);
  };
  const handleOpen4 = () => {
    setOpen4(!open4);
  };
  const handleOpen5 = () => {
    setOpen5(!open5);
  };
  return (
    <>
      <div id="faq" className="question__container">
        <div className="left">
          <div className="left__heading">QUESTIONS?</div>
          <div className="para">WE HAVE THE ANSWERS</div>
          <div className="para2">Our reach us on social media:</div>
          <div className="icons">
            <div className="social_box">
              <img src={Send} alt="" className="img" />
              <img src={Dis} alt="" className="img" />
              <img src={Twitter} alt="" className="img" />
            </div>
          </div>

          <div className="accordian1">
            <div onClick={handleOpen} className="heading">
              <div className="close">
                <div
                  style={{ color: open ? "#f831ec" : "white" }}
                  className="text"
                >
                  WHAT ARE MOONING MONKEYS?
                </div>
                <div className="icon">
                  {open ? (
                    <RemoveCircleIcon style={{ color: "#631de7" }} />
                  ) : (
                    <AddCircleIcon style={{ color: "#631de7" }} />
                  )}
                </div>
              </div>

              <div className={`data ${open ? "show" : null}`}>
                <div className="para1">
                  <span>The Mooning Monkeys</span> are 12,000 exclusive
                  characters that <span>ALL </span>
                  have <span>UNIQUE</span> characteristics.
                </div>
                <div className="para2">
                  <span>The Mooning Monkeys NFT Game</span> is a celebration for
                  gaming, one that encourages gamers to join the{" "}
                  <span>NFT</span> community and make friends, connections, and
                  relationships with like-minded individuals all while
                  potentially making money along the way.
                </div>
              </div>
            </div>
          </div>
          <div className="accordian1">
            <div onClick={handleOpen2} className="heading">
              <div className="close">
                <div
                  style={{ color: open2 ? "#f831ec" : "white" }}
                  className="text"
                >
                  WHERE CAN I BUY ONE?
                </div>
                <div className="icon">
                  {open2 ? (
                    <RemoveCircleIcon style={{ color: "#631de7" }} />
                  ) : (
                    <AddCircleIcon style={{ color: "#631de7" }} />
                  )}
                </div>
              </div>

              <div className={`data ${open2 ? "show" : null}`}>
                <div className="para1">
                  The <span>Mooning Monkeys NFT</span> will be available on our
                  Official Website <span>MooningMonkey.com</span> ONLY.
                </div>
                <div className="para2">
                  one that encourages gamers to join the <span>NFT</span>{" "}
                  community and make friends, connections, and relationships
                  with like-minded individuals the way.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="accordian1 .mtr">
            <div onClick={handleOpen3} className="heading">
              <div className="close">
                <div
                  style={{ color: open3 ? "#f831ec" : "white" }}
                  className="text"
                >
                  WHEN CAN I MINT?
                </div>
                <div className="icon">
                  {open ? (
                    <RemoveCircleIcon style={{ color: "#631de7" }} />
                  ) : (
                    <AddCircleIcon style={{ color: "#631de7" }} />
                  )}
                </div>
              </div>

              <div className={`data ${open3 ? "show" : null}`}>
                <div className="para1">
                  We’re just as excited to get this started as you are, but we
                  want to make sure that everything is <span>PERFECT</span>{" "}
                  before the launch.
                </div>
                <div className="para2">
                  You’ll be able to start minting as as soon as 16.12.21 at the
                  price of <span>XXX USD</span> in <span>SOL</span> value per
                  Mooning Monkey.
                </div>
                <div className="para3">
                  The final amount in SOL will be updated 12h before the sale to{" "}
                  <span>XXX USD </span> per Mooning Monkey.
                </div>
              </div>
            </div>
          </div>
          <div className="accordian1">
            <div onClick={handleOpen4} className="heading">
              <div className="close">
                <div
                  style={{ color: open4 ? "#f831ec" : "white" }}
                  className="text"
                >
                  HOW ARE WE DIFFERENT?
                </div>
                <div className="icon">
                  {open4 ? (
                    <RemoveCircleIcon style={{ color: "#631de7" }} />
                  ) : (
                    <AddCircleIcon style={{ color: "#631de7" }} />
                  )}
                </div>
              </div>

              <div className={`data ${open4 ? "show" : null}`}>
                <div className="para1">
                  <span>NFT’S</span> are fun, and lately, everyone’s starting to
                  pick up on the trend, but nearly all of them miss one of the
                  most important factors of a <span>NFT.</span>
                </div>
                <div className="para2">
                  <span>Real World UTILITY And RARITY,</span> these are two
                  qualities which we BUILT <span>The Mooning Monkeys</span>{" "}
                  upon, allowing you to earn passive rewards, and making sure
                  that it’s a sustainable model which <span>WON’T FAIL.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="accordian1 number3">
            <div onClick={handleOpen5} className="heading">
              <div className="close">
                <div
                  style={{ color: open5 ? "#f831ec" : "white" }}
                  className="text"
                >
                  WHO’S ON THE TEAM?
                </div>
                <div className="icon">
                  {open5 ? (
                    <RemoveCircleIcon style={{ color: "#631de7" }} />
                  ) : (
                    <AddCircleIcon style={{ color: "#631de7" }} />
                  )}
                </div>
              </div>

              <div className={`data ${open5 ? "show" : null}`}>
                <div className="para1">
                  <span> The Mooning Monkeys Project</span> is made for{" "}
                  <span>gamers</span> and <span>NFT enthusiasts</span> to join
                  together and celebrate those 2 things.
                </div>
                <div className="para2">
                  The creators of such a project are, you guessed it, gamers,{" "}
                  <span>NFT</span> enthusiasts, comic book fans and crypto
                  degens, who absolutely <span>LOVE</span> those things, and
                  they want to create a community in which like-minded
                  individuals can talk about their passions and passively earn
                  rewards.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
