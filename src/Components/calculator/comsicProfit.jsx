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

const ComsicProfit = () => {
  const [ph, setph] = useState(0);
  const [t1, setT1] = useState([]);
  const [t2, setT2] = useState([]);
  const appendElem = (tag, text, parent) => {
    var elem = document.createElement(tag);
    text =
      typeof text == "number"
        ? text.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          })
        : text;
    elem.innerHTML = text;
    parent.appendChild(elem);
  };
  useEffect(() => {
    calculateComicsProfit();
  }, [ph]);
  const calculateComicsProfit = () => {
    var pageHoldings = ph;

    var revers = 5601;
    pageHoldings = pageHoldings == 0 ? 0 : revers - pageHoldings;
    var bets = 75000;
    var wager = 15;

    var betsWins_data = betsWinsComics(bets, wager);
    let cBack__ = cBackComics(betsWins_data);
    let cBackWin = cBack_comics(cBack__, "win");
    let cBackLoss = cBack_comics(cBack__, "loss");

    var revShare_data = revShareComics(
      betsWins_data,
      cBackWin,
      cBackLoss,
      pageHoldings
    );

    var rr1 = revShare_data[21];
    var rr2 = revShare_data[22];
    // console.log(revShare_data)
    let rewardArr = [];
    var comicsPageT = 0;
    var comicsIssueT = 0;

    let rewardRow = document.createElement("tr");
    let bonusRow = document.createElement("tr");
    appendElem("td", "Comics Per Page", rewardRow);
    appendElem("td", "Comics Per Issue", bonusRow);

    let rewardRow1 = document.createElement("tr");
    let bonusRow1 = document.createElement("tr");
    for (let x = 0; x < 10; x++) {
      comicsPageT += rr1[x];
      comicsIssueT += rr2[x];
      if (x < 5) {
        appendElem("td", rr1[x], rewardRow);
        appendElem("td", rr2[x], bonusRow);
      } else {
        appendElem("td", rr1[x], rewardRow1);
        appendElem("td", rr2[x], bonusRow1);
      }
    }

    appendElem("td", comicsPageT, rewardRow1);
    appendElem("td", comicsIssueT, bonusRow1);
    document.querySelector("#comics-data").innerHTML = "";
    document.querySelector("#comics-data1").innerHTML = "";

    document.querySelector("#comics-data").appendChild(rewardRow);
    document.querySelector("#comics-data").appendChild(bonusRow);

    document.querySelector("#comics-data1").appendChild(rewardRow1);
    document.querySelector("#comics-data1").appendChild(bonusRow1);
    setT1(rr1);
    setT2(rr2);
  };
  ////// Bets & Wins
  const betsWinsComics = (bets, wager) => {
    var mg = 1.5 / 100; // Monthly Growth
    var mg1 = 1.5 / 100; // Monthly Growth
    var btcUsd = 41812.7;
    var houseEdge = 5 / 100;
    var bankroll = 3;

    var arr = [];
    let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15;
    let ar1 = [];
    let ar2 = [];
    let ar3 = [];
    let ar4 = [];
    let ar5 = [];
    let ar6 = [];
    let ar7 = [];
    let ar8 = [];
    let ar9 = [];
    let ar10 = [];
    let ar11 = [];
    let ar12 = [];
    let ar13 = [];
    let ar14 = [];
    let ar15 = [];
    let at = 0;
    for (let x = 0; x < 22; x++) {
      if (x == 0) {
        a1 = bets * 30;
        at += a1;
        a2 = a1 / 30;
        a3 = wager;
        a4 = a1 * a3;
        a5 = a4 / 30;
        a6 = a4 / btcUsd;
        a7 = a6 / 30;
        a8 = a4 * houseEdge;
        a9 = a8 / 30;
        a10 = a8 / btcUsd;
        a11 = a10 / 30;

        a12 = a4 * bankroll;
        a13 = a12 / 30;
        a14 = a12 / btcUsd;
        a15 = a14 / 30;
      } else if (x < 12) {
        a1 = a1 * (1 + mg);
        at += a1;
        a2 = a1 / 30;
        a3 = a3 * (1 + mg1);
        a4 = a1 * a3;
        a5 = a4 / 30;
        a6 = a4 / btcUsd;
        a7 = a6 / 30;
        a8 = a4 * houseEdge;
        a9 = a8 / 30;
        a10 = a8 / btcUsd;
        a11 = a10 / 30;

        a12 = a4 * bankroll;
        a13 = a12 / 30;
        a14 = a12 / btcUsd;
        a15 = a14 / 30;
      } else if (x == 12) {
        a1 = at;
        a2 = a1 / 365;
        a3 = a3;
        a4 = a1 * a3;
        a5 = a4 / 365;
        a6 = a4 / btcUsd;
        a7 = a6 / 365;
        a8 = a4 * houseEdge;
        a9 = a8 / 365;
        a10 = a8 / btcUsd;
        a11 = a10 / 365;

        a12 = a4 * bankroll;
        a13 = a12 / 365;
        a14 = a12 / btcUsd;
        a15 = a14 / 365;
      } else {
        a1 = a1 * (1 + mg * 12);
        a2 = a1 / 365;
        a3 = a3 * (1 + mg1 * 12);
        a4 = a1 * a3;
        a5 = a4 / 365;
        a6 = a4 / btcUsd;
        a7 = a6 / 365;
        a8 = a4 * houseEdge;
        a9 = a8 / 365;
        a10 = a8 / btcUsd;
        a11 = a10 / 365;

        a12 = a4 * bankroll;
        a13 = a12 / 365;
        a14 = a12 / btcUsd;
        a15 = a14 / 365;
      }

      ar1.push(a1);
      ar2.push(a2);
      ar3.push(a3);
      ar4.push(a4);
      ar5.push(a5);
      ar6.push(a6);
      ar7.push(a7);
      ar8.push(a8);
      ar9.push(a9);
      ar10.push(a10);
      ar11.push(a11);
      ar12.push(a12);
      ar13.push(a13);
      ar14.push(a14);
      ar15.push(a15);
    }
    // console.log(ar11)
    arr.push(
      ar1,
      ar2,
      ar3,
      ar4,
      ar5,
      ar6,
      ar7,
      ar8,
      ar9,
      ar10,
      ar11,
      ar12,
      ar13,
      ar14,
      ar15
    );
    return arr;
  };
  const cBackComics = (betsWins) => {
    // TOTAL WINS & LOSSES
    var r1 = betsWins[2].slice(12);
    var r2 = betsWins[3].slice(12);
    var r3 = betsWins[7].slice(12);

    var arr = [];
    let a1, a2, a3, a4, a5, a6, a7, a8, a9;
    let ar1 = [];
    let ar2 = [];
    let ar3 = [];
    let ar4 = [];
    let ar5 = [];
    let ar6 = [];
    let ar7 = [];
    let ar8 = [];
    let ar9 = [];
    var wagers = 0;
    for (let x = 0; x < 10; x++) {
      if (x == 0) {
        wagers = 30 / 100;
      } else {
        wagers = wagers * (1 + 10 / 100) > 1 ? 1 : wagers * (1 + 10 / 100);
      }
      a1 = r2[x] - r3[x];
      a2 = r3[x];
      a3 = r1[x];
      a4 = a1 / a3;
      a5 = a4 * (1 - wagers);
      a6 = a4 * wagers;
      a7 = a2 / a3;
      a8 = a7 * (1 - wagers);
      a9 = a7 * wagers;

      ar1.push(a1);
      ar2.push(a2);
      ar3.push(a3);
      ar4.push(a4);
      ar5.push(a5);
      ar6.push(a6);
      ar7.push(a7);
      ar8.push(a8);
      ar9.push(a9);
    }
    arr.push(ar1, ar2, ar3, ar4, ar5, ar6, ar7, ar8, ar9);
    return arr;
  };
  const cBack_comics = (cBack, winLoss) => {
    // CASH BACK - WINS Or Loss
    var wager = cBack[2];
    if (winLoss == "win") {
      var crypto = cBack[4];
      var $tak = cBack[5];
      // Cash Back Assumptions Win
      var cba = [
        [1 / 100, 0 / 100],
        [1.5 / 100, 0 / 100],
        [2 / 100, 0 / 100],
        [2.5 / 100, 0 / 100],
        [3 / 100, 0 / 100],
      ];
    }
    if (winLoss == "loss") {
      var crypto = cBack[7];
      var $tak = cBack[8];
      var cba = [
        [1 / 100, 0.25 / 100],
        [1.5 / 100, 0.5 / 100],
        [2 / 100, 1 / 100],
        [2.5 / 100, 1.5 / 100],
        [3 / 100, 2 / 100],
      ];
    }

    var data = [
      [
        95.0 / 100,
        92.0 / 100,
        88.0 / 100,
        82.0 / 100,
        76.75 / 100,
        69.25 / 100,
        64.5 / 100,
        58.0 / 100,
        49.0 / 100,
        41.0 / 100,
      ],
      [
        4.5 / 100,
        6.0 / 100,
        9.0 / 100,
        12.0 / 100,
        15.0 / 100,
        20.0 / 100,
        22.0 / 100,
        25.0 / 100,
        30.0 / 100,
        35.0 / 100,
      ],
      [
        0.5 / 100,
        1.0 / 100,
        1.5 / 100,
        4.0 / 100,
        6.0 / 100,
        8.0 / 100,
        10.0 / 100,
        12.0 / 100,
        14.0 / 100,
        15.0 / 100,
      ],
      [
        0.0 / 100,
        0.75 / 100,
        1.0 / 100,
        1.25 / 100,
        1.25 / 100,
        1.5 / 100,
        2.0 / 100,
        3.0 / 100,
        4.0 / 100,
        5.0 / 100,
      ],
      [
        0.0 / 100,
        0.25 / 100,
        0.5 / 100,
        0.75 / 100,
        1.0 / 100,
        1.25 / 100,
        1.5 / 100,
        2.0 / 100,
        3.0 / 100,
        4.0 / 100,
      ],
      [
        100.0 / 100,
        100.0 / 100,
        100.0 / 100,
        100.0 / 100,
        100.0 / 100,
        100.0 / 100,
        100.0 / 100,
        100.0 / 100,
        100.0 / 100,
        100.0 / 100,
      ],
    ];

    var arr = [];
    let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11;
    let ar1 = [];
    let ar2 = [];
    let ar3 = [];
    let ar4 = [];
    let ar5 = [];
    let ar6 = [];
    let ar7 = [];
    let ar8 = [];
    let ar9 = [];
    let ar10 = [];
    let ar11 = [];

    let b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11;
    let br1 = [];
    let br2 = [];
    let br3 = [];
    let br4 = [];
    let br5 = [];
    let br6 = [];
    let br7 = [];
    let br8 = [];
    let br9 = [];
    let br10 = [];
    let br11 = [];
    let c1, c2, c3;
    let cr1 = [];
    let cr2 = [];
    let cr3 = [];
    var cbArr = [];
    for (let x = 0; x < 10; x++) {
      a1 = crypto[x] * data[0][x];
      a2 = crypto[x] * data[1][x];
      a3 = crypto[x] * data[2][x];
      a4 = crypto[x] * data[3][x];
      a5 = crypto[x] * data[4][x];

      a6 = a1 * cba[0][1] * wager[x];
      a7 = a2 * cba[1][1] * wager[x];
      a8 = a3 * cba[2][1] * wager[x];
      a9 = a4 * cba[3][1] * wager[x];
      a10 = a5 * cba[4][1] * wager[x];
      a11 = a6 + a7 + a8 + a9 + a10;

      b1 = $tak[x] * data[0][x];
      b2 = $tak[x] * data[1][x];
      b3 = $tak[x] * data[2][x];
      b4 = $tak[x] * data[3][x];
      b5 = $tak[x] * data[4][x];

      b6 = b1 * cba[0][0] * wager[x];
      b7 = b2 * cba[1][0] * wager[x];
      b8 = b3 * cba[2][0] * wager[x];
      b9 = b4 * cba[3][0] * wager[x];
      b10 = b5 * cba[4][0] * wager[x];
      b11 = b6 + b7 + b8 + b9 + b10;

      // TOTAL CASH BACK - WINS OR LOSS

      const cashBack = a11 + b11;

      ar1.push(a1);
      ar2.push(a2);
      ar3.push(a3);
      ar4.push(a4);
      ar5.push(a5);
      ar6.push(a6);
      ar7.push(a7);
      ar8.push(a8);
      ar9.push(a9);
      ar10.push(a10);
      ar11.push(a11);

      br1.push(b1);
      br2.push(b2);
      br3.push(b3);
      br4.push(b4);
      br5.push(b5);
      br6.push(b6);
      br7.push(b7);
      br8.push(b8);
      br9.push(b9);
      br10.push(b10);
      br11.push(b11);

      if (winLoss == "win") {
        var assumptions = {
          crypto: 0.99 / 100,
          $tak: 1.99 / 100,
        };
        c1 = crypto[x] * wager[x] * assumptions.crypto;
        c2 = $tak[x] * wager[x] * assumptions.$tak;
        c3 = c1 + c2;
        cr1.push(c1);
        cr2.push(c2);
        cr3.push(c3);
      }

      cbArr.push(cashBack);
    }
    arr.push(
      ar1,
      ar2,
      ar3,
      ar4,
      ar5,
      ar6,
      ar7,
      ar8,
      ar9,
      ar10,
      ar11,
      br1,
      br2,
      br3,
      br4,
      br5,
      br6,
      br7,
      br8,
      br9,
      br10,
      br11,
      cbArr
    );
    if (winLoss == "win") {
      arr.push(cr1, cr2, cr3);
    }
    return arr;
  };
  ////// Rev Share
  const revShareComics = (betsWins, cBackWin, cBackLoss, pageHoldings) => {
    var q_row = betsWins[7].slice(12);
    var cbw10 = cBackWin[10];
    var cbw21 = cBackWin[21];
    var cbw25 = cBackWin[25];

    var cbl10 = cBackLoss[10];
    var cbl21 = cBackLoss[21];
    // console.log(cBackWin)
    var nftB5 = 12000;

    var mmShare = 50 / 100;
    var BankRoller = 50 / 100;

    var nftHolders = 50 / 100;
    var marketing = 20 / 100;
    var tech = 10 / 100;
    var team = 10 / 100;
    var others = 10 / 100;

    var nftReward = 50 / 100;

    var mooningMonkey = 0 / 100;
    var galacticGorilla = 10 / 100;
    var alienGorilla = 30 / 100;
    var eternalYeti = 60 / 100;

    var arr = [];
    let a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
      a18,
      a19,
      a20,
      a21,
      aa1,
      aa2;
    let ar1 = [];
    let ar2 = [];
    let ar3 = [];
    let ar4 = [];
    let ar5 = [];
    let ar6 = [];
    let ar7 = [];
    let ar8 = [];
    let ar9 = [];
    let ar10 = [];
    let ar11 = [];
    let ar12 = [];
    let ar13 = [];
    let ar14 = [];
    let ar15 = [];
    let ar16 = [];
    let ar17 = [];
    let ar18 = [];
    let ar19 = [];
    let ar20 = [];
    let ar21 = [];

    let aar1 = [];
    let aar2 = [];
    for (let x = 0; x < q_row.length; x++) {
      a1 = q_row[x];
      a2 = cbw25[x];
      a3 = cbw10[x] + cbw21[x] + cbl10[x] + cbl21[x];
      a4 = a1 - a2 - a3;
      a5 = a4 * mmShare;
      a6 = a4 * BankRoller;

      a7 = a5 * nftHolders;
      a8 = a5 * marketing;
      a9 = a5 * tech;
      a10 = a5 * team;
      a11 = a5 * others;
      a12 = a7 + a8 + a9 + a10 + a11;

      a13 = (a7 * nftReward) / nftB5;
      a14 = a13 * nftB5;
      a15 = a7 - a14;

      a16 = a15 * mooningMonkey;
      a17 = a15 * galacticGorilla;
      a18 = a15 * alienGorilla;
      a19 = a15 * eternalYeti;
      a20 = a16 + a17 + a18 + a19;
      a21 = a7 - (a15 + a20);

      // console.log(a21,a7.toFixed(4),(a15+a20).toFixed(4))

      aa1 = isFinite(a9 / pageHoldings) ? a9 / pageHoldings : 0;
      aa2 = aa1 * 14;

      aar1.push(aa1);
      aar2.push(aa2);

      ar1.push(a1);
      ar2.push(a2);
      ar3.push(a3);
      ar4.push(a4);
      ar5.push(a5);
      ar6.push(a6);
      ar7.push(a7);
      ar8.push(a8);
      ar9.push(a9);
      ar10.push(a10);
      ar11.push(a11);
      ar12.push(a12);
      ar13.push(a13);
      ar14.push(a14);
      ar15.push(a15);
      ar16.push(a16);
      ar17.push(a17);
      ar18.push(a18);
      ar19.push(a19);
      ar20.push(a20);
      ar21.push(a21);
    }
    // console.log(ar11)
    arr.push(
      ar1,
      ar2,
      ar3,
      ar4,
      ar5,
      ar6,
      ar7,
      ar8,
      ar9,
      ar10,
      ar11,
      ar12,
      ar13,
      ar14,
      ar15,
      ar16,
      ar17,
      ar18,
      ar19,
      ar20,
      ar21,
      aar1,
      aar2
    );
    // console.log(arr)
    return arr;
  };
  function getRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const labels = ["Y1", "Y2", "Y3", "Y4", "Y5", "Y6", "Y7", "Y8", "Y9", "Y10"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: t1,
        backgroundColor: "#620AC5",
        // borderColor: labels.map(() => getRandomColor()),
        borderWidth: 0.5,
      },
    ],
  };
  const data1 = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: t2,
        backgroundColor: "#620AC5",
        // borderColor: labels.map(() => getRandomColor()),
        borderWidth: 0.5,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
      <div className="py-1">
        <p className={styles.pp}>
          NFT and non NFT holders are welcome to the staking rewards.
          <br />
          Enter your current TAK amount to see your potential rewards.
        </p>
        <div className={styles.sech}>
          {" "}
          <span style={{ color: "#e343d7" }}>STEP 1: </span>Enter Your Page
          Holdings
        </div>
        <div className={styles.ms}>
          <Row className="d-flex justify-content-between">
            <Col>
              {" "}
              <span className={styles.colr}> Page Holdings</span>
            </Col>
            <Col lg={3}>
              <InputNumber
                min={0}
                max={5600}
                style={{ margin: "0 16px" }}
                value={ph}
                onChange={(val) => {
                  setph(val);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Slider
                min={0}
                max={5600}
                onChange={(val) => {
                  setph(val);
                }}
                value={typeof ph === "number" ? ph : 0}
              />
            </Col>
          </Row>
          <div className="w-100 d-flex justify-content-between py-3">
            <div className={styles.colrw}>0</div>
            <div className={styles.colrw}>5'600</div>
          </div>
        </div>

        <div className={styles.sech}>
          {" "}
          <span style={{ color: "#e343d7" }}>STEP 2: </span>Profit Forcast
        </div>
        <div className="result-table-sec">
          <table class="result-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Y1</th>
                <th>Y2</th>
                <th>Y3</th>
                <th>Y4</th>
                <th>Y5</th>
              </tr>
            </thead>
            <tbody id="comics-data"></tbody>
          </table>
          <table class="result-table">
            <thead>
              <tr>
                <th>Y6</th>
                <th>Y7</th>
                <th>Y8</th>
                <th>Y9</th>
                <th>Y10</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody id="comics-data1"></tbody>
          </table>
        </div>
        <Row>
          <Col lg={6} sm={12} xs={12}>
            {" "}
            <Bar data={data} options={options} />
          </Col>
          <Col lg={6} sm={12} xs={12}>
            {" "}
            <Bar data={data1} options={options} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ComsicProfit;
