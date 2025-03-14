import React, { useState } from "react";
import logo from "../assests/icons/logo.png";
import dropdown from "../assests/icons/arrowdown.png";
import { Link, useNavigate } from "react-router-dom";
import { TopHeading } from "./cvmaker/cvmakerbody";
import { NavHashLink, HashLink } from "react-router-hash-link";

const Header = ({ setFaqState, faqState }) => {
  const [style, setStyle] = useState({ display: "none" });
  const [submenu, setSubmenu] = useState(false);
  const navigate = useNavigate();

  // const navigateToContacts = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/#FAQ');
  // };
  const switchToFaq = () => {
    console.log("RUNNING");
    setFaqState(!faqState);
  };
  return (
    <div className="header-container">
      <div className="header-container-wrapper">
        <div className="header-container-wrapper-logodiv">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header-container-wrapper-navlinks">
          <Link style={{ textDecoration: "none", color: "black" }} to="/cvmaker">
            <div
              // onMouseLeave={(e) => {
              //   setSubmenu(false);
              // }}
              // onMouseEnter={(e) => {
              //   setSubmenu(true);
              // }}
              className="header-container-wrapper-navlinks-withicon"
            >
              <span>CV-maler</span>
              {/* <img src={dropdown} alt="downlogo" /> */}
            </div>
          </Link>

          <Link style={{ textDecoration: "none", color: "black" }} to="/blogg">
            <span>Blogg</span>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/omoss">
            <span>Om oss</span>
          </Link>
          <HashLink style={{ textDecoration: "none", color: "black" }} smooth to={"/#FAQ"}>
            <span
              // onClick={switchToFaq}
              style={{ textDecoration: "none", color: "black" }}
            >
              FAQ
            </span>
          </HashLink>

          <Link style={{ textDecoration: "none", color: "black" }} to="/ledigestillinger">
            <span>Ledige stillinger</span>
          </Link>
          <Link to="/cvmaker">
            <button style={{ cursor: "pointer" }}>Lag gratis CV</button>
          </Link>
        </div>
      </div>
      {submenu ? (
        <div
          onMouseLeave={(e) => {
            setSubmenu(false);
          }}
          className="submenu-container"
        >
          <div className="submenu-container-wrapper">
            <div className="submenu-container-wrapper-items">
              <TopHeading heading="Moderne" />
              <TopHeading heading="Klassisk" />
              <TopHeading heading="Profesjonell" />
              <TopHeading heading="Innovativ" />
              <TopHeading heading="Kreativ" />
              <TopHeading heading="Stilren " />
            </div>
            <div className="submenu-container-wrapper-sectwo">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to="/cvmaker"
              >
                <div className="submenu-container-wrapper-sectwo-imgwithcontent">
                  <h2>Se alle maler</h2>
                  <img
                    className="submenu-container-wrapper-sectwo-imgwithcontent-imgset"
                    src={dropdown}
                    alt="aa"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
