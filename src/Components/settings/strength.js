import React from "react";
import { useSelector } from "react-redux";
import "../../App.css";
import logo from "../../assets/images/icon-copy.svg";

export const Strength = () => {
  const strength = useSelector((state) => state.passw.strength);
  let colorOne,
    colorTwo,
    colorThree,
    colorFour = "gray";

  if (strength === "") {
    colorOne = colorTwo = colorThree = colorFour = "grey";
  }

  if (strength === "TOO WEAK!") {
    colorOne = "#F64A4A";
    colorTwo = colorThree = colorFour = "grey";
  }
  if (strength === "WEAK") {
    colorOne = colorTwo = "#F64A4A";
    colorThree = colorFour = "grey";
  }
  if (strength === "MEDIUM") {
    colorOne = colorTwo = colorThree = "#F8CD65";

    colorFour = "gray";
  }

  if (strength === "HARD") {
    colorOne = colorTwo = colorThree = colorFour = "#a4ffaf";
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
