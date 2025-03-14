import React from "react";
import heroimg from "../../assests/images/hero.png";
import mainPicture from "../../assests/images/mainpicture.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-container-wrapper">
        <div className="hero-container-wrapper-headingBtns">
          <h1>Lag en profesjonell CV på 1-2-3</h1>
          <p>
            Hos oss kan du lage en profesjonell CV ved hjelp av flere godkjente CV-maler.
            Imponer rekrutteringsansvarlige på få minutter - helt gratis!
          </p>
          <div className="hero-container-wrapper-headingBtns-btns">
            <Link to="/cvmaker">
              <button style={{ paddingBottom: "10px", cursor: "pointer" }}>
                Lag gratis CV
              </button>
            </Link>
            <Link to="#switch">
              <button style={{ paddingBottom: "10px", cursor: "pointer" }} onClick={"#switch"}>
                Slik fungerer det
              </button>
            </Link>
          </div>
        </div>

        <div className="hero-container-wrapper-imgdiv">
          <img src={mainPicture} alt="heroimg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
