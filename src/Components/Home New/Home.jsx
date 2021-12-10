import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import video from "../../assests/video/mooningMonkey.mp4";

import HomeSection1 from "./Home Section1/HomeSection1";
import HomeSection2 from "./Home Section2/HomeSection2";
import HomeSection3 from "./Home Section3/HomeSection3";
import HomeSection4 from "./Home Section4/HomeSection4";
import HomeSection5 from "./Home Section5/HomeSection5";
import HomeSection6 from "./Home Section6/HomeSection6";
import HomeSection7 from "./Home Section7/HomeSection7";
import HomeSection8 from "./Home Section8/HomeSection8";
import HomeSection9 from "./Home Section9/HomeSection9";
import RoadMap from "../Home/components/RoadMap/RoadMap";
import HomeSection11 from "./Home Section11/HomeSection11";
import Question from "../Home/Question";

const Home = () => {
  const [cancel, setCancel] = useState(true);

  return (
    <>
      {cancel == true ? (
        <div className="first-video">
          <div className="video-wrapper">
            <div className="inner">
              <iframe
                loading="lazy"
                src={video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
              ></iframe>
            </div>

            <div
              className="cross"
              onClick={() => {
                setCancel(false);
              }}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      ) : null}
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <HomeSection7 />
      <HomeSection8 />
      <HomeSection9 />
      <RoadMap />
      <HomeSection11 />
      <Question />
    </>
  );
};

export default Home;
