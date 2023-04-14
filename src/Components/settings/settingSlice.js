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

const createPassword = () => {
  let newPass = [];
  for (let i = 0; i <= 3; i++) {
    newPass.push(
      keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)] +
        keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)] +
        keys.number[Math.floor(Math.random() * keys.number.length)] +
        keys.symbol[Math.floor(Math.random() * keys.symbol.length)]
    );
  }
  return newPass;
};

export const passwordReducer = (state = passwordState, action) => {
  switch (action.type) {
    case "passw/setPassword":
      return createPassword();

    case "passw/lowCaseChecked":
    // return state.map=>(...state, incLow: true)
  }

  return state.password;
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
