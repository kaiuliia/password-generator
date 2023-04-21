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
      let newState4;

      if (state.incLow === false) {
        newState4 = { ...state, incLow: true, strength: changeColor(state) };
        changeColor(newState4);
        return newState4;
      } else {
        newState4 = { ...state, incLow: false, strength: changeColor(state) };
        changeColor(newState4);
        return newState4;
      }

    case "passw/numCaseChecked":
      let newState3;

      if (state.incNum === false) {
        newState3 = { ...state, incNum: true, strength: changeColor(state) };
        changeColor(newState3);
        return newState3;
      } else {
        newState3 = { ...state, incNum: false, strength: changeColor(state) };
        changeColor(newState3);
        return newState3;
      }

    case "passw/upCaseChecked":
      let newState2;

      if (state.incUpper === false) {
        newState2 = { ...state, incUpper: true, strength: changeColor(state) };
        changeColor(newState2);
        return newState2;
      } else {
        newState2 = { ...state, incUpper: false, strength: changeColor(state) };
        changeColor(newState2);
        return newState2;
      }

    case "passw/symbolCaseChecked":
      let newState1;

      if (state.incSymb === false) {
        newState1 = { ...state, incSymb: true, strength: changeColor(state) };
        changeColor(newState1);
        return newState1;
      } else {
        newState1 = { ...state, incSymb: false, strength: changeColor(state) };
        changeColor(newState1);
        return newState1;
      }

    case "passw/changeLength":
      // const stNumber = changeColor(state);

      // return { ...state, length: action.payload, strength: stNumber };
      const newState = {
        ...state,
        length: action.payload,
        strength: changeColor(state),
      };
      changeColor(newState);
      return newState;
  }

  return state;
};

export const changeColor = (state = passwordState) => {
  let strWord = "";
  const propertyValues = Object.values(state);
  let trueFlags = propertyValues.filter((el) => el === true || el > 20).length;

  console.log(trueFlags);

  if (trueFlags === 1) {
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
