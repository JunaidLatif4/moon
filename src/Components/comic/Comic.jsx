import React, { useState, Component, useEffect } from "react";
import "./comic.scss";
import part1 from "../../assests/comic/part-1.png";
import part2 from "../../assests/comic/part2.png";
import part3 from "../../assests/comic/part3.png";
import part4 from "../../assests/comic/part4.png";
import NFTPage from "./components/NFTPage/NFTPage";
import ReleasePage from "./components/ReleasePage/ReleasePage";
import ComicModal from "./components/ComicModal/ComicModal";
import { Parallax } from "react-parallax";

import $ from "jquery";
const Comic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // document.getElementById("kk").click();
  }, []);

  const [comicModal, setComicModal] = useState(false);

  return (
    <>
      <div className="comic__container">
        {comicModal && <ComicModal onClose={() => setComicModal(false)} />}
        <div className="comic_section">
          <h2 className="heading_style">ONE COMIC,</h2>
          <h2 className="heading_style">ONE EPIC SPACE ODISSEY</h2>
          <div className="d-flex justify-content-center">
            <p className="comic_paragraph">
              AN ACTION PACKED SPACE JOURNEY THAT WILL REIGNITE YOUR LOVE FOR
              COMIC BOOKS
            </p>
          </div>
          <p className="comic_getabsorbed">
            GET ABSORBED INTO A WORLD OF MYSTERY, FANTASY, AND UNLIMITED ACTION!
          </p>
        </div>

        <div className="story_section">
          <Parallax
            // strength={}
            renderLayer={(percentage) => (
              <div
                className="data"
                style={{
                  transform: `scale(${
                    1 * (percentage + 0.2) > 1 ? 1 : 1 * (percentage + 0.2)
                  })`,
                  transition: "all .2s linear",
                  overflow: "unset",
                }}
              >
                <h2 className="story_heading_style">THE STORYLINE</h2>
                <div className="text-center">
                  <button
                    className="story_comic_button"
                    onClick={() => {
                      setComicModal(true);
                    }}
                  >
                    READ STORYLINE
                  </button>
                </div>
              </div>
            )}
          ></Parallax>

          <div className="parts_section ">
            <Parallax
              // strength={}
              renderLayer={(percentage) => (
                <div
                  className="data"
                  style={{
                    transform: `scale(${
                      1 * (percentage + 0.2) > 1 ? 1 : 1 * (percentage + 0.2)
                    })`,
                    transition: "all .2s linear",
                  }}
                >
                  <div className="nft_part1_style">
                    <div>
                      <img
                        src={part1}
                        alt=""
                        className="image_style image_shadow"
                      />
                      <div className="comic__card_bottom">PART 1:DARK DAYS</div>
                    </div>
                    {/* <div className="part1_footer">
              <h3>PART 1:</h3>
              <br />
              DARK DAYS
            </div> */}
                  </div>
                </div>
              )}
            ></Parallax>
            <Parallax
              // strength={}
              renderLayer={(percentage) => (
                <div
                  className="data"
                  style={{
                    transform: `scale(${
                      1 * (percentage + 0.2) > 1 ? 1 : 1 * (percentage + 0.2)
                    })`,
                    transition: "all .2s linear",
                  }}
                >
                  <div className="nft_part1_style">
                    <div>
                      <img
                        src={part2}
                        alt=""
                        className="image_style image_shadow1"
                      />
                      <div className="comic__card_bottom">
                        PART 2: INTO THE UNKNOWN
                      </div>
                    </div>
                    {/* <div className="part1_footer">
              <h3>PART 1:</h3>
              <br />
              DARK DAYS
            </div> */}
                  </div>{" "}
                </div>
              )}
            ></Parallax>
            <Parallax
              // strength={}
              renderLayer={(percentage) => (
                <div
                  className="data"
                  style={{
                    transform: `scale(${
                      1 * (percentage + 0.2) > 1 ? 1 : 1 * (percentage + 0.2)
                    })`,
                    transition: "all .2s linear",
                  }}
                >
                  <div className="nft_part1_style">
                    <div>
                      <img
                        src={part3}
                        alt=""
                        className="image_style image_shadow"
                      />
                      <div className="comic__card_bottom">
                        PART 3: THE LAST RETALIATION
                      </div>
                    </div>
                    {/* <div className="part1_footer">
              <h3>PART 1:</h3>
              <br />
              DARK DAYS
            </div> */}
                  </div>
                </div>
              )}
            ></Parallax>
            <Parallax
              // strength={}
              renderLayer={(percentage) => (
                <div
                  className="data"
                  style={{
                    transform: `scale(${
                      1 * (percentage + 0.2) > 1 ? 1 : 1 * (percentage + 0.2)
                    })`,
                    transition: "all .2s linear",
                  }}
                >
                  <div className="nft_part1_style">
                    <div>
                      <img
                        src={part4}
                        alt=""
                        className="image_style image_shadow1"
                      />
                      <div className="comic__card_bottom">
                        PART 4: THE ETERNITY SPRING
                      </div>
                    </div>
                    {/* <div className="part1_footer">
              <h3>PART 1:</h3>
              <br />
              DARK DAYS
            </div> */}
                  </div>
                </div>
              )}
            ></Parallax>
          </div>
        </div>

        <div className="nft_section">
          <NFTPage />
        </div>

        <div className="release_section">
          <ReleasePage />
        </div>
      </div>
    </>
  );
};

export default Comic;
