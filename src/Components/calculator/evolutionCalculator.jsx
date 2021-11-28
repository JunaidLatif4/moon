import React, { useState, useEffect } from "react";
import styles from "./calculator.module.css";
import { Slider, InputNumber } from "antd";
import { Row, Col } from "react-bootstrap";
const EvolutionCalculator = () => {
  const [mm, setMm] = useState(24);
  useEffect(() => {
    calculateEvolution();
  }, [mm]);
  const QUOTIENT = (numerator, denominator) => {
    return parseInt(numerator / denominator, 10);
  };
  const MOD = (dividend, divisor) => {
    var modulus = Math.abs(dividend % divisor);
    modulus = dividend < 0 ? divisor - modulus : modulus;
    return divisor > 0 ? modulus : -modulus;
  };
  const calculateEvolution = () => {
    var l1_mm = mm;

    var l2_gg = QUOTIENT(mm, 4);
    var l2_mm = mm - l2_gg * 4;

    var l3_ag = QUOTIENT(mm, 12);
    var l3_gg = QUOTIENT(MOD(mm, 12), 4);
    var l3_mm = mm - l3_gg * 4 - l3_ag * 12;
    // console.log(l3_ag,l3_gg,l3_mm)

    var l4_ey = QUOTIENT(mm, 24);
    var l4_ag = QUOTIENT(MOD(mm, 24), 12);
    var l4_gg = QUOTIENT(MOD(MOD(mm, 24), 12), 4);
    var l4_mm = mm - l4_gg * 4 - l4_ag * 12 - l4_ey * 24;

    document.querySelector("#l1_mm").innerHTML = l1_mm;

    document.querySelector("#l2_gg").innerHTML = l2_gg;
    document.querySelector("#l2_mm").innerHTML = l2_mm;

    document.querySelector("#l3_ag").innerHTML = l3_ag;
    document.querySelector("#l3_gg").innerHTML = l3_gg;
    document.querySelector("#l3_mm").innerHTML = l3_mm;

    document.querySelector("#l4_ey").innerHTML = l4_ey;
    document.querySelector("#l4_ag").innerHTML = l4_ag;
    document.querySelector("#l4_gg").innerHTML = l4_gg;
    document.querySelector("#l4_mm").innerHTML = l4_mm;
  };
  return (
    <div>
      <div className="py-1">
        <p className={styles.pp}>
          Use the Evolution Calculator to determine your evolution possibilities
          based on your initial “Mooning Monkey” holdings or the ones you plan
          to acquire.
        </p>
        {/* <div className={styles.sech}>
          {" "}
          <span style={{ color: "#e343d7" }}>STEP 1: </span>BET SETTINGS
        </div> */}
        <div className={styles.ms} style={{ marginTop: "50px" }}>
          <Row className="d-flex justify-content-between">
            <Col>
              {" "}
              <span className={styles.colr}> Mooning Monkey</span>
            </Col>
            <Col lg={3}>
              <InputNumber
                min={0}
                max={12000}
                style={{ margin: "0 16px" }}
                value={mm}
                onChange={(val) => {
                  setMm(val);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Slider
                min={0}
                max={12000}
                onChange={(val) => {
                  setMm(val);
                }}
                value={typeof mm === "number" ? mm : 0}
              />
            </Col>
          </Row>
          <div className="w-100 d-flex justify-content-between py-3">
            <div className={styles.colrw}>0</div>
            <div className={styles.colrw}>12'000</div>
          </div>
        </div>

        <div className="result-table-sec">
          <div class="table-top-header-1">
            <div class="tth"></div>
            <div class="tth">
              <div>Stay at</div>
            </div>
            <div class="tth">
              <div>Level up to</div>
            </div>
          </div>

          <table class="result-table">
            <thead>
              <tr>
                <th style={{ width: "25%" }}>Stages</th>
                <th style={{ width: "18%" }}>Level 1</th>
                <th>Level 2</th>
                <th>Level 3</th>
                <th>Level 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mooning Monkey</td>
                <td id="l1_mm"></td>
                <td id="l2_mm"></td>
                <td id="l3_mm"></td>
                <td id="l4_mm"></td>
              </tr>
              <tr>
                <td>Galactic Gorilla</td>
                <td>-</td>
                <td id="l2_gg"></td>
                <td id="l3_gg"></td>
                <td id="l4_gg"></td>
              </tr>
              <tr>
                <td>Alien Gorilla</td>
                <td>-</td>
                <td>-</td>
                <td id="l3_ag"></td>
                <td id="l4_ag"></td>
              </tr>
              <tr>
                <td>Eternal Yeti</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td id="l4_ey"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EvolutionCalculator;
