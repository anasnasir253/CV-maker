import React from "react";
import divImg from "../../assests/icons/divset.png";
import abc from "../../assests/icons/abc.png";
import imgdiv2 from "../../assests/icons/divimg2.png";
import boy1 from "../../assests/images/boy1.png";
import boy2 from "../../assests/images/boy2.png";
import girl1 from "../../assests/images/girl1.png";
import girl2 from "../../assests/images/girl2.png";

const FixTheCv = () => {
  return (
    <div className="fxc-container">
      <div className="fxc-container-wrapper">
        <div className="fxc-container-wrapper-heading">
          <h1>Flere hundre personer stoler på CVhjelperen til å fikse CVen</h1>
        </div>

        <div className="fxc-container-wrapper-quote">
          <div className="fxc-container-wrapper-quote-commaOne">
            <span>“</span>
          </div>
          <div className="fxc-container-wrapper-quote-para">
            <p>
              Det var helt utrolig enkelt å fikse CVen i generatoren til CVhjelperen. Landet
              faktisk også min første jobb. Anbefaler alle å prøve!
            </p>
          </div>
          <div className="fxc-container-wrapper-quote-commaTwo">
            <span>“</span>
          </div>
        </div>

        <div className="fxc-container-wrapper-divset">
          <img alt="divImg" src={divImg} />
        </div>
        <div className="fxc-container-wrapper-profileimages">
          <div className="fxc-container-wrapper-profileimages-pfone">
            <img src={girl1} alt="abc" />
            <div className="fxc-container-wrapper-profileimages-pfone-heading">
              <span>Eline</span>
              <h6>Karistiansand</h6>
            </div>
          </div>

          <div className="fxc-container-wrapper-profileimages-quotesdiv">
            <div className="fxc-container-wrapper-profileimages-quotesdiv-divone">
              <div className="fxc-container-wrapper-profileimages-quotesdiv-divone-imgset">
                <p>
                  “Det var helt utrolig enkelt å fikse CVen i generatoren til CVhjelperen.
                  Landet faktisk også min første jobb”
                </p>
              </div>
              <img
                className="fxc-container-wrapper-profileimages-quotesdiv-divone-imgmargin"
                src={imgdiv2}
                alt="imgdiv2"
              />
              <div className="fxc-container-wrapper-profileimages-quotesdiv-divone-proset">
                <img src={boy1} alt="abc" />
                <div className="fxc-container-wrapper-profileimages-pfone-heading">
                  <span>Walter </span>
                  <h6>Whitebane</h6>
                </div>
              </div>
            </div>

            <div className="fxc-container-wrapper-profileimages-quotesdiv-divone">
              <div className="fxc-container-wrapper-profileimages-quotesdiv-divone-imgset">
                <p>
                  “Det var helt utrolig enkelt å fikse CVen i generatoren til CVhjelperen.
                  Landet faktisk også min første jobb”
                </p>
              </div>
              <img
                className="fxc-container-wrapper-profileimages-quotesdiv-divone-imgmargin"
                src={imgdiv2}
                alt="imgdiv2"
              />
              <div className="fxc-container-wrapper-profileimages-quotesdiv-divone-proset">
                <img src={girl2} alt="abc" />
                <div className="fxc-container-wrapper-profileimages-pfone-heading">
                  <span>Elizabeth</span>
                  <h6>Karvene</h6>
                </div>
              </div>
            </div>

            <div className="fxc-container-wrapper-profileimages-quotesdiv-divone">
              <div className="fxc-container-wrapper-profileimages-quotesdiv-divone-imgset">
                <p>
                  “Det var helt utrolig enkelt å fikse CVen i generatoren til CVhjelperen.
                  Landet faktisk også min første jobb”
                </p>
              </div>
              <img
                className="fxc-container-wrapper-profileimages-quotesdiv-divone-imgmargin"
                src={imgdiv2}
                alt="imgdiv2"
              />
              <div className="fxc-container-wrapper-profileimages-quotesdiv-divone-proset">
                <img src={boy2} alt="abc" />
                <div className="fxc-container-wrapper-profileimages-pfone-heading">
                  <span>Chadwick</span>
                  <h6>Krowman</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="fxc-container-wrapper-btn">
          <button>Lag gratis CV</button>
        </div> */}
      </div>
    </div>
  );
};

export default FixTheCv;
