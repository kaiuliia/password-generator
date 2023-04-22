import React from "react";
import { useSelector } from "react-redux";
import "../../App.css";
import logo from "../../assets/images/icon-copy.svg";

export const Output = ({ text }) => {
  const password = useSelector((state) => {
    return state.passw.password;
  });
  const passwordCopy = password.toString();
  return (
    <div className="Output">
      <div className="left">
        <p>{password}</p>
      </div>
      <div className="right">
        <p className="copiedWord">COPIED</p>
        <img
          src={logo}
          onClick={() => {
            navigator.clipboard.writeText(password.join(""));
          }}
        />
      </div>
    </div>
  );
};
