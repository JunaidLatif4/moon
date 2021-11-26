import React, { useState } from "react";

import styles from "./calculator.module.css";
import EvolutionCalculator from "./evolutionCalculator";
import ProfitCalculator from "./profitCalculator";
import StackingCalculator from "./stackingCalculator";

const Calculator = () => {
  const [state, setState] = useState({ x: 0 });
  return (
    <div>
      <div className={styles.bg1}>
        {" "}
        <div className={`${styles.pdd} container`}>
          <div className={`${styles.banner}`}>CALCULATOR</div>
        </div>
      </div>
      <div className={`${styles.bg2} `} style={{ paddingBottom: "50px" }}>
        <div className="container">
          <div className="d-flex justify-content-center py-3 ">
            <div className="d-flex flex-row flex-wrap">
              <div className={styles.cal_headings}>PROFIT CALCULATOR </div>{" "}
              <div style={{ borderRight: "3px solid white " }}></div>
              <div className={styles.cal_headings}>EVOLUTION CALCULATOR</div>
            </div>
          </div>
          <div className="d-flex justify-content-center py-3 ">
            <div className="d-flex flex-row flex-wrap">
              <div className={styles.cal_headings}>EVOLUTION TREE </div>{" "}
              <div style={{ borderRight: "3px solid white " }}></div>
              <div className={styles.cal_headings}>STAKING CALCULATOR</div>
              <div style={{ borderRight: "3px solid white " }}></div>
              <div className={styles.cal_headings}>
                COMICS PROFIT CALCULATOR
              </div>
            </div>
          </div>
          <div className={styles.cardmain}>
            <div className={styles.inercard}>
              {/* <ProfitCalculator /> */}
              {/* <EvolutionCalculator /> */}

              <StackingCalculator />
            </div>
          </div>
          <div style={{ padding: "50px 0px" }}>
            <div className={styles.cust}>REWARD DISTRIBUTION MODEL</div>
            <table className={styles.table_main}>
              <thead>
                <tr>
                  <th>STAGE </th>
                  <th>UNIT</th>
                  <th>REMARKS</th>
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
