import React from "react";
// import { useSelector } from "react-redux";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";

import { lowCaseChecked, numCaseChecked, upCaseChecked } from "./settingSlice";
export const Checkbox = () => {
  const dispatch = useDispatch();
  const lowCheck = useSelector((state) => state.passw.incLow);
  const numCheck = useSelector((state) => state.passw.incNum);
  const upCheck = useSelector((state) => state.passw.incUpper);
  const checkHandlier = () => {
    dispatch(lowCaseChecked());
  };
  const checkNumHandlier = () => {
    dispatch(numCaseChecked());
  };

  const checkUppHandlier = () => {
    dispatch(upCaseChecked());
  };

  return (
    <div className="checkboxContainer">
      <label class="container">
        <input
          type="checkbox"
          onChange={checkUppHandlier}
          checked={upCheck}
          className="firstCheck"
        />
        <span>Include Uppercase Letters</span>
      </label>

      <label className="container">
        <input
          type="checkbox"
          checked={lowCheck}
          onChange={checkHandlier}
          className="secondCheck"
        />
        <span>Include Lowercase Letters</span>
      </label>

      <label className="container">
        <input
          type="checkbox"
          checked={numCheck}
          onChange={checkNumHandlier}
          className="thirdCheck"
        />
        <span>Include Numbers</span>
      </label>

      <label className="container">
        <input type="checkbox" className="fourthCheck" />
        <span>Include Symbols</span>
      </label>
    </div>
  );
};
