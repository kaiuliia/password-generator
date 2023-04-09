import React from "react";
import { useSelector } from "react-redux";
import "../../App.css";
import logo from "../../assets/images/icon-copy.svg";

export const Output = ({ text }) => {
  return (
    <div className="Output">
      <div className="left">
        <p>{text}</p>
      </div>
      <div className="right">
        <p className="copiedWord">COPIED</p>
        <img src={logo} />
      </div>
    </div>
  );
};
