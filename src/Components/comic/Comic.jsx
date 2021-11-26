import React, { Component } from "react";
import "./comic.scss";
import part1 from "../../assests/comic/part-1.png";
import part2 from "../../assests/comic/part2.png";
import part3 from "../../assests/comic/part3.png";
import part4 from "../../assests/comic/part4.png";
const Comic = () => {
  return (
    <>
      <div className="comic__container">
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
          <h2 className="story_heading_style">THE STORYLINE</h2>
          <div className="text-center">
            <button className="story_comic_button">READ STORYLINE</button>
          </div>
        

        <div className="parts_section ">
          <div className="nft_part1_style">
            <div>
              <img src={part1} alt=""  className="image_style image_shadow"/>
            </div>
            {/* <div className="part1_footer">
              <h3>PART 1:</h3>
              <br />
              DARK DAYS
            </div> */}
          </div>
          <div className="nft_part1_style">
            <div>
              <img src={part2} alt="" className="image_style image_shadow1" />
            </div>
            {/* <div className="part1_footer">
              <h3>PART 1:</h3>
              <br />
              DARK DAYS
            </div> */}
          </div>
          <div className="nft_part1_style">
            <div>
              <img src={part3} alt="" className="image_style image_shadow" />
            </div>
            {/* <div className="part1_footer">
              <h3>PART 1:</h3>
              <br />
              DARK DAYS
            </div> */}
          </div>
          <div className="nft_part1_style">
            <div>
              <img src={part4} alt="" className="image_style image_shadow1" />
            </div>
            {/* <div className="part1_footer">
              <h3>PART 1:</h3>
              <br />
              DARK DAYS
            </div> */}
          </div>
        </div>
        </div>

        <div className="nft_section">
          <h2 className="heading_style">OWN AN NFT PAGE OF THE COMIC</h2>
          <div className="d-flex justify-content-center">
            <p className="nft_paragraph">
              Owning a page, or even better, a full comic book, will allow you
              to receive special surprises, bonuses, and rewards!
            </p>
          </div>
        </div>

        <div className="release_section">
          <h2 className="heading_style">ENJOY THE LATEST PAGE RELEASES</h2>
          <div className="d-flex justify-content-center">
            <p className="release_paragraph">
              <span>THIS IS JUST A COMING-SOON SAMPLE!</span>
              Our comic book releases will be published here in the very near
              future, you’ll be able to read them right here as if you were
              flipping through a book!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comic;
