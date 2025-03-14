import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import cv1 from "../../assests/images/cv1.jpg";
import cv2 from "../../assests/images/cv2.jpg";
import cv3 from "../../assests/images/cv3.png";
import cv5 from "../../assests/images/cv51.png";
import cv6 from "../../assests/images/cv6.jpg";
import cv9 from "../../assests/images/cv5.jpg";
import cv7 from "../../assests/images/cv7.jpg";
import cv33 from "../../assests/images/cv33.jpg";
import cv8 from "../../assests/images/cv8.png";
import cv10 from "../../assests/images/cv2.jpg";
import cv11 from "../../assests/images/cv11.jpg";
import cv12 from "../../assests/images/cv12.png";
import cv13 from "../../assests/images/cv13.png";
import cv22 from "../../assests/images/cv2.jpg";
import cv55 from "../../assests/images/cv9.png";

const RecruitmentAgencies = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 428 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 428, min: 0 },
      items: 1,
    },
  };
  const validationItemsSelected = () => {
    setTimeout(() => {
      var hiddenElements = document.querySelectorAll(
        '.carousel-container ul li[aria-hidden="false"]'
      );

      if (hiddenElements.length === 3) {
        hiddenElements[0].classList = ["react-multi-carousel-item"];
        hiddenElements[1].classList = [
          "react-multi-carousel-item react-multi-carousel-item--active",
        ];
        hiddenElements[2].classList = ["react-multi-carousel-item"];
      }
    }, 0);
  };
  return (
    <div className="ra-container">
      <div className="ra-container-wrapper">
        <div className="ra-container-wrapper-heading">
          <h1>Alle våre CV-maler er godkjent av rekrutteringsbyråer</h1>
        </div>
        <div className="ra-container-wrapper-slider">
          <Carousel
            responsive={responsive}
            itemClass="carousel-item-padding-40-px"
            infinite
            autoPlay
            autoPlaySpeed={3000}
            arrows={true}
            afterChange={(previousSlide, { currentSlide, onMove }) => {
              validationItemsSelected();
            }}
          >
            <div className="ra-container-wrapper-slider-slides">
              <h1>One</h1>
              <div
                className="ra-container-wrapper-slider-slides-imgdiv"
                style={{ background: "white" }}
              >
                <img src={cv33} alt="cv" />
              </div>
              <Link to="/generator/templatethree">
                <button>Velg CV</button>
              </Link>
            </div>
            <div className="ra-container-wrapper-slider-slides">
              <h1>Two</h1>
              <div
                className="ra-container-wrapper-slider-slides-imgdiv"
                style={{ background: "white" }}
              >
                <img src={cv7} alt="cv" />
              </div>
              <Link to="/generator/templatefour">
                <button>Velg CV</button>
              </Link>
            </div>
            <div className="ra-container-wrapper-slider-slides">
              <h1>Three</h1>
              <div
                className="ra-container-wrapper-slider-slides-imgdiv"
                style={{ background: "white" }}
              >
                <img src={cv3} alt="cv" />
              </div>
              <Link to="/generator/templatefive">
                <button>Velg CV</button>
              </Link>
            </div>
            <div className="ra-container-wrapper-slider-slides">
              <h1>Four</h1>
              <div
                className="ra-container-wrapper-slider-slides-imgdiv"
                style={{ background: "white" }}
              >
                <img src={cv9} alt="cv" />
              </div>
              <Link to="/generator/templatesix">
                <button>Velg CV</button>
              </Link>
            </div>
            <div className="ra-container-wrapper-slider-slides">
              <h1>Five</h1>
              <div
                className="ra-container-wrapper-slider-slides-imgdiv"
                style={{ background: "white" }}
              >
                <img src={cv6} alt="cv" />
              </div>
              <Link to="/generator/templateeight">
                <button>Velg CV</button>
              </Link>
            </div>
            <div className="ra-container-wrapper-slider-slides">
              <h1>Six</h1>
              <div
                className="ra-container-wrapper-slider-slides-imgdiv"
                style={{ background: "white" }}
              >
                <img src={cv55} alt="cv" />
              </div>
              <Link to="/generator/templatenine">
                <button>Velg CV</button>
              </Link>
            </div>
            <div className="ra-container-wrapper-slider-slides">
              <h1>Seven</h1>
              <div
                className="ra-container-wrapper-slider-slides-imgdiv"
                style={{ background: "white" }}
              >
                <img src={cv10} alt="cv" />
              </div>
              <Link to="/generator/templateten">
                <button>Velg CV</button>
              </Link>
            </div>
            <div className="ra-container-wrapper-slider-slides">
              <h1>Eight</h1>
              <div
                className="ra-container-wrapper-slider-slides-imgdiv"
                style={{ background: "white" }}
              >
                <img src={cv11} alt="cv" />
              </div>
              <Link to="/generator/templateeleven">
                <button>Velg CV</button>
              </Link>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentAgencies;
