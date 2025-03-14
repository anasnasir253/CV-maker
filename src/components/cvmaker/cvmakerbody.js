import React from "react";
import cvimg from "../../assests/images/cvformat.png";
import cv1 from "../../assests/images/cv1.jpg"
import cv2 from "../../assests/images/cv2.jpg"
import cv3 from "../../assests/images/cv3.png"
import cv5 from "../../assests/images/cv51.png"
import cv6 from "../../assests/images/cv6.jpg"
import cv9 from "../../assests/images/cv5.jpg"
import cv7 from "../../assests/images/cv7.jpg"
import cv33 from "../../assests/images/cv33.jpg"
import cv8 from "../../assests/images/cv8.png"
import cv10 from "../../assests/images/cv2.jpg"
import cv11 from "../../assests/images/cv11.jpg"
import cv12 from "../../assests/images/cv12.png"
import cv13 from "../../assests/images/cv13.png"
import cv22 from "../../assests/images/cv2.jpg"
import cv55 from "../../assests/images/cv9.png"

import { useNavigate } from "react-router-dom";
const CVMakerBody = () => {
  const navigate = useNavigate();
  return (
    <div className="cvmaker-body-container">
      <div className="cvmaker-body-container-wrapper">
        {/* <div className="cvmaker-body-container-wrapper-maindiv">
          <TopHeading heading="Moderne" />
          <TopHeading heading="Klassisk" />
          <TopHeading heading="Profesjonell" />
          <TopHeading heading="Innovativ" />
          <TopHeading heading="Kreativ" />
          <TopHeading heading="Stilren " />
        </div> */}
        <div className="cvmaker-body-container-wrapper-cvformat">
          
            {/* <div
              onClick={() => navigate("/generator/templateone")}
              className="cvmaker-body-container-wrapper-cvformat-maindiv"
            >
              <h1>One</h1>
              <img src={cv1} alt="cvimg" />
              <button>Velg mal</button>
            </div>


            <div
              onClick={() => navigate("/generator/templatetwo")}
              className="cvmaker-body-container-wrapper-cvformat-maindiv"
            >
              <h1>Two</h1>
              <img src={cv22} alt="cvimg" />
              <button>Velg mal</button>
            </div> */}

            <div
              onClick={() => navigate("/generator/templatethree")}
              className="cvmaker-body-container-wrapper-cvformat-maindiv"
            >
              <h1>One</h1>
              <img src={cv33} alt="cvimg" />
              <button>Velg mal</button>
            </div>

            <div
              onClick={() => navigate("/generator/templatefour")}
              className="cvmaker-body-container-wrapper-cvformat-maindiv"
            >
              <h1>Two</h1>
              <img src={cv7} alt="cvimg" />
              <button>Velg mal</button>
            </div>

            <div
              onClick={() => navigate("/generator/templatefive")}
              className="cvmaker-body-container-wrapper-cvformat-maindiv"
            >
              <h1>Three</h1>
              <img src={cv3} alt="cvimg" />
              <button>Velg mal</button>
            </div>


            <div
              onClick={() => navigate("/generator/templateeleven")} ///generator/templatesix
              className="cvmaker-body-container-wrapper-cvformat-maindiv"
            >
              <h1>Four</h1>
              <img src={cv11} alt="cvimg" />
              <button>Velg mal</button>
            </div>

            {/* <div
              onClick={() => navigate("/generator/templateseven")}
              className="cvmaker-body-container-wrapper-cvformat-maindiv"
            >
              <h1>Five</h1>
              <img src={cv8} alt="cvimg" />
              <button>Velg mal</button>
            </div> */}
          
            <div
              onClick={() => navigate("/generator/templatenine")} ///generator/templateeight
              className="cvmaker-body-container-wrapper-cvformat-maindiv"
            >
              <h1>Five</h1>
              <img src={cv55} alt="cvimg" />
              <button>Velg mal</button>
            </div>
            <div
              onClick={() => navigate("/generator/templateten")} ///generator/templatenine
              className="cvmaker-body-container-wrapper-cvformat-maindiv"
            >
              <h1>Six</h1>
              <img src={cv10} alt="cvimg" />
              <button>Velg mal</button>
            </div>
            <div
              onClick={() => navigate("/generator/templatesix")}
              className="cvmaker-body-container-wrapper-cvformat-maindiv"
            >
              <h1>Seven</h1>
              <img src={cv9} alt="cvimg" />
              <button>Velg mal</button>
            </div>
            <div
              onClick={() => navigate("/generator/templateeight")}
              className="cvmaker-body-container-wrapper-cvformat-maindiv"
            >
              <h1>Eight</h1>
              <img src={cv6} alt="cvimg" />
              <button>Velg mal</button>
            </div>
            {/* <div
              onClick={() => navigate("/generator/templatetwelve")}
              className="cvmaker-body-container-wrapper-cvformat-maindiv"
            >
              <h1>Twelve</h1>
              <img src={cv12} alt="cvimg" />
              <button>Velg mal</button>
            </div>
            <div
              onClick={() => navigate("/generator/templatethirteen")}
              className="cvmaker-body-container-wrapper-cvformat-maindiv"
            >
              <h1>Thirteen</h1>
              <img src={cv13} alt="cvimg" />
              <button>Velg mal</button>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default CVMakerBody;

export const TopHeading = (props) => {
  const { heading } = props;
  return (
    <div className="cvmaker-body-container-wrapper-maindiv-set">
      <div className="spanset">
        <span>Icon</span>
      </div>
      <span>{heading}</span>
    </div>
  );
};
