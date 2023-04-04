import React from "react";
// import { useSelector } from "react-redux";
import "../../App.css";
import logo from "../../assets/images/icon-copy.svg";

export const Strength = () => {
  return (
    <div className="strength-container">
      <div className="left">
        <p>password is here</p>
      </div>
      <div className="right">
        <p className="copiedWord">MEDIUM</p>
        <div className="colorBlock"></div>
      </div>
    </div>
  );
};
