import React from "react";
import { Strength } from "./strength";
import { Slider } from "./slider";
import { Checkbox } from "./checkbox";
import "../../App.css";
import { SliderBar } from "./sliderBar";
import { useSelector, useDispatch } from "react-redux";
import { generatePassword } from "./settingSlice";

export const Settings = () => {
  // const checkedLow = useSelector(selectVisibleIds);
  const dispatch = useDispatch();
  const generatePasswordHandler = () => {
    dispatch(generatePassword());
  };

  const checkHandlier = () => {};

  return (
    <div className="settings-container">
      <Slider />
      <SliderBar />
      <Checkbox />
      <Strength />
      <div className="buttonContainer">
        <button className="button" onClick={generatePasswordHandler}>
          GENERATE →
        </button>
      </div>
    </div>
  );
};
