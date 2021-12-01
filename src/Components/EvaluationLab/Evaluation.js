import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import monkey from "../../assests/Lab/monky1.png";
import question from "../../assests/Lab/question.png";
import border from "../../assests/Lab/border.png";
import sidearrow from "../../assests/Lab/sidearrow.png";
import { IoIosArrowForward } from "react-icons/io";
import "./Evaluation.scss";
import EvolutionTree from "../calculator/evolutionTree";
import { Parallax } from "react-parallax";
import Table from "../calculator/table";

function Evaluation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [active, setActive] = useState("2");
  return (
    <>
      <div>
        <div className="Evaluation_mainDiv">
          <section className="Evaluation_section1">
            <div className="Evaluation_Innersection1 container">
              <h1 className="section1_h1">THE EVOLUTION LAB</h1>
              <h3 className="section1_h3">
                Evolve Your Mooning Monkeys To Gain Access To Exclusive Benefits
                And Of Course, Earn More Rewards!
              </h3>
              <h3 className="section1_h33">
                The Mooning Monkeys NEED To Evolve In Order To Survive, Will You
                Help Them?
              </h3>
              <h4 className="section1_h4">
                You’ll be able to evolve your Mooning Monkey 3 Times! Each
                evolution allowing you to earn more as an NFT Holder once the
                game launches.
              </h4>
            </div>
          </section>

          {/* cards */}

          <Parallax
            // strength={}
            renderLayer={(percentage) => (
              <section
                className="card_main_section2"
                style={{
                  transform: `scale(${
                    1 * (percentage + 0.4) > 1 ? 1 : 1 * (percentage + 0.4)
                  })`,
                  transition: "all .2s linear",
                }}
              >
                <div className="cards_twos">
                  <div className="card_one_section2">
                    <h4 className="h4_section2">Stage 1</h4>
                    <img className="monkey_section2" src={monkey} />

                    <h4 className="h44_section2">Mooning Monkey</h4>
                  </div>
                  <div className="card_one_section2">
                    <h4 className="h4_section2">Stage 2</h4>
                    <img className="monkey_section2" src={question} />
                    <h4 className="h44_section2">Galactic Gorilla</h4>
                  </div>
                  <div className="card_one_section2">
                    <h4 className="h4_section2">Stage 3</h4>
                    <img className="monkey_section2" src={question} />
                    <h4 className="h44_section2">Alien Gorilla</h4>
                  </div>
                  <div className="card_one_section2">
                    <h4 className="h4_section2">Stage 4</h4>
                    <img className="monkey_section2" src={question} />
                    <h4 className="h44_section2">Eternal Yeti</h4>
                  </div>
                </div>
              </section>
            )}
          ></Parallax>
        </div>

        {/* section3 */}

        <section className="section3_main ">
          <div className="section3_innerDiv ">
            <div className="evolve_section3Div">
              <h3 className="evolve_section3">EVOLVE NOW</h3>
              <h4 className="select_section3">
                Select the available evolution stage according to your Mooning
                Monkey NFT holding to process the evolution
              </h4>
            </div>

            <div className="active_stageButton">
              <button
                className={`active_stage2 ${active == "2" && "activeBtn"}`}
                onClick={() => setActive("2")}
              >
                Stage 2
              </button>
              <button
                className={`active_stage22 ${active == "3" && "activeBtn"}`}
                onClick={() => setActive("3")}
              >
                Stage 3
              </button>
              <button
                className={`active_stage22 ${active == "4" && "activeBtn"}`}
                onClick={() => setActive("4")}
              >
                Stage 4
              </button>
            </div>
            {active === "2" && (
              <div className="box_mainDiv">
                <div className="box_textDiv">
                  <div className="button_divMa">
                    <div>
                      <h4 className="box_nftText">My NFT Mooning Monkeys</h4>
                    </div>
                    <div className="both_button">
                      <div className="buttons_container">
                        <button>
                          {" "}
                          CONNECT WALLET{" "}
                          <span>
                            {" "}
                            <IoIosArrowForward />{" "}
                          </span>{" "}
                        </button>
                      </div>

                      <div className="buttons_container">
                        <button>
                          {" "}
                          BUY MONKEY{" "}
                          <span>
                            {" "}
                            <IoIosArrowForward />{" "}
                          </span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="first_textDiv">
                    <p className="order_text">
                      In order to achieve the powerful{" "}
                      <span className="gal">Galactic Gorilla</span>, you’ll have
                      to sacrifice 4 of your current{" "}
                      <span className="gal">Mooning Monkeys</span> to depart
                      into deep space and surpass the obstacles they’ll
                      encounter on their way to the new planet.
                    </p>
                    <p className="note_text">
                      <span className="gal">NOTE:</span> By clicking “
                      <span className="gal">Evolve</span>”, the{" "}
                      <span>Mooning Monkeys</span> you’ve chosen will be sent to
                      a Solana black hole wallet and disappear forever, however,
                      <span>EACH EVOLUTION</span> will make you more money in
                      the <span className="gal">Mooning Monkey Game.</span>
                    </p>
                  </div>

                  <div className="evolve_process">
                    <div className="border_main_div">
                      <h4 className="strt_evolve">Start evolve process</h4>
                    </div>
                  </div>

                  <div>
                    <div className="first_round_image">
                      <img className="border_img" src={border} />
                      <img className="border_img ones" src={border} />
                      <img className="border_img ones" src={border} />
                      <img className="border_img ones" src={border} />
                      <img className="sidearrow ones_ar" src={sidearrow} />
                      <div className="ib_marLeft">
                        {" "}
                        <img className="ques_image" src={question} />
                        <div className="button_container">
                          <button>
                            {" "}
                            Evolve{" "}
                            <span>
                              {" "}
                              <IoIosArrowForward />{" "}
                            </span>{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {active === "3" && (
              <div className="box_mainDiv">
                <div className="box_textDiv">
                  <div className="button_divMa">
                    <div>
                      <h4 className="box_nftText">MY NFT GALACTIC GORILLAS</h4>
                    </div>
                    <div className="both_button">
                      <div className="buttons_container">
                        <button>
                          {" "}
                          CONNECT WALLET{" "}
                          <span>
                            {" "}
                            <IoIosArrowForward />{" "}
                          </span>{" "}
                        </button>
                      </div>

                      <div className="buttons_container">
                        <button>
                          {" "}
                          BUY MONKEY{" "}
                          <span>
                            {" "}
                            <IoIosArrowForward />{" "}
                          </span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="first_textDiv">
                    <p className="order_text">
                      The <span className="gal">Alien Gorilla</span>is the{" "}
                      <span className="gal">KEY</span> o winning against the
                      alien invader and winning The Inter-Galactic War, you’ll
                      have to sacrifice
                      <span className="gal">3 Galactic Gorillas</span> in order
                      to achieve such a strong being and protect the species
                      from extinction.
                    </p>
                    <p className="note_text">
                      <span className="gal">NOTE:</span> By clicking “
                      <span className="gal">Evolve</span>”, the{" "}
                      <span>Galactic Gorillas</span> you’ve chosen will be sent
                      to a Solana black hole wallet and disappear forever,
                      however, black hole wallet and disappear forever, however,
                      <span>EACH EVOLUTION</span> will make you more money in
                      the <span className="gal">Mooning Monkey Game.</span>
                    </p>
                  </div>

                  <div className="evolve_process">
                    <div className="border_main_div">
                      <h4 className="strt_evolve">Start evolve process</h4>
                    </div>
                  </div>
                  <div className="round_divTwo">
                    <img className="border_img1" src={border} />
                    <img className="border_img1 doted" src={border} />
                    <img className="border_img1 doted" src={border} />
                    <img className="sidearrow1 doted" src={sidearrow} />
                    <div className="ib_marLeft">
                      <img className="ques_image3" src={question} />
                      <div className="button_container buttonss_container">
                        <button>
                          {" "}
                          Evolve{" "}
                          <span>
                            {" "}
                            <IoIosArrowForward />{" "}
                          </span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {active === "4" && (
              <div className="box_mainDiv">
                <div className="box_textDiv">
                  <div className="button_divMa">
                    <div>
                      <h4 className="box_nftText">MY NFT ALIEN GORILLAS</h4>
                    </div>
                    <div className="both_button">
                      <div className="buttons_container">
                        <button>
                          {" "}
                          CONNECT WALLET{" "}
                          <span>
                            {" "}
                            <IoIosArrowForward />{" "}
                          </span>{" "}
                        </button>
                      </div>

                      <div className="buttons_container">
                        <button>
                          {" "}
                          BUY MONKEY{" "}
                          <span>
                            {" "}
                            <IoIosArrowForward />{" "}
                          </span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="first_textDiv">
                    <p className="order_text">
                      Although <span className="gal">The Alien Gorilla</span> is
                      extremely powerful, it is still bound by the shackles of
                      mortality… as well as an unsettling look that’s not easy
                      on the eye, in order to guarantee the survival of the{" "}
                      <span className="gal">Mooning Monkey’s Species AND</span>{" "}
                      make sure they do so with style… You’ll need to sacrifice
                      <span className="gal"> 2 Of Your Alien Gorillas</span> to
                      make <span className="gal">1 Eternal Yeti</span> that will
                      live forever on the Blockchain and earn the highest
                      possible levels of daily game rewards.
                    </p>
                    <p className="note_text">
                      <span className="gal">NOTE:</span> By clicking “
                      <span className="gal">Evolve</span>”, the{" "}
                      <span>Alien Gorillas</span> you’ve chosen will be sent to
                      a Solana black hole wallet and disappear forever, however,
                      black hole wallet and disappear forever, however,
                      <span className="gal">EACH EVOLUTION</span> will make you
                      more money in the{" "}
                      <span className="gal">Mooning Monkey Game.</span>
                    </p>
                  </div>

                  <div className="evolve_process">
                    <div className="border_main_div">
                      <h4 className="strt_evolve">Start evolve process</h4>
                    </div>
                  </div>

                  <div className="images_divFolder">
                    <img className="border_img2" src={border} />
                    <img className="border_img2 brrr left_im" src={border} />
                    <img className="sidearrow1 arr" src={sidearrow} />
                    <img className="sidearrow1 arrs" src={sidearrow} />

                    <div className="ib_marLeft">
                      <img className="ques_image1" src={question} />
                      <div className="button_container">
                        <button>
                          {" "}
                          Evolve{" "}
                          <span>
                            {" "}
                            <IoIosArrowForward />{" "}
                          </span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <div className="container mt-5 evolution_container">
                            <div className="d-flex justify-content-center">
                                <h2 className="evolution_heading">Evolution Tree</h2>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <h5 className="Evolution_text">
                                    In order to achive evolution,earn and spot among the 500 prestigious
                                    <span className="gal">Eternal Yeti</span>holder's circle ,and receive the highest possible amount of passive rewards, you'll need 24 "<span className="gal">Mooning Monkeys</span>"
                                </h5>
                            </div>
                            <div className="d-flex justify-content-center mt-5">
                                <h5 className="Evolution_text">
                                    Bellow,you can see <span className="gal">The Evolution</span>, a visual that shows you <span className="gal">EXACTLY</span>
                                    how evolution process works:
                                </h5>
                            </div>
                        </div> */}

            <div className="tree_container">
              <div className="container  evolution_container">
                <div className="d-flex justify-content-center">
                  <h2 className="evolution_heading">Evolution Tree</h2>
                </div>
                <div className="d-flex justify-content-center mt-2">
                  <h5 className="Evolution_text">
                    In order to achive evolution,earn and spot among the 500
                    prestigious
                    <span className="gal"> Eternal Yeti </span>holder's circle
                    ,and receive the highest possible amount of passive rewards,
                    you'll need 24 "<span className="gal">Mooning Monkeys</span>
                    "
                  </h5>
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <h5 className="Evolution_text">
                    Bellow,you can see{" "}
                    <span className="gal">The Evolution</span>, a visual that
                    shows you <span className="gal">EXACTLY </span>
                    how evolution process works:
                  </h5>
                </div>
              </div>
              <EvolutionTree name="Question_secton_bottom_border" />
              <Table
                title="EVOLUTION EARNING"
                text="50% Of All Game Profit Will Be Redistributed Mooning Monkeyes NFT Holders"
                text2="The Image Below Show You The Benefits OF Evolving Your Mooning Monkeys:"
                padd={true}
              />
            </div>

            <div className="btn_box">
              <button>
                {" "}
                check out profit calculator{" "}
                <span>
                  {" "}
                  <IoIosArrowForward />{" "}
                </span>{" "}
              </button>
            </div>
          </div>
        </section>

        {/* <EvolutionTree /> */}
      </div>
    </>
  );
}

export default Evaluation;
