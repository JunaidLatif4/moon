import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import styles from "../calculator/calculator.module.css"
import "./attribute.scss";
import Acard from "../../assests/roadmap/roadmap1.png"


const AttributePage = () => {
  const [color, setColor] = useState("1");
  const [tab, setTab] = useState("1");
  const [active, setActive] = useState("1");
  const Fur = [
    {
      text: "Black Crystal",
      img: Acard
    },
    {
      text: "Black",
      img: Acard
    },
    {
      text: "Brown",
      img: Acard
    },
    {
      text: "Cream",
      img: Acard
    },
    {
      text: "Crystal",
      img: Acard
    },
    {
      text: "Fushia",
      img: Acard
    },
    {
      text: "Gold",
      img: Acard
    },
    {
      text: "Jaguar",
      img: Acard
    },
    {
      text: "Lava",
      img: Acard
    },
    {
      text: "Light Purple",
      img: Acard
    },
    {
      text: "Lime Crystal",
      img: Acard
    },
    {
      text: "Marble",
      img: Acard
    },
    {
      text: "Orange",
      img: Acard
    },
    {
      text: "Pink Crystal",
      img: Acard
    },
    {
      text: "Pink",
      img: Acard
    },
    {
      text: "Purple Crystal",
      img: Acard
    },
    {
      text: "Purple",
      img: Acard
    },
    {
      text: "Red",
      img: Acard
    },
    {
      text: "Royal Blue",
      img: Acard
    },
    {
      text: "Shell Nacre",
      img: Acard
    },
    {
      text: "Silver",
      img: Acard
    },
    {
      text: "Sky Blue",
      img: Acard
    },
    {
      text: "Snake Scales",
      img: Acard
    },
    {
      text: "Sol Crystal",
      img: Acard
    },
    {
      text: "Teal Crystal",
      img: Acard
    },
    {
      text: "Tiger",
      img: Acard
    },
    {
      text: "Trippy",
      img: Acard
    },
    {
      text: "Velvet",
      img: Acard
    },
    {
      text: "White",
      img: Acard
    },
    {
      text: "Yellow",
      img: Acard
    },



  ]
  const Mouth = [
    {
      text: "Angry Grin",
      img: Acard
    },
    {
      text: "Bored",
      img: Acard
    },
    {
      text: "Big Smile",
      img: Acard
    },
    {
      text: "Bandana",
      img: Acard
    },
    {
      text: "Cigar",
      img: Acard
    },
    {
      text: "Cigarette",
      img: Acard
    },
    {
      text: "Diamond Grills",
      img: Acard
    },
    {
      text: "Gold Grills",
      img: Acard
    },
    {
      text: "Graffiti Mask",
      img: Acard
    },
    {
      text: "Hannya Mask",
      img: Acard
    },
    {
      text: "Joint",
      img: Acard
    },
    {
      text: "Knocked Out Tooth",
      img: Acard
    },
    {
      text: "Light Shave",
      img: Acard
    },
    {
      text: "Medical Mask",
      img: Acard
    },
    {
      text: "Nija Mask",
      img: Acard
    },
    {
      text: "Oh",
      img: Acard
    },
    {
      text: "Rage",
      img: Acard
    },
    {
      text: "Rainbow Grills",
      img: Acard
    },
    {
      text: "Side grin",
      img: Acard
    },
    {
      text: "Sliver",
      img: Acard
    },
    {
      text: "Smile",
      img: Acard
    },
    {
      text: "Sol Grills",
      img: Acard
    },
    {
      text: "Tangue Out",
      img: Acard
    },
    {
      text: "Underwater Respiration Mask",
      img: Acard
    },
    {
      text: "vampire",
      img: Acard
    },




  ]
  const Eyes = [
    {
      text: "Angry",
      img: Acard
    },
    {
      text: "Black Ghost Eye",
      img: Acard
    },
    {
      text: "Bloodshot",
      img: Acard
    },
    {
      text: "Blue Laser",
      img: Acard
    },
    {
      text: "Bored",
      img: Acard
    },
    {
      text: "BTC",
      img: Acard
    },
    {
      text: "Closed",
      img: Acard
    },
    {
      text: "Crazy",
      img: Acard
    },
    {
      text: "Cyborg Eye",
      img: Acard
    },
    {
      text: "Fire",
      img: Acard
    },
    {
      text: "Hypnotized",
      img: Acard
    },
    {
      text: "In Tears",
      img: Acard
    },
    {
      text: "Laughing",
      img: Acard
    },
    {
      text: "Lime Laser",
      img: Acard
    },
    {
      text: "Love",
      img: Acard
    },
    {
      text: "Popped Eye",
      img: Acard
    },
    {
      text: "Purple Laser",
      img: Acard
    },
    {
      text: "Red Laser",
      img: Acard
    },
    {
      text: "Sad",
      img: Acard
    },
    {
      text: "Snake",
      img: Acard
    },
    {
      text: "Solana Ghost Eye",
      img: Acard
    },
    {
      text: "Surprised",
      img: Acard
    },
    {
      text: "Thinking",
      img: Acard
    },
    {
      text: "Tired",
      img: Acard
    },
    {
      text: "Trippy",
      img: Acard
    },
    {
      text: "White Ghost Eyes",
      img: Acard
    },
    {
      text: "Winking",
      img: Acard
    },
    {
      text: "X Eyes",
      img: Acard
    },





  ]
  const Eyewar = [
    {
      text: "Eye Patch",
      img: Acard
    },
    {
      text: "Holographic",
      img: Acard
    },
    {
      text: "Laser Line",
      img: Acard
    },
    {
      text: "Monocle",
      img: Acard
    },
    {
      text: "Neon",
      img: Acard
    },
    {
      text: "Night Vision",
      img: Acard
    },
    {
      text: "Oversized Mirror",
      img: Acard
    },
    {
      text: "Round Glasses",
      img: Acard
    },
    {
      text: "Scouter",
      img: Acard
    },
    {
      text: "Snowboard",
      img: Acard
    },
    {
      text: "Sol Glasses",
      img: Acard
    },
    {
      text: "Sol Laser Line",
      img: Acard
    },
    {
      text: "Star Shaped",
      img: Acard
    },
    {
      text: "Sunglasses",
      img: Acard
    },
    {
      text: "Swimming goggles",
      img: Acard
    },
    {
      text: "Welding Goggles",
      img: Acard
    },






  ]
  const Style = [
    {
      text: "Army Uniform",
      img: Acard
    },
    {
      text: "Astro Suit",
      img: Acard
    },
    {
      text: "Bike Jacket",
      img: Acard
    },
    {
      text: "Black Armor",
      img: Acard
    },
    {
      text: "Black Jacket",
      img: Acard
    },
    {
      text: "Black Undershirt",
      img: Acard
    },
    {
      text: "Centurion Armor",
      img: Acard
    },
    {
      text: "Chef Apron",
      img: Acard
    },
    {
      text: "Coat",
      img: Acard
    },
    {
      text: "Convict Suit",
      img: Acard
    },
    {
      text: "Cowboy Jacket",
      img: Acard
    },
    {
      text: "Deadly Suit",
      img: Acard
    },
    {
      text: "Emperor Armor",
      img: Acard
    },
    {
      text: "Gladiator Shoulder Pad",
      img: Acard
    },
    {
      text: "Hawaiian Shirt",
      img: Acard
    },
    {
      text: "Hoodie",
      img: Acard
    },
    {
      text: "Jeans Jacket",
      img: Acard
    },

    {
      text: "Kimono",
      img: Acard
    },

    {
      text: "Lightrider",
      img: Acard
    },

    {
      text: "Overall",
      img: Acard
    },

    {
      text: "Pimp Jacket",
      img: Acard
    },

    {
      text: "Police Armor",
      img: Acard
    },

    {
      text: "Primitive",
      img: Acard
    },
    {
      text: "Red Jacket",
      img: Acard
    },
    {
      text: "Rescue Suit",
      img: Acard
    },
    {
      text: "Samurai Armor",
      img: Acard
    },
    {
      text: "Scientist Blouse",
      img: Acard
    },
    {
      text: "Shirt and Vest",
      img: Acard
    },
    {
      text: "Sol Astro Suit",
      img: Acard
    },
    {
      text: "Sol Deadly Suit",
      img: Acard
    },
    {
      text: "Sol Hawaiian Shirt",
      img: Acard
    },
    {
      text: "Sol Lightrider",
      img: Acard
    },
    {
      text: "Jeans Jacket",
      img: Acard
    },

    {
      text: "White Undreshirt",
      img: Acard
    },

    {
      text: "Wizard Robe",
      img: Acard
    },







  ]
  const Headgear = [
    {
      text: "Afro",
      img: Acard
    },
    {
      text: "Army Beret",
      img: Acard
    },
    {
      text: "Astro Helmet",
      img: Acard
    },
    {
      text: "Baseball Cap",
      img: Acard
    },
    {
      text: "Beanie",
      img: Acard
    },
    {
      text: "Biker Helmet",
      img: Acard
    },
    {
      text: "Black Fedora",
      img: Acard
    },
    {
      text: "Black Headband",
      img: Acard
    },
    {
      text: "Centurion Helmet",
      img: Acard
    },
    {
      text: "Chef Toque",
      img: Acard
    },
    {
      text: "Clown Wig",
      img: Acard
    },
    {
      text: "Cowboy Hat",
      img: Acard
    },
    {
      text: "Crown",
      img: Acard
    },
    {
      text: "Deadly Helment",
      img: Acard
    },
    {
      text: "General Cap",
      img: Acard
    },
    {
      text: "Gladiator Helmet",
      img: Acard
    },
    {
      text: "Hip Hop Cap",
      img: Acard
    },

    {
      text: "Horned Helmet",
      img: Acard
    },

    {
      text: "Kasa",
      img: Acard
    },

    {
      text: "Lightrider Helmet",
      img: Acard
    },

    {
      text: "Panama Hat",
      img: Acard
    },

    {
      text: "Pimp Hat",
      img: Acard
    },

    {
      text: "Pirate Hat",
      img: Acard
    },
    {
      text: "Police Helmet",
      img: Acard
    },
    {
      text: "Rescue Helmet",
      img: Acard
    },
    {
      text: "Safety Helmet",
      img: Acard
    },
    {
      text: "Sol Afro",
      img: Acard
    },
    {
      text: "Sol Astro Helmet",
      img: Acard
    },
    {
      text: "Sol Deadly Helmet",
      img: Acard
    },

    {
      text: "Sol Lightrider Helmet",
      img: Acard
    },
    {
      text: "Steampunk Hat",
      img: Acard
    },

    {
      text: "Sushi Shef",
      img: Acard
    },

    {
      text: "Tactical Helmet",
      img: Acard
    },
    {
      text: "Top Hat",
      img: Acard
    },
    {
      text: "White Fedora",
      img: Acard
    },
    {
      text: "Wizard Hat",
      img: Acard
    },







  ]
  const Earning = [
    {
      text: "Diamond Stud",
      img: Acard
    },
    {
      text: "Gold Hoop",
      img: Acard
    },
    {
      text: "Gold Stud",
      img: Acard
    },
    {
      text: "Silver Hope",
      img: Acard
    },
    {
      text: "Silver Stud",
      img: Acard
    },
    {
      text: "Skull Stud",
      img: Acard
    },
    {
      text: "Spike Stud",
      img: Acard
    },






  ]
  const Holding = [
    {
      text: "Banana",
      img: Acard
    },
    {
      text: "Butcher Knife",
      img: Acard
    },
    {
      text: "Butterfly Knife",
      img: Acard
    },
    {
      text: "Cigar",
      img: Acard
    },
    {
      text: "Diamond",
      img: Acard
    },
    {
      text: "Dollars Stack",
      img: Acard
    },
    {
      text: "Double Barrel Shotgun",
      img: Acard
    },
    {
      text: "Energy Grenade",
      img: Acard
    },
    {
      text: "Gold Stick",
      img: Acard
    },
    {
      text: "Graffiti Spray",
      img: Acard
    },
    {
      text: "Grapnel Gun",
      img: Acard
    },
    {
      text: "Gym Weight",
      img: Acard
    },
    {
      text: "Handgun",
      img: Acard
    },
    {
      text: "Iron Fist Knuckles",
      img: Acard
    },
    {
      text: "Katana",
      img: Acard
    },
    {
      text: "Kunai",
      img: Acard
    },
    {
      text: "Lab Flask",
      img: Acard
    },
    {
      text: "Laser Disc",
      img: Acard
    },
    {
      text: "Laser Spike Ball",
      img: Acard
    },
    {
      text: "Magic Wand",
      img: Acard
    },
    {
      text: "Money Gun",
      img: Acard
    },
    {
      text: "Pen",
      img: Acard
    },
    {
      text: "Pirate knife",
      img: Acard
    },
    {
      text: "Pocket Knife",
      img: Acard
    },
    {
      text: "Magic Wand",
      img: Acard
    },
    {
      text: "Police Handgun",
      img: Acard
    },
    {
      text: "Primitive Axe",
      img: Acard
    },
    {
      text: "Pugio Dagger",
      img: Acard
    },
    {
      text: "Rescue Axe",
      img: Acard
    },
    {
      text: "Revolver",
      img: Acard
    },
    {
      text: "Sol Diamond",
      img: Acard
    },
    {
      text: "Sol Laser Disk",
      img: Acard
    },
    {
      text: "Sol Space Ops Laser Rifle",
      img: Acard
    },
    // {
    //   text: "Sol Tac Laser Rifle",
    //   img: Acard
    // },
    {
      text: "Spec Ops Laser Rifle",
      img: Acard
    },
    {
      text: "Sushi Knife",
      img: Acard
    },
    {
      text: "Syringe",
      img: Acard
    },
    {
      text: "Tac Laser Rifle",
      img: Acard
    },
    {
      text: "Tac Shotgun",
      img: Acard
    },
    {
      text: "Vape",
      img: Acard
    },
    {
      text: "Wrench",
      img: Acard
    },


  ]
  const Background = [
    {
      text: "Black",
      img: Acard
    },
    {
      text: "City",
      img: Acard
    },
    {
      text: "Coral",
      img: Acard
    },
    {
      text: "Coral Gradient",
      img: Acard
    },
    {
      text: "Coral",
      img: Acard
    },
    {
      text: "Dark Gray Gradient",
      img: Acard
    },
    {
      text: "Double Barrel Gradient",
      img: Acard
    },
    {
      text: "Green Gradient",
      img: Acard
    },
    {
      text: "Grey",
      img: Acard
    },
    {
      text: "Jungle",
      img: Acard
    },
    {
      text: "Lava",
      img: Acard
    },
    {
      text: "Lime Gradient",
      img: Acard
    },
    {
      text: "Lunar",
      img: Acard
    },
    {
      text: "Mix Pastel Gradient",
      img: Acard
    },
    {
      text: "Mountains",
      img: Acard
    },
    {
      text: "Mushrooms",
      img: Acard
    },
    {
      text: "Orange Gradient",
      img: Acard
    },
    {
      text: "Orange",
      img: Acard
    },
    {
      text: "Palm Beach",
      img: Acard
    },
    {
      text: "Pastel Green",
      img: Acard
    },
    {
      text: "Pink",
      img: Acard
    },
    {
      text: "Purple Gradient",
      img: Acard
    },
    {
      text: "Purple",
      img: Acard
    },
    {
      text: "Radioactive",
      img: Acard
    },
    {
      text: "Sci-Fi Desert",
      img: Acard
    },
    {
      text: "Sky Blue Gradient",
      img: Acard
    },
    {
      text: "Sky Blue",
      img: Acard
    },
    {
      text: "Sol Gradient",
      img: Acard
    },
    {
      text: "Southern Gradient",
      img: Acard
    },
    {
      text: "White",
      img: Acard
    },
    {
      text: "Yellow",
      img: Acard
    },



  ]
  return (
    <>
      <div className="attribute-component">
        <div class="attribut_bg-image">
          <div class="attribute_text_section">
            <h1 className="attribut_heading">Mooning Monkey Attributes</h1>
            <button className="attribute_button">   collection attributes
              <span className="butoon_inner">
                <IoIosArrowForward />
              </span></button>
          </div>
        </div>
        <div className="attribut_bg-image_2">
          <div className="stage_wrapper">


            <div className="d-flex justify-content-around mobile_wrapper">
              <div className="mobile_view"></div>
              <div className="mobile_view"></div>
              <div className={color == 1 ? "attribute_stage1 bg_change" : "attribute_stage1"} onClick={() => {
                setColor("1")
              }}>
                <div> <div className="text-center attribute_stage_heading">Stage 1</div>
                  <div className="text-center attribute_stage_text">Mooning Monkeys</div></div>
              </div>
              <div className="stage_border mobile_view"></div>

              <div className={color == 2 ? "attribute_stage1 bg_change" : "attribute_stage1"} onClick={() => {
                setColor("2");
              }}>
                <div className="text-center attribute_stage_heading">Stage 2</div>
                <div className="text-center attribute_stage_text">Galactic Gorillas</div>
              </div>
              <div className="stage_border mobile_view"></div>

              <div className={color == 3 ? "attribute_stage1 bg_change" : "attribute_stage1 "} onClick={() => {
                setColor("3");
              }}>
                <div className="text-center attribute_stage_heading">Stage 3</div>
                <div className="text-center attribute_stage_text">Alien Gorillas</div>
              </div><div className="stage_border mobile_view"></div>

              <div className={color == 4 ? "attribute_stage1 bg_change" : "attribute_stage1 "} onClick={() => {
                setColor("4");
              }}>
                <div className="text-center attribute_stage_heading">Stage 4</div>
                <div className="text-center attribute_stage_text">External Yeti</div>
              </div>
              <div className="mobile_view"></div>
              <div className="mobile_view"></div>
            </div>



          </div>
          <div className="container-fluid1">
            <div className=" attribute_tabs_btn_wrapper">
              <div className={tab == "1" ? "attribute_tabs_btn btn_bg" : "attribute_tabs_btn"} onClick={() => {
                setTab("1")
              }}>FUR</div>
              <div className={tab == "2" ? "attribute_tabs_btn btn_bg" : "attribute_tabs_btn"} onClick={() => {
                setTab("2")
              }}>MOUTH</div>
              <div className={tab == "3" ? "attribute_tabs_btn btn_bg" : "attribute_tabs_btn"} onClick={() => {
                setTab("3")
              }}>EYES</div>
              <div className={tab == "4" ? "attribute_tabs_btn btn_bg" : "attribute_tabs_btn"} onClick={() => {
                setTab("4")
              }}>EYEWEAR</div>
              <div className={tab == "5" ? "attribute_tabs_btn btn_bg" : "attribute_tabs_btn"} onClick={() => {
                setTab("5")
              }}>STYLE</div>
              <div className={tab == "6" ? "attribute_tabs_btn btn_bg" : "attribute_tabs_btn"} onClick={() => {
                setTab("6")
              }}>HEADGEAR</div>

              <div className={tab == "7" ? "attribute_tabs_btn btn_bg" : "attribute_tabs_btn"} onClick={() => {
                setTab("7")
              }}>EARRINGS</div>
              <div className={tab == "8" ? "attribute_tabs_btn btn_bg" : "attribute_tabs_btn"} onClick={() => {
                setTab("8")
              }}>HOLDING</div>
              <div className={tab == "9" ? "attribute_tabs_btn btn_bg" : "attribute_tabs_btn"} onClick={() => {
                setTab("9")
              }}>BACKGROUND</div>
            </div>
          </div>
          <div className="container-fluid2">
            <div className="row">
              {
                tab == "1" &&
                Fur.map((data) => {
                  return (
                    <>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12 mt-5">
                        <center> <div class="card mt-2 attribute_card" style={{ width: "14rem", height: "19rem" }}>
                          <img class="card-img-top attribute_card_img" src={data.img} alt="Card image cap" />
                          <div class="card-body">

                            <p className="attribute_card_text">{data.text}</p>
                          </div>
                        </div>
                        </center>
                      </div>
                    </>
                  )
                })
              }
              {
                tab == "2" &&
                Mouth.map((data) => {
                  return (
                    <>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12 mt-5">
                        <center> <div class="card mt-2 attribute_card" style={{ width: "14rem", height: "19rem" }}>
                          <img class="card-img-top attribute_card_img" src={data.img} alt="Card image cap" />
                          <div class="card-body">

                            <p className="attribute_card_text">{data.text}</p>
                          </div>
                        </div>
                        </center>
                      </div>
                    </>
                  )
                })
              }
              {
                tab == "3" &&
                Eyes.map((data) => {
                  return (
                    <>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12 mt-5">
                        <center> <div class="card mt-2 attribute_card" style={{ width: "14rem", height: "19rem" }}>
                          <img class="card-img-top attribute_card_img" src={data.img} alt="Card image cap" />
                          <div class="card-body">

                            <p className="attribute_card_text">{data.text}</p>
                          </div>
                        </div>
                        </center>
                      </div>
                    </>
                  )
                })
              }
              {
                tab == "4" &&
                Eyewar.map((data) => {
                  return (
                    <>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12 mt-5">
                        <center> <div class="card mt-2 attribute_card" style={{ width: "14rem", height: "19rem" }}>
                          <img class="card-img-top attribute_card_img" src={data.img} alt="Card image cap" />
                          <div class="card-body">

                            <p className="attribute_card_text">{data.text}</p>
                          </div>
                        </div>
                        </center>
                      </div>
                    </>
                  )
                })
              }
              {
                tab == "5" &&
                Style.map((data) => {
                  return (
                    <>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12 mt-5">
                        <center> <div class="card mt-2 attribute_card" style={{ width: "14rem", height: "19rem" }}>
                          <img class="card-img-top attribute_card_img" src={data.img} alt="Card image cap" />
                          <div class="card-body">

                            <p className="attribute_card_text">{data.text}</p>
                          </div>
                        </div>
                        </center>
                      </div>
                    </>
                  )
                })
              }
              {
                tab == "6" &&
                Headgear.map((data) => {
                  return (
                    <>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12 mt-5">
                        <center> <div class="card mt-2 attribute_card" style={{ width: "14rem", height: "19rem" }}>
                          <img class="card-img-top attribute_card_img" src={data.img} alt="Card image cap" />
                          <div class="card-body">

                            <p className="attribute_card_text">{data.text}</p>
                          </div>
                        </div>
                        </center>
                      </div>
                    </>
                  )
                })
              }
              {
                tab == "7" &&
                Earning.map((data) => {
                  return (
                    <>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12 mt-5">
                        <center> <div class="card mt-2 attribute_card" style={{ width: "14rem", height: "19rem" }}>
                          <img class="card-img-top attribute_card_img" src={data.img} alt="Card image cap" />
                          <div class="card-body">

                            <p className="attribute_card_text">{data.text}</p>
                          </div>
                        </div>
                        </center>
                      </div>
                    </>
                  )
                })
              }
              {
                tab == "8" &&
                Holding.map((data) => {
                  return (
                    <>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12 mt-5">
                        <center> <div class="card mt-2 attribute_card" style={{ width: "14rem", height: "19rem" }}>
                          <img class="card-img-top attribute_card_img" src={data.img} alt="Card image cap" />
                          <div class="card-body">

                            <p className="attribute_card_text">{data.text}</p>
                          </div>
                        </div>
                        </center>
                      </div>
                    </>
                  )
                })
              }
              {
                tab == "9" &&
                Background.map((data) => {
                  return (
                    <>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12 mt-5">
                        <center> <div class="card mt-2 attribute_card" style={{ width: "14rem", height: "19rem" }}>
                          <img class="card-img-top attribute_card_img" src={data.img} alt="Card image cap" />
                          <div class="card-body">

                            <p className="attribute_card_text">{data.text}</p>
                          </div>
                        </div>
                        </center>
                      </div>
                    </>
                  )
                })
              }



            </div>
          </div>

        </div>




      </div>
    </>
  );
};

export default AttributePage;
