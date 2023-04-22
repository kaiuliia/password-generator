import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "../../App.css";
import logo from "../../assets/images/icon-copy.svg";
import { passwordCopied } from "./settingSlice";

export const Output = ({ text }) => {
  const password = useSelector((state) => {
    return state.passw.password;
  });

  const passwordCopiedState = useSelector((state) => {
    return state.passw.copied;
  });

  const copyWord = passwordCopiedState ? "COPIED" : "";

  const dispatch = useDispatch();
  const copyHandlier = () => {
    dispatch(passwordCopied());
  };

  // const copy = () => {
  //   navigator.clipboard.writeText(password.join(""));
  // };

  return (
    <div className="Output">
      <div className="left">
        <p>{password}</p>
      </div>
      <div className="right">
        <p className="copiedWord">{copyWord}</p>
        <img src={logo} onClick={copyHandlier} />
      </div>
    </div>
  );
};
