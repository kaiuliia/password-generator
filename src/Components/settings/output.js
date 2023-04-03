import React from "react";
// import { useSelector } from "react-redux";
import "../../App.css";
import logo from "../../assets/images/icon-copy.svg";

export const Output = () => {
  return (
    <div className="Output">
      <div className="Password">
        <p>password is here</p>
      </div>
      <div className="copy">
        <p>copied</p>
        <img src={logo} />
      </div>
    </div>
  );
};
