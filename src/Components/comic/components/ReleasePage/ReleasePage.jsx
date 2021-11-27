import React, { useState } from 'react'
import GradiantBtn from '../GradiantBtn/GradiantBtn';
import LightBox from '../LightBox/LightBox';
import "./ReleasePage.css"
import ComingSoon from "../../../../assests/comic/coming-soon.PNG"
import HTMLFlipBook from 'react-pageflip';

const ReleasePage = () => {
    const [activeBox2, setActiveBox2] = useState("1");
    return (
        <div className="release__page">
            <div className="release__page_header">
                <div className="release__page_heading">ENJOY TH LATEST PAGE RELEASES</div>
                <div className="release__page_desc"><span>THIS IS JUST A COMING-SOON SAMPLE! </span> Our comic book releases will be published here in the near future, you'll be able to read them right here as if you were flipping through a book!</div>
                <div className="release__page_menu">
                    <div className={`release__page_menuitem ${activeBox2 == "1" && "active__menu_item"}`} onClick={() => { setActiveBox2("1") }}>Part1</div>
                    <div className={`release__page_menuitem ${activeBox2 == "2" && "active__menu_item"}`} onClick={() => { setActiveBox2("2") }}>Part2</div>
                    <div className={`release__page_menuitem ${activeBox2 == "3" && "active__menu_item"}`} onClick={() => { setActiveBox2("3") }}>Part3</div>
                    <div className={`release__page_menuitem ${activeBox2 == "4" && "active__menu_item"}`} onClick={() => { setActiveBox2("4") }}>Part4</div>
                </div>
            </div>
            {activeBox2 == "1" &&
                <div className="page__release_box2">
                    {/* <HTMLFlipBook width={300} height={500}>
                        <div className="demoPage"><img src={ComingSoon} /></div>
                        <div className="demoPage"><img src={ComingSoon} /></div>
                        <div className="demoPage"><img src={ComingSoon} /></div>
                        <div className="demoPage"><img src={ComingSoon} /></div>
                    </HTMLFlipBook> */}
                </div>
            }
            {activeBox2 !== "1" && <LightBox>
                <div className="releasepage__box2">
                    <div className="releasepage__box2_text">This part is not yet available, in the meantime, feel free to check out other gadgets such as our profit calculator:</div>
                    <GradiantBtn text="PROFILE CALCULATOR" />
                </div>
            </LightBox>
            }
        </div>
    )
}

export default ReleasePage
