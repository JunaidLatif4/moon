import React from "react";
import "./Token.scss";
import monkey1 from "../../assests/Token/monkey1.png";
import monkey2 from "../../assests/Token/monkey2.png";
import monkey3 from "../../assests/Token/monkey3.png";
import monkey4 from "../../assests/Token/monkey4.png";
import monkey5 from "../../assests/Token/monkey5.png";
import monkey6 from "../../assests/Token/monkey6.png";
import monkey7 from "../../assests/Token/monkey7.png";
import monkey8 from "../../assests/Token/monkey8.png";

import { IoIosArrowForward } from "react-icons/io";
import { Parallax } from "react-parallax";

const Token = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="token__container">
        <div className="token__header">
          <div className="heading">THE TAKION TOKEN</div>
          <p className="header__para1">WHAT ARE TAKIONS USED FOR?</p>
          <p className="header__para2">
            <span>TAK token</span> is at the center of the{" "}
            <span>Mooning Monkey ecosystem</span> whether you are looking to
            Yield, evolve your NFT, get additional staking rewards, extra
            cashback or winning bonuses while playing the{" "}
            <span>Mooning Monkey Crash game</span>.
          </p>
        </div>

        <div className="tok__sec1">
          <Parallax
            renderLayer={(percentage) => (
              <div
                style={{
                  transform: `scale(${
                    1 * (percentage + 0.5) > 1 ? 1 : 1 * (percentage + 0.5)
                  }) `,
                  transition: "all .3s linear",
                }}
              >
                <img src={monkey1} alt="Error" className="sec1__img" />
              </div>
            )}
          ></Parallax>
          <div className="sec1__heading">YIELD</div>
          <div className="sec1__para">
            You can yield $TAK via any of the Mooning Monkey evolution or
            through the NFT comic pages you own.
          </div>
        </div>

        <div className="tok__sec2">
          <div>
            <div className="sec2__left">
              <div className="left__upper">
                <div className="upper__heading">MOONING MONKEY NFT</div>
                <div className="upper__para">
                  Any evolution of the Mooning Monkey ecosystem will provide you
                  with the following reward:
                </div>
                <div className="upper__list">
                  <ul>
                    <li> 10 TAK/day</li>
                  </ul>
                </div>
              </div>
              <div className="left__upper">
                <div className="upper__heading">COMIC PAGE NFT</div>
                <div className="upper__para">
                  By simply being a comic page NFT owner, you’ll receive the
                  following rewards:
                </div>
                <div className="upper__list">
                  <ul>
                    <li> 15 TAK/day</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sec2__right">
            <Parallax
              renderLayer={(percentage) => (
                <div
                  style={{
                    transform: `scale(${
                      1 * (percentage + 0.2) > 1 ? 1 : 1 * (percentage + 0.2)
                    }) `,
                    transition: "all .3s linear",
                  }}
                >
                  <img src={monkey2} alt="Error" className="sec2__img" />
                </div>
              )}
            ></Parallax>
          </div>
        </div>

        <div className="tok__sec3">
          <div className="sec3__left">
            <Parallax
              renderLayer={(percentage) => (
                <div
                  style={{
                    transform: `scale(${
                      1 * (percentage + 0.2) > 1 ? 1 : 1 * (percentage + 0.2)
                    }) `,
                    transition: "all .3s linear",
                  }}
                >
                  <img src={monkey3} alt="Error" className="sec3__img" />
                </div>
              )}
            ></Parallax>
          </div>
          <div className="sec3__right">
            <div className="right__heading">EVOLVE</div>
            <div className="right__para1">
              In order to evolve your current NFT holding to the next stage of
              evolution you’ll need the following amount of TAK:
            </div>

            <div className="sec3__lists">
              <div className="list__left">
                <div className="heading">EVOLUTION PROCESS</div>
                <ul>
                  <li>4 Mooning Monkeys to 1 Galactic Gorilla:</li>
                  <li>3 Galactic Gorillas to 1 Alien Gorilla:</li>
                  <li>2 Alien Gorillas to 1 Eternal Yeti:</li>
                </ul>
              </div>
              <div className="list__right">
                <div className="heading">STACK TO BURN</div>
                <div>1200</div>
                <div>1350</div>
                <div>1800</div>
              </div>
            </div>
            <div className="sec3__para2">
              NOTE: If you want to proceed to the next evolution level, you can
              either buy more $TAK directly on listed exchanges, or simply wait
              for your daily, passive rewards!
            </div>
          </div>
        </div>

        <div className="tok__sec4">
          <div className="sec4__left">
            <div className="heading">ACQUIRE COMIC PAGES</div>
            <div className="para">
              Besides being able to read through the intriguing, amazing, and
              full-of-action <span>Mooning Monkey Epic Space Odyssey</span>,
              acquiring comic pages earn you great rewards! And, by being a{" "}
              <span>TAK Holder</span> that owns{" "}
              <span>Mooning Monkey NFT Evolutions</span>, you’ll get an unique
              chance to earn extra rewards, exclusive discord chat access, and
              much, much more!
            </div>
          </div>
          <div className="sec4__right">
            <Parallax
              renderLayer={(percentage) => (
                <div
                  style={{
                    transform: `scale(${
                      1 * (percentage + 0.4) > 1 ? 1 : 1 * (percentage + 0.4)
                    }) `,
                    transition: "all .3s linear",
                  }}
                >
                  <img src={monkey4} alt="Error" className="sec1__img" />
                </div>
              )}
            ></Parallax>
          </div>
        </div>

        <div className="tok__sec3">
          <div className="sec3__left">
            <Parallax
              renderLayer={(percentage) => (
                <div
                  style={{
                    transform: `scale(${
                      1 * (percentage + 0.2) > 1 ? 1 : 1 * (percentage + 0.2)
                    }) `,
                    transition: "all .3s linear",
                  }}
                >
                  <img src={monkey5} alt="Error" className="sec3__img" />
                </div>
              )}
            ></Parallax>
          </div>
          <div className="sec3__right">
            <div className="right__heading">STAKING FOR EVERYONE</div>
            <div className="right__para1">
              Even if you do not own any NFT, we welcome anyone in our staking
              program to earn and enjoy the following rewards:
            </div>

            <div className="sec3__lists">
              <div className="list__left">
                <div className="heading">STAKING</div>
                <ul>
                  <li>Up to 10,000</li>
                  <li>10,001 to 25,000</li>
                  <li>25,001 to 50,000</li>
                  <li>50,001 to 75,000</li>
                  <li>75,001 to 100,000</li>
                  <li>100,000+</li>
                </ul>
              </div>
              <div className="list__right">
                <div className="heading">APY</div>
                <div>5%</div>
                <div>10%</div>
                <div>25%</div>
                <div>50%</div>
                <div>75%</div>
                <div>100%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="tok__sec6">
          <div className="sec6__right">
            <div className="heading">EXTRA CASHBACK</div>
            <div className="right__para1">
              Every single player will have the chance to earn extra Cashback on
              top of the initial 0.25%, here’s exactly how it works:
            </div>

            <div className="sec6__lists">
              <ul>
                <li>
                  Minimum of 0.25% if play with SOL, BTC or USDT and up to 2%
                  depending on your total wager overtime
                </li>
                <li>
                  A minimum of 1% when playing with TAK and Up to 3 % depending
                  on your total wager overtime
                </li>
              </ul>
            </div>
          </div>
          <div className="sec6__left">
            <Parallax
              renderLayer={(percentage) => (
                <div
                  style={{
                    transform: `scale(${
                      1 * (percentage + 0.2) > 1 ? 1 : 1 * (percentage + 0.2)
                    }) `,
                    transition: "all .3s linear",
                  }}
                >
                  <img src={monkey6} alt="Error" className="sec6__img" />
                </div>
              )}
            ></Parallax>
          </div>
        </div>

        <div className="tok__sec7">
          <table>
            <tr>
              <th>LEVEL</th>
              <th>LIFETIME BET</th>
              <th>WAGE $TAK</th>
              <th>WAGE CRYPTO</th>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Level 1</li>
                </ul>
              </td>
              <td>Up to $50,000 </td>
              <td>1%</td>
              <td>0.25%</td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Level 2</li>
                </ul>
              </td>
              <td>$50K – $100K </td>
              <td>1.5% </td>
              <td>0.5%</td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Level 3</li>
                </ul>
              </td>
              <td>$100K – $250K </td>
              <td>2% </td>
              <td>1%</td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Level 4</li>
                </ul>
              </td>
              <td>$250K – $500K </td>
              <td>2.5% </td>
              <td>1.5%</td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Level 5</li>
                </ul>
              </td>
              <td>Over $500K </td>
              <td>3% </td>
              <td>2%</td>
            </tr>
          </table>
        </div>

        <div className="tok__sec8">
          <div className="sec8__right">
            <Parallax
              renderLayer={(percentage) => (
                <div
                  style={{
                    transform: `scale(${
                      1 * (percentage + 0.2) > 1 ? 1 : 1 * (percentage + 0.2)
                    }) `,
                    transition: "all .3s linear",
                  }}
                >
                  <img src={monkey7} alt="Error" className="sec8__img" />
                </div>
              )}
            ></Parallax>
          </div>

          <div className="sec8__left">
            <div className="heading">EARN EXTRA CASH ON YOUR WINS</div>
            <div className="right__para1">
              Whenever you use the $TAK token while playing, you’ll earn extra
              on each winning bet, regardless of whether or not you own any of
              the Mooning Monkey Evolutions.
            </div>

            <div className="sec8__list">
              <ul>
                <li>An extra 1% on each winning bet and up to 3%</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tok__sec7">
          <table>
            <tr>
              <th>LEVEL</th>
              <th>LIFETIME BET</th>
              <th>WAGE $TAK</th>
              <th>WAGE CRYPTO</th>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Level 1</li>
                </ul>
              </td>
              <td>Up to $50,000 </td>
              <td>1%</td>
              <td>0.25%</td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Level 2</li>
                </ul>
              </td>
              <td>$50K – $100K </td>
              <td>1.5% </td>
              <td>0.5%</td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Level 3</li>
                </ul>
              </td>
              <td>$100K – $250K </td>
              <td>2% </td>
              <td>1%</td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Level 4</li>
                </ul>
              </td>
              <td>$250K – $500K </td>
              <td>2.5% </td>
              <td>1.5%</td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Level 5</li>
                </ul>
              </td>
              <td>Over $500K </td>
              <td>3% </td>
              <td>2%</td>
            </tr>
          </table>
        </div>

        <div className="tok__sec9">
          <div className="sec9__left">
            <div className="heading">BANKROLL</div>
            <div className="para1">
              Bankrolling is a great way to earn some extra cash, with minimal
              risk!
            </div>
            <div className="para2">Here's An Example:</div>
            <div className="para3">
              If the total bankroll is $1,000 and you contributed $200, you’ll
              receive <span>20%</span> of <span>ALL</span> the house-edge
              profits. In order to access{" "}
              <span>The Mooning Monkey Bankroll Program</span>, you HAVE to be a{" "}
              <span>$TAK</span> holder.
            </div>
          </div>
          <div className="sec9__right">
            <Parallax
              renderLayer={(percentage) => (
                <div
                  style={{
                    transform: `scale(${
                      1 * (percentage + 0.4) > 1 ? 1 : 1 * (percentage + 0.4)
                    }) `,
                    transition: "all .3s linear",
                  }}
                >
                  <img src={monkey8} alt="Error" className="sec1__img" />
                </div>
              )}
            ></Parallax>
          </div>
        </div>
      </div>

      <div className="tok__sec10">
        <div className="para1">
          In our game, whether they win or lose,<span>4% </span> out of the
          <span>5% </span>house hedge is redistributed to players in cashback,
          minimizing the chances of losing!
        </div>
        <div className="para2">
          As you can see, <span>The Crash Game</span> on MooningMonkey.com
          provides unlimited benefits to its players, and this is why so many
          people choose this platform…
        </div>
        <div className="para3">
          You Earn Even If You Lose, And Earn EVEN MORE When You Win!
        </div>
        <div className="para4">
          Visit our staking calculator for non NFT holders to see potential
          earnings
        </div>

        <div className="Token__btn">
          <Parallax
            renderLayer={(percentage) => (
              <button
                style={{
                  transform: `scale(${
                    1 * (percentage + 0.4) > 1 ? 1 : 1 * (percentage + 0.4)
                  }) `,
                  transition: "all .3s linear",
                }}
              >
                CHECK CALCULATORS
                <span>
                  <IoIosArrowForward />
                </span>
              </button>
            )}
          ></Parallax>
        </div>

        <div className="para6">
          $TAK is the utility token at the center of Mooning Monkey ecosystem.
        </div>
        <div className="para6">
          It is NOT investment advice and the $TAK token has NO economic value.
        </div>
      </div>
    </>
  );
};

export default Token;
