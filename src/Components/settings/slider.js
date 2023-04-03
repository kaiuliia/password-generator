import React from "react";
// import { useSelector } from "react-redux";
import "../../App.css";
import logo from "../../assets/images/icon-copy.svg";
import { SliderBar } from "./sliderBar";

export const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider-left">
        <p>Character length</p>
      </div>
      <div className="slider-right">
        <p className="passwordLength">10</p>
      </div>
    </div>
  );
};
