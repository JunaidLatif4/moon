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
const ProfitCalculator = () => {
  const [bets, setBets] = useState(75000);
  const [wager, setWager] = useState(15);
  const [mm, setMm] = useState(0);
  const [gg, setGg] = useState(0);
  const [ag, setAg] = useState(0);
  const [ey, setEy] = useState(0);
  const [total, setTotal] = useState([]);
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

  const labels = ["Y1", "Y2", "Y3", "Y4", "Y5", "Y6", "Y7", "Y8", "Y9", "Y10"];

  const data = {
    labels,
    datasets: [
      {
        label: "Rewards",
        data: total[0],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "bonus",
        data: total[1],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Total",
        data: total[2],
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

  useEffect(() => {
    console.log(typeof mm);
    calculateProfit();
  }, [bets, wager, mm, gg, ag, ey]);
  const calculateProfit = () => {
    let betsWins_data = betsWins(bets, wager);
    let cBack__ = cBack(betsWins_data);
    let cBackWin = cBack_(cBack__, "win");
    let cBackLoss = cBack_(cBack__, "loss");
    let revShare_data = revShare(betsWins_data, cBackWin, cBackLoss);
    let nftEarning_data = nftEarning(
      revShare_data,
      mm,
      gg,
      ag,
      ey,
      bets,
      wager
    );
    let final_calc_data = final_calc(
      nftEarning_data,
      mm,
      gg,
      ag,
      ey,
      bets,
      wager
    );
    setTotal([
      final_calc_data.reward,
      final_calc_data.bonus,
      final_calc_data.total,
    ]);
    document.querySelector("#total-earned").innerHTML =
      final_calc_data.totalT.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      });
    console.log("====================================");
    console.log(betsWins_data, "bets final ");
    console.log("====================================");
  };

  const betsWins = (bets, wager) => {
    let mg = 1.5 / 100; // Monthly Growth
    let mg1 = 1.5 / 100; // Monthly Growth
    let btcUsd = 41812.7;
    let houseEdge = 5 / 100;
    let bankroll = 3;

    let arr = [];
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
  const cBack = (betsWins) => {
    // TOTAL WINS & LOSSES
    let r1 = betsWins[2].slice(12);
    let r2 = betsWins[3].slice(12);
    let r3 = betsWins[7].slice(12);

    let arr = [];
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
    let wagers = 0;
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
  const cBack_ = (cBack, winLoss) => {
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

      let cashBack = a11 + b11;

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
  const revShare = (betsWins, cBackWin, cBackLoss) => {
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
      a21;
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
      ar21
    );
    // console.log(arr)
    return arr;
  };
  const nftEarning = (revShare) => {
    var r = revShare;
    var r1 = r[12];
    var r2 = r[13];
    var holders = r[6];

    let ar17 = r[15];
    let ar18 = r[16];
    let ar19 = r[17];
    let ar20 = r[18];
    // console.log(holders)

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
      a22;
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
    // let ar17 = [];
    // let ar18 = [];
    // let ar19 = [];
    // let ar20 = [];
    let ar21 = [];
    let ar22 = [];

    let ar23 = [];
    let ar24 = [];
    let ar25 = [];

    let ar26 = [];
    let ar27 = [];
    let ar28 = [];

    let ar29 = [];
    let ar30 = [];
    let ar31 = [];

    let ar32 = [];
    let ar33 = [];
    let ar34 = [];

    var mooningMonkey = 12000;
    var galacticGorilla = 3000;
    var alienGorilla = 1000;
    var eternalYeti = 500;
    for (let x = 0; x < 10; x++) {
      a1 = x == 0 ? 90 / 100 : x == 1 || x == 2 ? a1 - 4.5 / 100 : a1 - 5 / 100;
      a2 = x == 0 ? 5 / 100 : a2 + 3 / 100;
      a3 = x == 0 ? 3 / 100 : a3 + 1 / 100;
      a4 = x == 0 ? 2 / 100 : x == 1 || x == 2 ? a4 + 0.5 / 100 : a4 + 1 / 100;
      a5 = a1 + a2 + a3 + a4;

      a6 = mooningMonkey * a1;
      a7 = galacticGorilla * a2;
      a8 = alienGorilla * a3;
      a9 = eternalYeti * a4;
      a10 = a6 + a7 * 4 + a8 * 12 + a9 * 24;

      a11 = a6 * r1[x];
      a12 = a7 * r1[x] * 4;
      a13 = a8 * r1[x] * 12;
      a14 = a9 * r1[x] * 24;
      a15 = a11 + a12 + a13 + a14;
      a16 = r2[x] - a15;

      a17 = ar17[x];
      a18 = ar18[x];
      a19 = ar19[x];
      a20 = ar20[x];
      a21 = a17 + a18 + a19 + a20;
      a22 = holders[x] - a15 - a21;

      let a23 = a11 / a6;
      let a24 = a17 / a6;
      let a25 = a23 + a24;

      let a26 = a12 / a7;
      let a27 = a18 / a7;
      let a28 = a26 + a27;

      let a29 = a13 / a8;
      let a30 = a19 / a8;
      let a31 = a29 + a30;

      let a32 = a14 / a9;
      let a33 = a20 / a9;
      let a34 = a32 + a33;

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
      // ar17.push(a17);
      // ar18.push(a18);
      // ar19.push(a19);
      // ar20.push(a20);
      ar21.push(a21);
      ar22.push(a22);

      ar23.push(a23);
      ar24.push(a24);
      ar25.push(a25);

      ar26.push(a26);
      ar27.push(a27);
      ar28.push(a28);

      ar29.push(a29);
      ar30.push(a30);
      ar31.push(a31);

      ar32.push(a32);
      ar33.push(a33);
      ar34.push(a34);
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
      ar22,
      ar23,
      ar24,
      ar25,
      ar26,
      ar27,
      ar28,
      ar29,
      ar30,
      ar31,
      ar32,
      ar33,
      ar34
    );
    // console.log(arr)
    return arr;
  };
  const final_calc = (nftEarning, mm, gg, ag, ey, bets, wager) => {
    var r = nftEarning;
    var r1 = r[22];
    var r2 = r[23];

    var r3 = r[25];
    var r4 = r[26];

    var r5 = r[28];
    var r6 = r[29];

    var r7 = r[31];
    var r8 = r[32];

    let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12;
    let rewardT = 0;
    let bonusT = 0;
    let totalT = 0;

    let rewardArr = [];
    let bonusArr = [];
    let totalArr = [];

    let rewardRow = document.createElement("tr");
    let bonusRow = document.createElement("tr");
    let totalRow = document.createElement("tr");
    appendElem("td", "Rewards", rewardRow);
    appendElem("td", "Bonus", bonusRow);
    appendElem("td", "Total", totalRow);

    let rewardRow1 = document.createElement("tr");
    let bonusRow1 = document.createElement("tr");
    let totalRow1 = document.createElement("tr");
    for (let x = 0; x < 10; x++) {
      a1 = r1[x] * mm;
      a2 = r2[x] * mm;
      a3 = a1 + a2;

      a4 = r3[x] * gg;
      a5 = r4[x] * gg;
      a6 = a4 + a5;

      a7 = r5[x] * ag;
      a8 = r6[x] * ag;
      a9 = a7 + a8;

      a10 = r7[x] * ey;
      a11 = r8[x] * ey;
      a12 = a10 + a11;

      let reward = a1 + a4 + a7 + a10;
      let bonus = a2 + a5 + a8 + a11;
      let total = reward + bonus;

      rewardArr.push(reward);
      bonusArr.push(bonus);
      totalArr.push(total);

      rewardT += reward;
      bonusT += bonus;
      totalT += total;

      if (x < 5) {
        appendElem("td", reward, rewardRow);
        appendElem("td", bonus, bonusRow);
        appendElem("td", total, totalRow);
      } else {
        appendElem("td", reward, rewardRow1);
        appendElem("td", bonus, bonusRow1);
        appendElem("td", total, totalRow1);
      }
    }

    appendElem("td", rewardT, rewardRow1);
    appendElem("td", bonusT, bonusRow1);
    appendElem("td", totalT, totalRow1);
    document.querySelector("#levels-data").innerHTML = "";
    document.querySelector("#levels-data1").innerHTML = "";

    document.querySelector("#levels-data").appendChild(rewardRow);
    document.querySelector("#levels-data").appendChild(bonusRow);
    document.querySelector("#levels-data").appendChild(totalRow);

    document.querySelector("#levels-data1").appendChild(rewardRow1);
    document.querySelector("#levels-data1").appendChild(bonusRow1);
    document.querySelector("#levels-data1").appendChild(totalRow1);
    return { reward: rewardArr, bonus: bonusArr, total: totalArr, totalT };
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
                value={bets}
                onChange={(val) => {
                  setBets(val);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Slider
                min={75000}
                max={1000000}
                onChange={(val) => {
                  setBets(val);
                }}
                value={typeof bets === "number" ? bets : 0}
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
                value={wager}
                onChange={(val) => {
                  setWager(val);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Slider
                min={15}
                max={1000}
                onChange={(val) => {
                  setWager(val);
                }}
                value={typeof wager === "number" ? wager : 0}
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
                value={gg}
                onChange={(val) => {
                  setGg(val);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Slider
                min={0}
                max={6000}
                onChange={(val) => {
                  setGg(val);
                }}
                value={typeof gg === "number" ? gg : 0}
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
                value={ag}
                onChange={(val) => {
                  setAg(val);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Slider
                min={0}
                max={3000}
                onChange={(val) => {
                  setAg(val);
                }}
                value={typeof ag === "number" ? ag : 0}
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
                value={ey}
                onChange={(val) => {
                  setEy(val);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Slider
                min={0}
                max={500}
                onChange={(val) => {
                  setEy(val);
                }}
                value={typeof ey === "number" ? ey : 0}
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
          <thead>
            {" "}
            <tr>
              <th>ALL LEVELS</th>
              <th>Y1</th>
              <th>Y2</th>
              <th>Y3</th>
              <th>Y4</th>
              <th>Y5</th>
            </tr>
          </thead>
          <tbody id="levels-data"></tbody>
        </table>
        <table className={styles.table_main}>
          <thead>
            {" "}
            <tr>
              <th>Y6</th>
              <th>Y7</th>
              <th>Y8</th>
              <th>Y9</th>
              <th>Y10</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody id="levels-data1"></tbody>
        </table>
        <div class="footer-result-sec">
          <div class="total-result-label">
            Total Earned Over <br /> 10 years:
          </div>
          <div class="total-result-text" id="total-earned"></div>
        </div>
        <div>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ProfitCalculator;
