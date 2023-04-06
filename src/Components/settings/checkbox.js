import React from "react";
// import { useSelector } from "react-redux";
import "../../App.css";

export const Checkbox = () => {
  return (
    <div className="checkboxContainer">
      <label class="container">
        <input type="checkbox" className="firstCheck" />
        <span>Include Uppercase Letters</span>
      </label>

      <label className="container">
        <input type="checkbox" className="secondCheck" />
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
