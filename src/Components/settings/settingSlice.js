import { useEffect } from "react";

const passwordState = {
  password: "default",
  incUpper: false,
  incLow: false,
  incSymb: false,
  incNum: false,
  length: 10,

  strength: "TOO WEAK!",
};

const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "@#$%^&*()_+~|}{[]></-=",
};

//reducer

const createPassword = (
  incLow,
  incNum,
  incUpper,
  incSymb,
  length,
  strength
) => {
  let newPass = [];
  let finalPass = [];

  if (
    incLow === false &&
    incUpper === false &&
    incSymb === false &&
    incNum === false
  ) {
    alert("nothing to generate");
    return;
  }
  while (newPass.length < length) {
    if (incLow === true) {
      newPass.push(
        keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)]
      );
    }

    if (incUpper === true) {
      newPass.push(
        keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)]
      );
    }

    if (incNum === true) {
      newPass.push(keys.number[Math.floor(Math.random() * keys.number.length)]);
    }

    if (incSymb === true) {
      newPass.push(keys.symbol[Math.floor(Math.random() * keys.symbol.length)]);
    }
  }
  for (let i = 0; i < length; i++) {
    finalPass.push(newPass[Math.floor(Math.random() * newPass.length)]);
  }

  return finalPass;
};

export const passwordReducer = (state = passwordState, action) => {
  switch (action.type) {
    case "passw/setPassword":
      const newPassword = createPassword(
        state.incLow,
        state.incNum,
        state.incUpper,
        state.incSymb,
        state.length,
        state.strength
      );
      return { ...state, password: newPassword };

    case "passw/lowCaseChecked":
      const lowNumber = changeColor(state);
      if (state.incLow === false) {
        return { ...state, incLow: true, strength: lowNumber };
      } else {
        return { ...state, incLow: false, strength: lowNumber };
      }

    case "passw/numCaseChecked":
      const numNumber = changeColor(state);
      if (state.incNum === false) {
        return { ...state, incNum: true, strength: numNumber };
      } else {
        return { ...state, incNum: false, strength: numNumber };
      }

    case "passw/upCaseChecked":
      const upNumber = changeColor(state);
      if (state.incUpper === false) {
        return { ...state, incUpper: true, strength: upNumber };
      } else {
        return { ...state, incUpper: false, strength: upNumber };
      }

    case "passw/symbolCaseChecked":
      const symNumber = changeColor(state);
      if (state.incSymb === false) {
        return { ...state, incSymb: true, strength: symNumber };
      } else {
        return { ...state, incSymb: false, strength: symNumber };
      }

    case "passw/changeLength":
      const stNumber = changeColor(state);
      // const stNumber = action.payload > 15 ? "MEDIUM" : "LOW";
      return { ...state, length: action.payload, strength: stNumber };
  }

  return state;
};

export const changeColor = (state = passwordState) => {
  let strWord = "";
  const propertyValues = Object.values(state);
  let trueFlags = propertyValues.filter((el) => el === true).length;

  console.log(trueFlags);

  if (state.length < 15) {
    strWord = "TOO WEAK!";
  }

  if (state.length >= 15 && state.length < 20) {
    strWord = "WEAK";
  }

  if (state.length >= 20 && state.length < 30) {
    strWord = "MEDIUM";
  }
  if (state.length >= 30) {
    strWord = "HARD";
  }

  return strWord;
};

export const sliderChange = (value) => {
  return {
    type: "passw/changeLength",
    payload: value,
  };
};

// action creators
export const generatePassword = () => {
  return {
    type: "passw/setPassword",
    payload: passwordState,
  };
};

export const lowCaseChecked = (checked) => {
  return {
    type: "passw/lowCaseChecked",
    payload: checked,
  };
};

export const numCaseChecked = (checked) => {
  return {
    type: "passw/numCaseChecked",
    payload: checked,
  };
};

export const upCaseChecked = (checked) => {
  return {
    type: "passw/upCaseChecked",
    payload: checked,
  };
};
export const symbolCaseChecked = (checked) => {
  return {
    type: "passw/symbolCaseChecked",
    payload: checked,
  };
};
