import React from "react";
// import { useSelector } from "react-redux";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";

import { lowCaseChecked } from "./settingSlice";
export const Checkbox = () => {
  const lowCheck = useSelector((state) => state.passw.incLow);

  const dispatch = useDispatch();
  const checkHandlier = () => {
    dispatch(lowCaseChecked());
  };

  return (
    <div className="checkboxContainer">
      <label class="container">
        <input type="checkbox" className="firstCheck" />
        <span>Include Uppercase Letters</span>
      </label>

      <label className="container">
        <input
          type="checkbox"
          checked={false}
          onChange={checkHandlier}
          className="secondCheck"
        />
        <span>Include Lowercase Letters</span>
      </label>

      <label className="container">
        <input type="checkbox" className="thirdCheck" />
        <span>Include Numbers</span>
      </label>
      <label className="container">
        <input type="checkbox" className="fourthCheck" />
        <span>Include Symbols</span>
      </label>
    </div>
  );
};
