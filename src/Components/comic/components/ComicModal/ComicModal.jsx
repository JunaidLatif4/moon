import React from "react";
import "./ComicModal.css";

const ComicModal = ({ onClose }) => {
    return (
        <div className="comic__modal_backdrop">
            <div className="comic__modal_wrapper">
                <span className="comic__modal_close" onClick={onClose}>x</span>
                <h2 className="comic__modal_heading">The Storyline</h2>
                <p className="comic__modal_paragraph">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium at
                    consectetur nobis porro iure placeat quo omnis iste, sapiente aut
                    exercitationem aliquid ad repellat error ea vero quas ut eum.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium at
                    consectetur nobis porro iure placeat quo omnis iste, sapiente aut
                    exercitationem aliquid ad repellat error ea vero quas ut eum.
                </p>
                <p className="comic__modal_paragraph">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium at
                    consectetur nobis porro iure placeat quo omnis iste.
                </p>
                <p className="comic__modal_paragraph">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium at
                    consectetur nobis porro iure placeat quo omnis iste, sapiente aut
                    exercitationem aliquid ad repellat error ea vero quas ut eum.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium at
                </p>
                <div className="comic__modal_footer">UP</div>
            </div>
        </div>
    );
};

export default ComicModal;
