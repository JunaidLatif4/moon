import React from 'react'
import styles from "./calculator.module.css";

const Table = (props) => {

    return (
        <>
            <div class="pd__reward">
                <div className={styles.cust}>{props.title}</div>
                <div className={styles.table_text}>{props.text}</div>
                <div className={styles.table_text}>{props.text2}</div>
                <div className="result-table-sec">
                    <table class="result-table" style={{ marginBottom: "20px" }}>
                        <thead>
                            <tr>
                                <th>STAGE </th>
                                <th>UNIT</th>
                                <th className="remarks-width">REMARKS</th>
                                <th>REWARDS*</th>
                                <th>BONUS*</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Eternal Yeti</td>
                                <td>500</td>
                                <td>Get 1 Eternal Yeti by burning 2 Alien Gorilla</td>
                                <td rowspan="4">25%</td>
                                <td>+15%</td>
                            </tr>

                            <tr>
                                <td>Alien Gorilla</td>
                                <td>1,000</td>
                                <td>Get 1 Alien Gorilla by burning 3 Galactic Gorilla</td>

                                <td>+7.5%</td>
                            </tr>
                            <tr>
                                <td>Galactic Gorilla </td>
                                <td>3,000</td>
                                <td>Get 1 Galactic Gorilla by burning 4 Mooning Monkeys</td>

                                <td>+2.5%</td>
                            </tr>
                            <tr>
                                <td>Mooning Monkey </td>
                                <td>12,000</td>
                                <td>None</td>

                                <td>0%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="note-text">
                    <p>
                        {props.text5}
                        {/* # Rewards and Bonus starts from phase 2 when the Mooning Monkey
                        crash game launches. Revenue represents the proportionate % of
                        revenue from the bank roll for the Mooning Monkey house. 70% of
                        the revenue (where there is profit) will be distributed across
                        the NFT holders as rewards and bonus */}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Table
