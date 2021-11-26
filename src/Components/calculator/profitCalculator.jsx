import React, { useState } from "react";
import styles from "./calculator.module.css";
import { Slider, InputNumber } from "antd";
import { Row, Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const ProfitCalculator = () => {
  const [inputValue, setInput] = useState(75000);

  const onChange = (value) => {
    console.log(value);
    setInput(value);
  };
  const labels = ["Y1", "Y2", "Y3", "Y4", "Y5", "Y6", "Y7", "Y8", "Y9", "Y10"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: 0, max: 80000000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: 0, max: 80000000 })
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Dataset 3",
        data: labels.map(() =>
          faker.datatype.number({ min: 0, max: 80000000 })
        ),
        borderColor: "rgb(253, 162, 235)",
        backgroundColor: "rgba(53, 12, 235, 0.5)",
      },
    ],
  };
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 0.5,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
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
        <div>
          <Bar data={data} options={options} />
        </div>
        
      </div>
    </div>
  );
};

export default ProfitCalculator;
