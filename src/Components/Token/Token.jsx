import React from 'react'
import "./Token.scss"
import monkey1 from "../../assests/Token/monkey1.png"
import monkey2 from "../../assests/Token/monkey2.png"

const Token = () => {
    return (
        <div className="token__container">
            <div className="token__header">
                <div className="heading">THE TAKION TOKEN</div>
                <p className="header__para1">
                    WHAT ARE TAKIONS USED FOR?
                </p>
                <p className="header__para2">
                    <span>TAK token</span> is at the center of the <span>Mooning Monkey ecosystem</span> whether you are looking to Yield, evolve your NFT, get additional staking rewards, extra cashback or winning bonuses while playing playing the <span>Mooning Monkey Crash game</span>.
                </p>

            </div>

            <div className="tok__sec1">
                <div>
                    <img src={monkey1} alt="Error" className="sec1__img" />
                </div>
                <div className="sec1__heading">YIELD
                </div>
                <div className="sec1__para">
                    You can yield $TAK via any of the Mooning Monkey evolution or through the NFT comic pages you own.
                </div>
            </div>

            <div className="tok__sec2">
              <div>
              <div className="sec2__left">
                    <div className="left__upper">
                        <div className="upper__heading">MOONING MONKEY NFT</div>
                        <div className="upper__para">
                            Any evolution of the Mooning Monkey ecosystem will provide you with the following reward:
                        </div>
                        <div className="upper__list">
                            <ul>
                                <li> 10 TAK/day</li>
                            </ul>
                        </div>
                    </div>
                    <div className="left__upper">
                        <div className="upper__heading">COMIC PAGE NFT
</div>
                        <div className="upper__para">
                        By simply being a comic page NFT owner, you’ll receive the following rewards:
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
                    <img src={monkey2} alt="" className="sec2__img" />
                </div>
            </div>

        </div>
    )
}

export default Token
