const passwordState = {
  password: "default",
  incUpper: false,
  incLow: false,
  incSymb: false,
  incNum: false,
  length: 10,
};
const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "@#$%^&*()_+~|}{[]></-=",
};

//reducer

const createPassword = (incLow, incUpper, incSymb, incNum) => {
  let newPass = [];
  for (let i = 0; i <= 3; i++)
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

  return newPass;
};

export const passwordReducer = (state = passwordState, action) => {
  switch (action.type) {
    case "passw/setPassword":
      const newPassword = createPassword(state.incLow, state.incNum);
      return { ...state, password: newPassword };

    case "passw/lowCaseChecked":
      if (state.incLow === false) {
        return { ...state, incLow: true };
      } else {
        return { ...state, incLow: false };
      }

    case "passw/numCaseChecked":
      if (state.incNum === false) {
        return { ...state, incNum: true };
      } else {
        return { ...state, incNum: false };
      }

    case "passw/upCaseChecked":
      if (state.incUpper === false) {
        return { ...state, incUpper: true };
      } else {
        return { ...state, incUpper: false };
      }

    case "passw/symbolCaseChecked":
      if (state.incSymb === false) {
        return { ...state, incSymb: true };
      } else {
        return { ...state, incSymb: false };
      }
  }

  return state;
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
