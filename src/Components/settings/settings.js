import React from "react";
import { Strength } from "./strength";
import { Slider } from "./slider";
import { Checkbox } from "./checkbox";
import "../../App.css";
import { SliderBar } from "./sliderBar";
// import { useSelector } from "react-redux";

export const Settings = () => {
  return (
    <div className="settings-container">
      <Slider />
      <SliderBar />
      <Checkbox />
      <Strength />
      <div className="buttonContainer">
        <button className="button">GENERATE →</button>
      </div>
    </div>
  );
};
