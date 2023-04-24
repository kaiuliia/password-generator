import { useEffect } from "react";

const passwordState = {
  password: "",
  incUpper: false,
  incLow: false,
  incSymb: false,
  incNum: false,
  length: 10,

  strength: "TOO WEAK!",
  copied: false,
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
        newState4 = { ...state, incLow: true };
        return {
          ...newState4,
          strength: changeColor(newState4),
          copied: false,
        };
      } else {
        newState4 = {
          ...state,
          incLow: false,
          strength: changeColor(state),
          copied: false,
        };
        changeColor(newState4);
        return newState4;
      }

    case "passw/numCaseChecked":
      let newState3;

      if (state.incNum === false) {
        newState3 = { ...state, incNum: true };
        return {
          ...newState3,
          strength: changeColor(newState3),
          copied: false,
        };
      } else {
        newState3 = {
          ...state,
          incNum: false,
          strength: changeColor(state),
          copied: false,
        };
        changeColor(newState3);
        return newState3;
      }

    case "passw/upCaseChecked":
      let newState2;

      if (state.incUpper === false) {
        newState2 = { ...state, incUpper: true };
        return {
          ...newState2,
          strength: changeColor(newState2),
          copied: false,
        };
      } else {
        newState2 = {
          ...state,
          incUpper: false,
          strength: changeColor(state),
          copied: false,
        };
        changeColor(newState2);
        return newState2;
      }

    case "passw/symbolCaseChecked":
      let newState1;

      if (state.incSymb === false) {
        newState1 = { ...state, incSymb: true };
        return {
          ...newState1,
          strength: changeColor(newState1),
          copied: false,
        };
      } else {
        newState1 = {
          ...state,
          incSymb: false,
          strength: changeColor(state),
          copied: false,
        };
        changeColor(newState1);
        return newState1;
      }
    case "passw/changeLength":
      const newState = {
        ...state,
        length: action.payload,
        copied: false,
        strength: changeColor(state),
      };
      changeColor(newState);
      return newState;

    case "passw/passwordCopied":
      if (state.password === "") {
        return { ...state, copied: false };
      } else {
        copy(state);
        return { ...state, copied: true };
      }
  }

  return state;
};

const copy = (state) => {
  // if (state.password === "") {
  //
  // } else {
  navigator.clipboard.writeText(state.password.join(""));
};

export const changeColor = (state = passwordState) => {
  let strWord = "";
  const propertyValues = Object.values(state);
  let trueFlags = propertyValues.filter((el) => el === true || el > 20).length;

  console.log(trueFlags);

  if (trueFlags === 0) {
    strWord = "TOO WEAK!";
  }

  if (trueFlags === 1) {
    strWord = "TOO WEAK!";
  }

  if (trueFlags === 2) {
    strWord = "WEAK";
  }

  if (trueFlags === 3) {
    strWord = "MEDIUM";
  }

  if (trueFlags === 4) {
    strWord = "MEDIUM";
  }
  if (trueFlags === 5) {
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

export const passwordCopied = () => {
  return {
    type: "passw/passwordCopied",
  };
};
