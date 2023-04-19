import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { lowCaseChecked, sliderChange } from "./settingSlice";

export const SliderBar = () => {
  const value = useSelector((state) => state.passw.length);
  const dispatch = useDispatch();
  const changeSlider = (event) => {
    dispatch(sliderChange(event.target.value));
  };

  return (
    <div>
      <div className="slider-container">
        <div className="slider-left">
          <p>Character length</p>
        </div>
        <div className="slider-right">
          <p className="passwordLength">{value}</p>
        </div>
      </div>
      <div className="slider-bar">
        <input
          type="range"
          min="10"
          max="50"
          value={value}
          className="slider"
          id="myRange"
          onChange={changeSlider}
        />
      </div>
    </div>
  );
};
