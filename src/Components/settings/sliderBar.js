import React from "react";
import { useSelector } from "react-redux";

export const SliderBar = () => {
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
        value={passwordLength}
        className="slider"
        id="myRange"
      />
    </div>
  );
};
