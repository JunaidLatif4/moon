import React, { useState, useEffect } from "react";
import moment from "moment";

import { IoIosArrowForward } from "react-icons/io";
import { Parallax } from "react-parallax";

import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

import "./Attributes.scss";

const Attributes = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const targetTime = moment.utc("2021-12-16 07:00 pm");
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div className="attributes_container">
          <div className="box">
            <div className="heading">Mooning Monkey Attributes</div>
            <Parallax
              // strength={}
              renderLayer={(percentage) => (
                <button
                  onClick={handleOpen}
                  style={{
                    transform: `scale(${
                      1 * (percentage + 0.3) > 1 ? 1 : 1 * (percentage + 0.3)
                    })`,
                    transition: "all .2s linear",
                  }}
                >
                  {" "}
                  collection attributes{" "}
                  <span>
                    {" "}
                    <IoIosArrowForward />{" "}
                  </span>{" "}
                </button>
              )}
            ></Parallax>
          </div>

          <div className="box2">
            <Parallax
              // strength={}
              renderLayer={(percentage) => (
                <div
                  className="detail"
                  style={{
                    transform: `scale(${
                      1 * (percentage + 0.4) > 1 ? 1 : 1 * (percentage + 0.4)
                    })`,
                    transition: "all .2s linear",
                  }}
                >
                  ALL MOONING MONKEY ATTRIBUTES WILL BE REVEALED RIGHT AFTER THE
                  SALE…
                </div>
              )}
            ></Parallax>
            <div className="attribute_nftp__left_timer">
              <div className="nftp__timer_days time_bg_box">
                <div className="nftp__timer_daystop">{timeBetween.days()}</div>
                <div className="nftp__timer_daysbottom">Day(s)</div>
              </div>
              <div className="nftp__timer_days time_bg_box">
                <div className="nftp__timer_hourstop">
                  {timeBetween.hours()}
                </div>
                <div className="nftp__timer_hoursbottom">Hour(s)</div>
              </div>
              <div className="nftp__timer_days time_bg_box">
                <div className="nftp__timer_minstop">
                  {timeBetween.minutes()}
                </div>
                <div className="nftp__timer_minsbottom">Minute(s)</div>
              </div>
              <div className="nftp__timer_days time_bg_box">
                <div className="nftp__timer_secondtop">
                  {timeBetween.seconds()}
                </div>
                <div className="nftp__timer_secondbottom">Second(s)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="attribute-Modal-Component">
          <div className="wrapper">
            <div className="title">COLLECTION ATTRIBUTES</div>

            <div className="inner">
              <span className="span">
                This epic space journey is going to begin with{" "}
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  12,000
                </span>{" "}
                excited, unique, and perhaps a bit intimidated monkeys being set
                to the moon and beyond.
              </span>
              <span className="span">
                From there, they’ll bravely jump into deep space to reach a new
                planet, one which they can call home, a planet that can save
                them.
              </span>
              <span className="span">
                However, along the way, they’ll have surpass dozens of
                obstacles, such as travelling in the chaotic deep space,
                fighting intergalactic aliens, and finding out a cure to their
                shackling mortality.
              </span>
              <span className="span">
                They will have to evolve, reducing the initial mooning
                population from 12,000{" "}
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  Normal Mooning Monkeys,
                </span>{" "}
                to only{" "}
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  500 Elite Beings
                </span>{" "}
                that are infinitely more powerful, and of course, more
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  Valuable
                </span>
                .
              </span>
              <span className="span">
                These{" "}
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  500 Chosen Mooning Monkeys
                </span>{" "}
                will eternally live on the
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  {" "}
                  Solana Blockchain
                </span>
                , travelling deep space, going on adventures, and constantly
                overcoming new obstacles in order to keep their species alive.
              </span>
              <span
                className="span"
                style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
              >
                Unique, Distinct, Rare, And Valuable!
              </span>
              <span className="span">
                All{" "}
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  Mooning Monkeys
                </span>{" "}
                are unique crypto heroes that have been drilled around{" "}
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  239 DISTINCTIVE TRAITS.
                </span>
              </span>
              <span className="span">
                Of course, some traits are rarer than others, but this is
                exactly what differentiates them from each other, and what
                defines their rarity.
              </span>
              <span className="span">
                This space flight, with all of the{" "}
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  Mooning Monkeys
                </span>{" "}
                onboard, is set to be minted in {Date}.
              </span>
              <span className="span">
                If you want to be a part of this epic journey, if you want to
                reach the moon alongside your own{" "}
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  Mooning Monkey High-Utility NFT,
                </span>{" "}
                you’ll have to start minting your{" "}
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  Mooning Monkey{" "}
                </span>
                as soon as the countdown below reaches{" "}
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  zero:
                </span>
              </span>
              <span className="span">
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  {" "}
                  P.S.
                </span>{" "}
                The{" "}
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  Mooning Monkeys
                </span>{" "}
                can’t afford failure, this is their only shot at survival, so
                there won’t be another sequel. If you want to be a part of this
                amazing, interesting, and reward-filled journey{" "}
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  {" "}
                  FULL
                </span>{" "}
                of opportunities, you need to start minting{" "}
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  {" "}
                  As Soon As
                </span>{" "}
                the countdown reaches{" "}
                <span
                  style={{ color: "rgb(248,49,236)", fontWeight: "normal" }}
                >
                  zero.
                </span>
              </span>
            </div>

            <div className="cross" onClick={handleClose}>
              <CloseIcon />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Attributes;
