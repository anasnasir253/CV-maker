import React, { useState } from "react";
import arrowdown from "../assests/images/arrowdown.png";

const Accordian = (props) => {
  const { heading, content } = props;
  const [open, setOpen] = useState(true);
  return (
    <div className="accordian-container">
      <div
        className="accordian-container-headimg"
        onClick={() => setOpen(!open)}
      >
        <h1>{heading}</h1>
        <img
          style={open ? null : { transform: "rotate(180deg)" }}
          onClick={() => setOpen(!open)}
          src={arrowdown}
          alt="arrowdown"
        />
      </div>
      {open ? <p>{content}</p> : null}
    </div>
  );
};

export default Accordian;
