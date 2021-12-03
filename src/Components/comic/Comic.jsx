import React, { useState, Component } from "react";
import "./comic.scss";
import part1 from "../../assests/comic/part-1.png";
import part2 from "../../assests/comic/part2.png";
import part3 from "../../assests/comic/part3.png";
import part4 from "../../assests/comic/part4.png";
import NFTPage from "./components/NFTPage/NFTPage";
import ReleasePage from "./components/ReleasePage/ReleasePage";
import ComicModal from "./components/ComicModal/ComicModal";
import { Parallax } from "react-parallax";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const Comic = () => {
  window.scrollTo(0, 0);

  const [comicModal, setComicModal] = useState(true);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="comic__container">
        {/* {comicModal && <ComicModal onClose={() => setComicModal(false)} />} */}
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
                }}
              >
                <h2 className="story_heading_style">THE STORYLINE</h2>
                <div className="text-center">
                  <button className="story_comic_button" onClick={handleOpen}>
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

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="comic-Modal-Component">
          <div className="wrapper">
            <div className="title">The Storyline</div>

            <div className="inner">
              <span>
                Mooning Monkeys are one of many species in the multiverse. They
                are an advanced race just beginning to venture out into the
                final frontier—space. However, before they are able to explore
                much of the universe, their planet is plagued by tragedies.
                Nature is relentless as She batters the planet with dozens of
                natural disasters that rips apart the landscape of the Mooning
                Monkey planet, rendering it nearly uninhabitable. To make
                matters worse, Mooning Monkeys survival seems impossible when a
                mysterious virus wipes out all female Mooning Monkeys.
              </span>
              <span>
                As if these tragedies weren’t enough, a massive, world-ending,
                asteroid hurtles towards the Mooning Monkey’s planet. Determined
                to survive, Mooning Monkey scientists and engineers rush to
                duplicate their greatest invention—a spaceship capable of
                intergalactic travel—and create as many functioning replicas as
                possible. They hope to escape towards safety, but they have no
                plan after leaving the planet. Only seventeen rocket ships are
                built before the asteroid picks up speed and destroys the
                planet.
              </span>
              <span>
                The survivors find themselves trapped on their uninhabitable
                moon, drifting in space with no orbit. They soon discover that
                their moon is caught by the sun’s gravity, and it is being
                pulled towards its fiery surface. To escape impending doom, the
                Mooning Monkeys dismantle most of the rocket ships to create an
                evolution chamber.
              </span>
              <span>
                They hope that the power of science will help their species
                survive, even if they look different in the future. If the
                experiment is a success, they can send their strongest out to
                seek out a habitable future and ensure the survival of the
                species.
              </span>
              <span>
                Follow the Mooning Monkeys as they assemble their evolution
                machine, explore an unknown planet with the Galactic Gorillas,
                battle hostile enemies with the Alien Gorillas, and discover the
                final piece of the puzzle needed to create the Eternal Yeti in
                this thrilling comic series!
              </span>
            </div>

            <div className="cross" onClick={handleClose}>
              <CloseIcon />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Comic;
