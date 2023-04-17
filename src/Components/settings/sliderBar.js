import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { lowCaseChecked, sliderChange } from "./settingSlice";

export const SliderBar = () => {
  // const [value, changeValue] = useState(10);
  const value = useSelector((state) => state.passw.length);
  const dispatch = useDispatch();
  const changeSlider = (event) => {
    dispatch(sliderChange(event.target.value));
  };

  return (
    <div className="slider-bar">
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        className="slider"
        id="myRange"
        onChange={changeSlider}
      />
    </div>
  );
};
