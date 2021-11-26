import React, { useState } from "react";

import styles from "./calculator.module.css";
import ProfitCalculator from "./profitCalculator";

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
              <ProfitCalculator />
            </div>
          </div>
          <div style={{ padding: "50px 0px" }}>
            <table className={styles.table_main}>
              <tr>
                <th>Y6</th>
                <th>Y1</th>
                <th>Y2</th>
                <th>Y3</th>
                <th>Y4</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Get 1 Eternal Yeti by burning 2 Alien Gorilla</td>
                <td rowspan="3">$50</td>
                <td>Maria Anders</td>
              </tr>

              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Get 1 Eternal Yeti by burning 2 Alien Gorilla</td>

                <td>Maria Anders</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Get 1 Eternal Yeti by burning 2 Alien Gorilla</td>

                <td>Maria Anders</td>
              </tr>
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
