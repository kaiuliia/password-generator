import React from "react";
import { useSelector } from "react-redux";
import "../../App.css";
import logo from "../../assets/images/icon-copy.svg";

export const Strength = () => {
  const strength = useSelector((state) => state.passw.strength);
  let colorOne = "gray";
  let colorTwo = "gray";
  let colorThree = "gray";
  let colorFour = "gray";

  if (strength === "WEAK") {
    colorOne = "red";
  }
  if (strength === "MEDIUM") {
    colorOne = "green";
  }

  // return colorOne;

  return (
    <div className="strength-container">
      <div className="leftStrength">
        <p>STRENGTH</p>
      </div>
      <div className="rightStrength">
        <p className="copiedWord">{strength}</p>
        <div className="coloredContainers">
          <div
            className="colorBlock"
            style={{ backgroundColor: "green" }}
          ></div>
          <div
            className="colorBlock"
            style={{ backgroundColor: colorOne }}
          ></div>
          <div className="colorBlock" style={{ backgroundColor: "red" }}></div>
          <div className="colorBlock" style={{ backgroundColor: "red" }}></div>
        </div>
      </div>
    </div>
  );
};
