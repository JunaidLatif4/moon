import React, { useState } from "react";
import styles from "./calculator.module.css";
import { Slider, InputNumber } from "antd";
import { Row, Col } from "react-bootstrap";
const ProfitCalculator = () => {
  const [inputValue, setInput] = useState(75000);

  const onChange = (value) => {
    console.log(value);
    setInput(value);
  };
  return (
    <div>
      <div className="py-1">
        <p className={styles.pp}>
          Use the Profit Calculator to determine the crazy lucrative rewards
          you’ll be able to generate by holding “Mooning Monkeys” and other
          evolution stages such as “Galactic Gorillas”, “Alien Gorillas” and
          “Eternal Yetis”
        </p>
        <div className={styles.sech}>
          {" "}
          <span style={{ color: "#e343d7" }}>STEP 1: </span>BET SETTINGS
        </div>
        <div className={styles.ms}>
          <Row className="d-flex justify-content-between">
            <Col>
              {" "}
              <span className={styles.colr}> Daily Bets</span>
            </Col>
            <Col lg={3}>
              <InputNumber
                min={75000}
                max={1000000}
                style={{ margin: "0 16px" }}
                value={inputValue}
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Slider
                min={75000}
                max={1000000}
                onChange={onChange}
                value={typeof inputValue === "number" ? inputValue : 0}
              />
            </Col>
          </Row>
          <div className="w-100 d-flex justify-content-between py-3">
            <div className={styles.colrw}>75'000</div>
            <div className={styles.colrw}>1'000'000</div>
          </div>
        </div>
        <div className={styles.ms}>
          <Row className="d-flex justify-content-between">
            <Col>
              {" "}
              <span className={styles.colr}> Avg wager per bet ($)</span>
            </Col>
            <Col lg={3}>
              <InputNumber
                min={15}
                max={1000}
                style={{ margin: "0 16px" }}
                value={inputValue}
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Slider
                min={75000}
                max={1000000}
                onChange={onChange}
                value={typeof inputValue === "number" ? inputValue : 0}
              />
            </Col>
          </Row>
          <div className="w-100 d-flex justify-content-between py-3">
            <div className={styles.colrw}>15</div>
            <div className={styles.colrw}>1'000</div>
          </div>
        </div>
        <div className={styles.sech}>
          {" "}
          <span style={{ color: "#e343d7" }}>STEP 2: </span>NFT HOLDING SETTINGS
        </div>
        <div className={styles.ms}>
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
                value={inputValue}
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Slider
                min={0}
                max={12000}
                onChange={onChange}
                value={typeof inputValue === "number" ? inputValue : 0}
              />
            </Col>
          </Row>
          <div className="w-100 d-flex justify-content-between py-3">
            <div className={styles.colrw}>0</div>
            <div className={styles.colrw}>12'000</div>
          </div>
        </div>
        <div className={styles.ms}>
          <Row className="d-flex justify-content-between">
            <Col>
              {" "}
              <span className={styles.colr}> Galactic Gorilla</span>
            </Col>
            <Col lg={3}>
              <InputNumber
                min={0}
                max={6000}
                style={{ margin: "0 16px" }}
                value={inputValue}
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Slider
                min={0}
                max={6000}
                onChange={onChange}
                value={typeof inputValue === "number" ? inputValue : 0}
              />
            </Col>
          </Row>
          <div className="w-100 d-flex justify-content-between py-3">
            <div className={styles.colrw}>0</div>
            <div className={styles.colrw}>6'000</div>
          </div>
        </div>
        <div className={styles.ms}>
          <Row className="d-flex justify-content-between">
            <Col>
              {" "}
              <span className={styles.colr}> Alien Gorilla</span>
            </Col>
            <Col lg={3}>
              <InputNumber
                min={0}
                max={3000}
                style={{ margin: "0 16px" }}
                value={inputValue}
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Slider
                min={0}
                max={3000}
                onChange={onChange}
                value={typeof inputValue === "number" ? inputValue : 0}
              />
            </Col>
          </Row>
          <div className="w-100 d-flex justify-content-between py-3">
            <div className={styles.colrw}>0</div>
            <div className={styles.colrw}>3'000</div>
          </div>
        </div>
        <div className={styles.ms}>
          <Row className="d-flex justify-content-between">
            <Col>
              {" "}
              <span className={styles.colr}> Eternal Yeti</span>
            </Col>
            <Col lg={3}>
              <InputNumber
                min={0}
                max={500}
                style={{ margin: "0 16px" }}
                value={inputValue}
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Slider
                min={0}
                max={500}
                onChange={onChange}
                value={typeof inputValue === "number" ? inputValue : 0}
              />
            </Col>
          </Row>
          <div className="w-100 d-flex justify-content-between py-3">
            <div className={styles.colrw}>0</div>
            <div className={styles.colrw}>500</div>
          </div>
        </div>
        <div className={styles.sech}>
          {" "}
          <span style={{ color: "#e343d7" }}>STEP 3: </span>PROFIT FORECAST
        </div>
        <table className={styles.table_main}>
          <tr>
            <th>ALL LEVELS</th>
            <th>Y1</th>
            <th>Y2</th>
            <th>Y3</th>
            <th>Y4</th>
            <th>Y5</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>

          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
        </table>
        <table className={styles.table_main}>
          <tr>
            <th>Y6</th>
            <th>Y1</th>
            <th>Y2</th>
            <th>Y3</th>
            <th>Y4</th>
            <th>Y5</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>

          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProfitCalculator;
