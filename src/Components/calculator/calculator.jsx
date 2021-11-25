import React, { useState } from "react";
import Slider from "react-input-slider";
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
      <div className={`${styles.bg2} `}>
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
