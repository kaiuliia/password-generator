import React from "react";
import { Strength } from "./strength";

import { Checkbox } from "./checkbox";
import "../../App.css";
import { SliderBar } from "./sliderBar";
import { useSelector, useDispatch } from "react-redux";
import { generatePassword } from "./settingSlice";

export const Settings = () => {
  const checkedLow = useSelector((state) => state.passw.incLow);
  const dispatch = useDispatch();
  const generatePasswordHandler = () => {
    dispatch(generatePassword());
  };

  const checkHandlier = () => {};

  return (
    <div className="settings-container">
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
