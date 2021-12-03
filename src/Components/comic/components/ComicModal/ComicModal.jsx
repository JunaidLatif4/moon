import React, { useState } from "react";
import "./ComicModal.css";
import { IoClose } from "react-icons/io5";
const ComicModal = ({ onClose }) => {
  const [more, setMore] = useState(false);
  return (
    <div className="comic__modal_backdrop">
      <div className="comic__modal_wrapper">
        <span className="comic__modal_close" onClick={onClose}>
          <div
            style={{ marginLeft: "-4px", marginTop: "-4px", cursor: "pointer" }}
          >
            {" "}
            <IoClose />
          </div>
        </span>
        <h2 className="comic__modal_heading">The Storyline</h2>
        {more && (
          <>
            <p className="comic__modal_paragraph">
              Mooning Monkeys are one of many species in the multiverse. They
              are an advanced race just beginning to venture out into the final
              frontier—space. However, before they are able to explore much of
              the universe, their planet is plagued by tragedies. Nature is
              relentless as She batters the planet with dozens of natural
              disasters that rips apart the landscape of the Mooning Monkey
              planet, rendering it...
            </p>
            <div className="morelink"></div>{" "}
          </>
        )}
        {more == false ? (
          <>
            <p className="comic__modal_paragraph">
              Mooning Monkeys are one of many species in the multiverse. They
              are an advanced race just beginning to venture out into the final
              frontier—space. However, before they are able to explore much of
              the universe, their planet is plagued by tragedies. Nature is
              relentless as She batters the planet with dozens of natural
              disasters that rips apart the landscape of the Mooning Monkey
              planet, rendering it nearly uninhabitable. To make matters worse,
              Mooning Monkeys survival seems impossible when a mysterious virus
              wipes out all female Mooning Monkeys.
            </p>
            <p className="comic__modal_paragraph">
              As if these tragedies weren’t enough, a massive, world-ending,
              asteroid hurtles towards the Mooning Monkey’s planet. Determined
              to survive, Mooning Monkey scientists and engineers rush to
              duplicate their greatest invention—a spaceship capable of
              intergalactic travel—and create as many functioning replicas as
              possible. They hope to escape towards safety, but they have no
              plan after leaving the planet. Only seventeen rocket ships are
              built before the asteroid picks up speed and destroys the planet.
            </p>
            <p className="comic__modal_paragraph">
              The survivors find themselves trapped on their uninhabitable moon,
              drifting in space with no orbit. They soon discover that their
              moon is caught by the sun’s gravity, and it is being pulled
              towards its fiery surface. To escape impending doom, the Mooning
              Monkeys dismantle most of the rocket ships to create an evolution
              chamber. They hope that the power of science will help their
              species survive, even if they look different in the future. If the
              experiment is a success, they can send their strongest out to seek
              out a habitable future and ensure the survival of the species.
            </p>
            <div className="comic__modal_footer">
              Follow the Mooning Monkeys as they assemble their evolution
              machine, explore an unknown planet with the Galactic Gorillas,
              battle hostile enemies with the Alien Gorillas, and discover the
              final piece of the puzzle needed to create the Eternal Yeti in
              this thrilling comic series!
            </div>{" "}
            {/* <div className="morelink"></div>{" "} */}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ComicModal;
