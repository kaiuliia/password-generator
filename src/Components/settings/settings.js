import React from "react";
import { Strength } from "./strength";
import { Slider } from "./slider";
import { Flags } from "./flags";
import "../../App.css";
import { SliderBar } from "./sliderBar";
// import { useSelector } from "react-redux";

export const Settings = () => {
  return (
    <div className="settings-container">
      <Slider />
      <SliderBar />
      <Flags />
      <Strength />
    </div>
  );
};
