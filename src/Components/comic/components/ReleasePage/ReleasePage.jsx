import React, { useState, useEffect } from "react";
import GradiantBtn from "../GradiantBtn/GradiantBtn";
import LightBox from "../LightBox/LightBox";
import "./ReleasePage.css";
import ComingSoon from "../../../../assests/comic/coming-soon.PNG";
import File from "../../../../assests/comic/file.pdf";
import { Document, Page } from "react-pdf";

const ReleasePage = () => {
  const [activeBox2, setActiveBox2] = useState("1");
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    document.getElementById("kk").click();
  }, [activeBox2]);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="release__page">
      <div className="release__page_header">
        <div className="release__page_heading">
          ENJOY TH LATEST PAGE RELEASES
        </div>
        <div className="release__page_desc">
          <span>THIS IS JUST A COMING-SOON SAMPLE! </span> Our comic book
          releases will be published here in the near future, you'll be able to
          read them right here as if you were flipping through a book!
        </div>
        <div className="release__page_menu">
          <div
            className={`release__page_menuitem ${
              activeBox2 == "1" && "active__menu_item"
            }`}
            onClick={() => {
              setActiveBox2("1");
            }}
          >
            Part1
          </div>
          <div
            className={`release__page_menuitem ${
              activeBox2 == "2" && "active__menu_item"
            }`}
            onClick={() => {
              setActiveBox2("2");
            }}
          >
            Part2
          </div>
          <div
            className={`release__page_menuitem ${
              activeBox2 == "3" && "active__menu_item"
            }`}
            onClick={() => {
              setActiveBox2("3");
            }}
          >
            Part3
          </div>
          <div
            className={`release__page_menuitem ${
              activeBox2 == "4" && "active__menu_item"
            }`}
            onClick={() => {
              setActiveBox2("4");
            }}
          >
            Part4
          </div>
        </div>
      </div>
      {activeBox2 == "1" && (
        <LightBox>
          <div
            className="page__release_box2"
            style={{ color: "white", minWidth: "100%" }}
          >
            {/* <HTMLFlipBook width={300} height={500}>
                        <div className="demoPage"><img src={ComingSoon} /></div>
                        <div className="demoPage"><img src={ComingSoon} /></div>
                        <div className="demoPage"><img src={ComingSoon} /></div>
                        <div className="demoPage"><img src={ComingSoon} /></div>
                    </HTMLFlipBook> */}
            {/* <Document
                        file={File}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p>Page {pageNumber} of {numPages}</p>
                    <a href={File} style={{ color: "white" }}>Download File</a> */}
            {/* <iframe
              src={File}
              allowfullscreen
              style={{ width: "100%", height: "60vh" }}
            ></iframe> */}
            <div
              id="contain"
              style={{ minHeight: "657px", position: "relative" }}
            ></div>
          </div>
        </LightBox>
      )}
      {activeBox2 !== "1" && (
        <LightBox>
          <div className="releasepage__box2">
            <div className="releasepage__box2_text">
              This part is not yet available, in the meantime, feel free to
              check out other gadgets such as our profit calculator:
            </div>
            <GradiantBtn text="PROFILE CALCULATOR" />
          </div>
        </LightBox>
      )}
    </div>
  );
};

export default ReleasePage;
