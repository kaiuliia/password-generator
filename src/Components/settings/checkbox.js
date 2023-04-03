import React from "react";
// import { useSelector } from "react-redux";
import "../../App.css";

export const Checkbox = () => {
  return (
    <ul>
      <input type="checkbox" className="firstCheck" />
      <span> Include Uppercase Letters</span>

      <input type="checkbox" className="secondCheck" />
      <span> Include Lowercase Letters</span>

      <input type="checkbox" className="thirdCheck" />
      <span> Include Numbers</span>

      <input type="checkbox" className="fourthCheck" />
      <span> Include Symbols</span>
    </ul>
  );
};
