import React from "react";
// import { useSelector } from "react-redux";
import "../../App.css";
import logo from "../../assets/images/icon-copy.svg";

export const SliderBar = () => {
  return (
    <div className="slider-bar">
      <input
        type="range"
        min="1"
        max="100"
        value="50"
        className="slider"
        id="myRange"
      />
    </div>
  );
};
