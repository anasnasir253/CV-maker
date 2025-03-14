import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Accordian from "../accordian";

const FAQ = ({ faqState }) => {
  const location = useLocation();
  const faqRef = useRef();

  // useEffect(() => {
  //   if (location.hash === "#FAQ") {
  //     console.log(faqRef.current, "CURREN FAQ");
  //     faqRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       // block: "nearest",
  //       inline: "end",
  //     });
  //   }
  // }, []);

  return (
    <div className="faq-container" id="FAQ" ref={faqRef}>
      <div className="faq-container-wrapper">
        <div className="faq-container-wrapper-heading">
          <h1>Ofte stilte spørsmål</h1>
        </div>
        <div className="faq-container-wrapper-acc">
          <Accordian
            heading="Er CVhjelperen gratis?"
            content="Ja, CVhjelperen er helt gratis. Dette gjør det altså også helt risikofritt for deg å lage en jobbvinnende CV"
          />

          <Accordian
            heading="Er CVhjelperen gratis?"
            content="Ja, CVhjelperen er helt gratis. Dette gjør det altså også helt risikofritt for deg å lage en jobbvinnende CV"
          />

          <Accordian
            heading="Er CVhjelperen gratis?"
            content="Ja, CVhjelperen er helt gratis. Dette gjør det altså også helt risikofritt for deg å lage en jobbvinnende CV"
          />

          <Accordian
            heading="Er CVhjelperen gratis?"
            content="Ja, CVhjelperen er helt gratis. Dette gjør det altså også helt risikofritt for deg å lage en jobbvinnende CV"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
