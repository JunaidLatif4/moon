import React from 'react'
import monkey from "../../assests/Lab/monky1.png"
import question from "../../assests/Lab/question.png"



import "./Evaluation.css"

function Evaluation() {
    return (
        <>
            <div>
                <div className="Evaluation_mainDiv">
                    <section className="Evaluation_section1">
                        <div className="Evaluation_Innersection1 container">
                            <h1 className="section1_h1">THE EVOLUTION LAB</h1>
                            <h3 className="section1_h3">Evolve Your Mooning Monkeys To Gain Access To Exclusive Benefits And Of Course, Earn More Rewards!</h3>
                            <h3 className="section1_h33">The Mooning Monkeys NEED To Evolve In Order To Survive, Will You Help Them?</h3>
                            <h4 className="section1_h4">You’ll be able to evolve your Mooning Monkey 3 Times! Each evolution allowing you to earn more as an NFT Holder once the game launches.</h4>

                        </div>
                    </section>


                    {/* cards */}

                    <section className="card_main_section2">
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

                </div>


                {/* section3 */}

                <section className="section3_main ">
                    <div className="section3_innerDiv ">
                        <div className="evolve_section3Div">
                            <h3 className="evolve_section3">EVOLVE NOW</h3>
                            <h4 className="select_section3">Select the available evolution stage according to your Mooning Monkey NFT holding to process the evolution</h4>
                        </div>

                        <div className="active_stageButton">
                            <button className="active_stage2">Stage 2</button>
                            <button className="active_stage22">Stage 3</button>
                            <button className="active_stage22">Stage 4</button>
                        </div>

                        <div className="box_mainDiv">
                            <div className="box_textDiv">
                                <h4 className="box_nftText">My NFT Mooning Monkeys</h4>



                                <div className="first_textDiv">
                                    <p className="order_text">In order to achieve the powerful <span className="gal">Galactic Gorilla</span>, you’ll have to sacrifice 4 of your current <span className="gal">Mooning Monkeys</span> to depart into deep space and surpass
                                        the obstacles they’ll encounter on their way to the new planet.</p>
                                    <p className="note_text"><span className="gal">NOTE:</span> By clicking “<span className="gal">Evolve</span>”, the <span>Mooning Monkeys</span> you’ve chosen will be sent to a Solana
                                        black hole wallet and disappear forever, however,
                                        <span>EACH EVOLUTION</span> will make you more money in the <span className="gal">Mooning Monkey Game.</span></p>
                                </div>


                                <div className="evolve_process">
                                    <div className="border_main_div">
                                        <h4>Start evolve process</h4>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div>
                                        <img src={question} />

                                    </div>
                                </div>      </div>


                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default Evaluation
