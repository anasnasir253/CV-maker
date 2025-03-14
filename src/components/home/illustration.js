import React from "react";
import { Link } from "react-router-dom";
import CheckIcon from "../../assests/images/checkIcon.png"

const Illustration = () => {
  return (
    <div className="cvm-container">
      <div className="cvm-container-wrapper" style={{justifyContent:"center"}}>
       
        <div className="cvm-container-wrapper-heading">
          {/* <h6>Illustration</h6> */}
          <h1>Finn riktig stil til jobben du ønsker</h1>
          <span>
            Vi har en rekke CV-maler som gjør det lett for deg å finne riktig
            stil til jobben du skal søke på.
          </span>
          <div>
          <span style={{display:"flex",gap:"15px", flexWrap:"wrap"}}>
            <div style={{display:"flex", gap:"15px"}}>
            <img style={{height:"1.5rem", width:"25px"}} src={CheckIcon}></img>
            <h4>Relevante kurs:</h4>
            <span style={{width:"50"}}> Kurs kan hjelpe deg med å skille deg ut</span>
            </div>
            <div  style={{display:"flex", gap:"15px"}}>
            <img style={{height:"1.5rem", width:"25px"}} src={CheckIcon}></img>
            <h4>Gratis erfaring:</h4>
            <span style={{width:"50"}}>Kursene du finner hos oss er ofte gratis</span>
            </div>
            <div  style={{display:"flex", gap:"15px"}}>
            <img style={{height:"1.5rem", width:"25px"}} src={CheckIcon}></img>
            <h4>Ledige stillinger:</h4>
            <span style={{width:"50"}}>Vi har samlet ledige stillinger for deg</span>
            </div>
            <div  style={{display:"flex", gap:"15px"}}>
            <img style={{height:"1.5rem", width:"25px"}} src={CheckIcon}></img>
            <h4>Rask oversikt:</h4>
            <span style={{width:"50"}}> Sorter og filtrer for å finne drømmejobben</span>
            </div>
          </span>
          </div>
          <div className="cvm-container-wrapper-heading-btn">
            <Link to="/ledigestillinger">
            <button>Ledige stillinger</button>
            </Link>
            <Link to="/cvmaker">
            <button style={{paddingLeft:"2rem", alignItems:"center",justifyContent:"center", paddingTop:"10px"}}>Lag gratis CV</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Illustration;
