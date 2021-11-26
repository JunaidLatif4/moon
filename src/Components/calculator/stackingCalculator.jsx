import React, { useState, useEffect } from "react";
import styles from "./calculator.module.css";
import { Slider, InputNumber } from "antd";
import { Row, Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";

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
const StackingCalculator = () => {
  const [aot, setAot] = useState(0);
  const [total, setTotal] = useState([]);
  useEffect(() => {
    calculateStaking();
  }, [aot]);
  function addCommas(nStr) {
    nStr += "";
    let x = nStr.split(".");
    let x1 = x[0];
    let x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
  }
  const calculateStaking = () => {
    var dataRow = [5, 10, 25, 50, 75, 100];
    var $tak = aot;
    var noDays = 360;

    var apy =
      $tak > 100000
        ? dataRow[5]
        : $tak > 75000
        ? dataRow[4]
        : $tak > 50000
        ? dataRow[3]
        : $tak > 25000
        ? dataRow[2]
        : $tak > 10000
        ? dataRow[1]
        : dataRow[0];
    apy = $tak == 100000 ? 100 : apy;
    var bonusToken = Math.round((($tak * (1 + apy) - $tak) / 365) * noDays);
    var z = (apy / 100) * bonusToken;
    var totalTokens = $tak + bonusToken;
    // console.log(apy)
    var day = Math.round(($tak * (1 + apy / 100) - $tak) / 365);
    var week = Math.round((($tak * (1 + apy / 100) - $tak) / 365) * 7);
    var month = Math.round((($tak * (1 + apy / 100) - $tak) / 365) * 30);
    var year = Math.round((($tak * (1 + apy / 100) - $tak) / 365) * 365);
    setTotal([year, month, week, day]);
    console.log(year, month, week, day);
    document.querySelector("#apy").innerHTML = apy + "%";
    document.querySelector("#dailyTak").innerHTML = addCommas(day.toFixed(0));
    document.querySelector("#weeklyTak").innerHTML = addCommas(week.toFixed(0));
    document.querySelector("#monthlyTak").innerHTML = addCommas(
      month.toFixed(0)
    );
    document.querySelector("#yearlyTak").innerHTML = addCommas(year.toFixed(0));
    console.log(apy, bonusToken, totalTokens, day, week, month, year);

    // chartData = [year, month, week, day];
    // stakingChart.data.datasets[0].data = chartData;
  };
  const labels = ["Year", "Month", "Week", "Day"];
  const data = {
    labels,
    datasets: [
      {
        label: "Rewards",
        data: total,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
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
                min={0}
                max={100000000}
                style={{ margin: "0 16px" }}
                value={aot}
                onChange={(val) => {
                  setAot(val);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Slider
                min={0}
                max={100000000}
                onChange={(val) => {
                  setAot(val);
                }}
                value={typeof aot === "number" ? aot : 0}
              />
            </Col>
          </Row>
          <div className="w-100 d-flex justify-content-between py-3">
            <div className={styles.colrw}>0</div>
            <div className={styles.colrw}>100'000'000</div>
          </div>
        </div>
        <div className={styles.sech}>
          {" "}
          <span style={{ color: "#e343d7" }}>STEP 2: </span>Check Your Staking
          Rewards
        </div>
        <div class="clc-res-sec">
          <div class="vertical-center">
            <div class="clc-res-title">APY:</div>
            <div class="clc-res">
              <span id="apy"></span>
            </div>
          </div>
          <div class="vertical-center">
            <div class="clc-res-title">Daily Rewards:</div>
            <div class="clc-res">
              <span id="dailyTak"></span> $TAK
            </div>
          </div>
          <div class="vertical-center">
            <div class="clc-res-title">Weekly Rewards:</div>
            <div class="clc-res">
              <span id="weeklyTak"></span> $TAK
            </div>
          </div>
          <div class="vertical-center">
            <div class="clc-res-title">Monthly Rewards:</div>
            <div class="clc-res">
              <span id="monthlyTak"></span> $TAK
            </div>
          </div>
          <div class="vertical-center">
            <div class="clc-res-title">Yearly Rewards:</div>
            <div class="clc-res">
              <span id="yearlyTak"></span> $TAK
            </div>
          </div>
        </div>
        <div class="footer-result-sec">
          <div class="total-r">Staking Reward Forecast</div>
          <div class="total-result-text" id="total-earned"></div>
        </div>
        <div>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default StackingCalculator;
