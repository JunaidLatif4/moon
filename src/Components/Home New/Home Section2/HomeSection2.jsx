import React from "react";
import "./homeSection2.scss";
import CardImg from "../../../assests/Home/cardg.png";
import BackBlur from "../../../assests/Home/cardback.png";
import { Parallax } from "react-parallax";

const HomeSection2 = () => {
  return (
    <>
      <div className="homeSection2">
        <div className="box">
          <div className="card">
            <img src={BackBlur} alt="ERROR" className="back" />
            <img src={CardImg} alt="ERROR" />
          </div>

          <Parallax
            renderLayer={(percentage) => (
              <div
                className="data"
                style={{
                  transform: `scale(${
                    1 * (percentage + 0.4) > 1 ? 1 : 1 * (percentage + 0.4)
                  })`,
                  transition: "all .2s linear",
                }}
              >
                <div className="heading">RARITY AND SPEC</div>
                <div className="detail">
                  <span> Mooning Monkeys </span> HATE Being Boring Copies Of
                  Each Other,
                </div>
                <div className="detail">
                  This epic space journey is going to begin with{" "}
                  <span> 12,000 </span> exciting, unique, and valuable mooning
                  monkeys being sent to the moon and beyond.
                </div>
                <div className="detail">
                  They will have to evolve to survive, reducing their population
                  to only <span> 500 Elite Beings </span> that are infinitely
                  more powerful, and of course, more <span> Valuable</span>.
                </div>

                <div className="detail margin-none">
                  <span> Unique, Distinct, Rare, And Valuable! </span>
                </div>

                <div className="detail">
                  All <span> Mooning Monkeys </span> are unique crypto heroes
                  that have been drilled around{" "}
                  <span> 239 DISTINCTIVE TRAITS </span> which define their
                  rarity, and their value.
                </div>
              </div>
            )}
          ></Parallax>
        </div>
      </div>
    </>
  );
};

export default HomeSection2;
