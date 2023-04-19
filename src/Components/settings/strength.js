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

  if (strength === "TO WEAK!") {
    colorOne = "red";
    colorTwo = "gray";
    colorThree = "gray";
    colorFour = "gray";
  }
  if (strength === "WEAK") {
    colorOne = "red";
    colorTwo = "red";
    colorThree = "gray";
    colorFour = "gray";
  }
  if (strength === "MEDIUM") {
    colorOne = "yellow";
    colorTwo = "yellow";
    colorThree = "yellow";
    colorFour = "gray";
  }

  if (strength === "HARD") {
    colorOne = "green";
    colorTwo = "green";
    colorThree = "green";
    colorFour = "green";
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
            style={{ backgroundColor: colorOne }}
          ></div>
          <div
            className="colorBlock"
            style={{ backgroundColor: colorTwo }}
          ></div>
          <div
            className="colorBlock"
            style={{ backgroundColor: colorThree }}
          ></div>
          <div
            className="colorBlock"
            style={{ backgroundColor: colorFour }}
          ></div>
        </div>
      </div>
    </div>
  );
};
