import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export const SliderBar = () => {
  const [value, changeValue] = useState(10);
  const passwordLength = useSelector((state) => state.passw.length);

  // const input = document.querySelector("#myRange");
  // value.textContent = input.value;
  // input.addEventListener("input", (event) => {
  //   value.textContent = event.target.value;
  // });

  return (
    <div className="slider-bar">
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        className="slider"
        id="myRange"
        onChange={(e) => changeValue(e.target.value)}
      />
    </div>
  );
};
