import React from "react";
import "./homeSection7.scss";
import { Parallax } from "react-parallax";
import { HashLink } from "react-router-hash-link";
import { IoIosArrowForward } from "react-icons/io";
import img6 from "../../../assests/Home2/img6.png";
const HomeSection7 = () => {
  return (
    <>
      <div className="homeSection7">
        <div className="main">
          <div className="heading">
            <span>THE MOONING MONKEY COMIC SERIE</span>
          </div>

          <div className="section">
            <div className="left">
              <div className="paras">
                <div className="para">
                  The amazing and intriguing{" "}
                  <span>Mooning Monkey Space Odyssey</span> will be released
                  into 4 comic books of 14 pages. If you want to receive a
                  special surprise, you just need to be one of the first 10
                  people to own the full 14 pages of any chapter, trust us, you
                  won’t be disappointed.
                </div>
                <div className="para padding-none">
                  Additionally, owning a full comic will unlock exclusive
                  privileges in the future, and as much as we’d love to tell you
                  what they are, we can’t reveal them just yet.
                </div>
              </div>

              <div className="right__btn">
                <Parallax
                  renderLayer={(percentage) => (
                    <HashLink to="/comic">
                      <button
                        style={{
                          transform: `scale(${
                            1 * (percentage + 0.8) > 1
                              ? 1
                              : 1 * (percentage + 0.8)
                          }) `,
                          transition: "all .3s linear",
                        }}
                      >
                        CHECK OUT COMIC PAGE
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </button>
                    </HashLink>
                  )}
                ></Parallax>
              </div>
            </div>

            <div className="right">
              <div className="img">
                <Parallax
                  renderLayer={(percentage) => (
                    <div
                      style={{
                        transform: `scale(${
                          1 * (percentage + 0.5) > 1
                            ? 1
                            : 1 * (percentage + 0.5)
                        }) `,
                        transition: "all .3s linear",
                      }}
                    >
                      <img src={img6} alt="Error" className="left__img" />
                    </div>
                  )}
                ></Parallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection7;
