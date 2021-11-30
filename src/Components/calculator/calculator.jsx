import React, { useState } from "react";

import styles from "./calculator.module.css";
import EvolutionCalculator from "./evolutionCalculator";

import StackingCalculator from "./stackingCalculator";
import "./evolutionTree.modules.css";
import ProfitCalculator from "./profitCalculator";
import EvolutionTree from "./evolutionTree";
import ComsicProfit from "./comsicProfit";
import "../Home/Home.scss";
import Table from "../calculator/table"
const Calculator = () => {
  window.scrollTo(0, 0);

  const [state, setState] = useState("1");
  return (
    <div>
      <div className={styles.bg1}>
        {" "}
        <div className={`${styles.pdd} container`}>
          <div className={`${styles.banner}`}>CALCULATOR</div>
        </div>
      </div>

      <div className={`${styles.bg2} `} style={{ paddingBottom: "50px" }}>
        <div className={`${styles.c_width}`}>
          <div className="cal__btn__wrapper1">
            <div
              className={state == "1" ? styles.pcolor : styles.cal_headings}
              onClick={() => {
                setState("1");
              }}
            >
              PROFIT CALCULATOR{" "}
            </div>{" "}
            <div
              style={{ borderRight: "3px solid white " }}
              className="dn"
            ></div>
            <div
              className={state == "2" ? styles.pcolor : styles.cal_headings}
              onClick={() => {
                setState("2");
              }}
            >
              EVOLUTION CALCULATOR
            </div>
            <div
              style={{ borderRight: "3px solid white " }}
              className="dn"
            ></div>
            <div
              className={state == "3" ? styles.pcolor : styles.cal_headings}
              onClick={() => {
                setState("3");
              }}
            >
              EVOLUTION TREE{" "}
            </div>{" "}
            <div
              style={{ borderRight: "3px solid white " }}
              className="dn"
            ></div>
            <div
              className={state == "4" ? styles.pcolor : styles.cal_headings}
              onClick={() => {
                setState("4");
              }}
            >
              STAKING CALCULATOR
            </div>
            <div
              style={{ borderRight: "3px solid white " }}
              className="dn"
            ></div>
            <div
              className={state == "5" ? styles.pcolor : styles.cal_headings}
              onClick={() => {
                setState("5");
              }}
            >
              COMICS PROFIT CALCULATOR
            </div>
          </div>

          {/* <div className="cal__btn__wrapper2">
            <div
              className={state == "3" ? styles.pcolor : styles.cal_headings}
              onClick={() => {
                setState("3");
              }}
            >
              EVOLUTION TREE{" "}
            </div>{" "}
            <div
              style={{ borderRight: "3px solid white " }}
              className="dn"
            ></div>
            <div
              className={state == "4" ? styles.pcolor : styles.cal_headings}
              onClick={() => {
                setState("4");
              }}
            >
              STAKING CALCULATOR
            </div>
            <div
              style={{ borderRight: "3px solid white " }}
              className="dn"
            ></div>
            <div
              className={state == "5" ? styles.pcolor : styles.cal_headings}
              onClick={() => {
                setState("5");
              }}
            >
              COMICS PROFIT CALCULATOR
            </div>
          </div> */}

          {/* <div className={`d-flex justify-content-center py-3 ${styles.cal_h}`}>
            <div className={`d-flex flex-row flex-wrap ${styles.cal_h}`}>
              <div
                className={state == "1" ? styles.pcolor : styles.cal_headings}
                onClick={() => {
                  setState("1");
                }}
              >
                PROFIT CALCULATOR{" "}
              </div>{" "}
              <div
                style={{ borderRight: "3px solid white " }}
                className="dn"
              ></div>
              <div
                className={state == "2" ? styles.pcolor : styles.cal_headings}
                onClick={() => {
                  setState("2");
                }}
              >
                EVOLUTION CALCULATOR
              </div>
            </div>
          </div>
          <div className={`d-flex justify-content-center py-3 `}>
            <div className={`d-flex flex-row flex-wrap ${styles.cal_h}`}>
              <div
                className={state == "3" ? styles.pcolor : styles.cal_headings}
                onClick={() => {
                  setState("3");
                }}
              >
                EVOLUTION TREE{" "}
              </div>{" "}
              <div
                style={{ borderRight: "3px solid white " }}
                className="dn"
              ></div>
              <div
                className={state == "4" ? styles.pcolor : styles.cal_headings}
                onClick={() => {
                  setState("4");
                }}
              >
                STAKING CALCULATOR
              </div>
              <div
                style={{ borderRight: "3px solid white " }}
                className="dn"
              ></div>
              <div
                className={state == "5" ? styles.pcolor : styles.cal_headings}
                onClick={() => {
                  setState("5");
                }}
              >
                COMICS PROFIT CALCULATOR
              </div>
            </div>
          </div> */}

          <div className={styles.cardmain}>
            <div className={styles.inercard}>
              {(() => {
                switch (state) {
                  case "1":
                    return <ProfitCalculator />;
                  case "2":
                    return <EvolutionCalculator />;
                  case "3":
                    return <EvolutionTree name="calculator_Question_secton_bottom_border" evolutionText="  Use the Evolution Tree tab if you want a quick understanding of how many
                    “Mooning Monkeys” you’ll need in order to go through all of the
                    evolution stages and reach the extremely rare and desired stage of
                    Eternal Yeti" />;
                  case "4":
                    return <StackingCalculator />;
                  case "5":
                    return <ComsicProfit />;
                }
              })()}
            </div>
          </div>
          <Table title="REWARD DISTRIBUTION MODE" text5="# Rewards and Bonus starts from phase 2 when the Mooning Monkey crash game launches. Revenue represents the proportionate % of revenue from the bank roll for the Mooning Monkey house. 70% of the revenue (where there is profit) will be distributed across the NFT holders as rewards and bonus" />
          {/* <div class="pd__reward">
            <div className={styles.cust}>REWARD DISTRIBUTION MODEL</div>
            <div className="result-table-sec">
              <table class="result-table" style={{ marginBottom: "20px" }}>
                <thead>
                  <tr>
                    <th>STAGE </th>
                    <th>UNIT</th>
                    <th className="remarks-width">REMARKS</th>
                    <th>REWARDS*</th>
                    <th>BONUS*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Eternal Yeti</td>
                    <td>500</td>
                    <td>Get 1 Eternal Yeti by burning 2 Alien Gorilla</td>
                    <td rowspan="4">25%</td>
                    <td>+15%</td>
                  </tr>

                  <tr>
                    <td>Alien Gorilla</td>
                    <td>1,000</td>
                    <td>Get 1 Alien Gorilla by burning 3 Galactic Gorilla</td>

                    <td>+7.5%</td>
                  </tr>
                  <tr>
                    <td>Galactic Gorilla </td>
                    <td>3,000</td>
                    <td>Get 1 Galactic Gorilla by burning 4 Mooning Monkeys</td>

                    <td>+2.5%</td>
                  </tr>
                  <tr>
                    <td>Mooning Monkey </td>
                    <td>12,000</td>
                    <td>None</td>

                    <td>0%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="note-text">
              <p>
                # Rewards and Bonus starts from phase 2 when the Mooning Monkey
                crash game launches. Revenue represents the proportionate % of
                revenue from the bank roll for the Mooning Monkey house. 70% of
                the revenue (where there is profit) will be distributed across
                the NFT holders as rewards and bonus
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* ({state.x})
      <Slider
        axis="x"
        x={state.x}
        onChange={({ x }) => setState((state) => ({ ...state, x }))}
      /> */}
    </div>
  );
};

export default Calculator;
