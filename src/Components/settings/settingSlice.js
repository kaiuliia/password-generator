const passwordState = {
  password: "default",
  incUpper: "false",
  incLow: "true",
  incSymb: "false",
  incNum: "false",
  length: 10,
};
const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "@#$%^&*()_+~|}{[]></-=",
};

const letters = "ABCDEFGHIJKLMN";
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

export const passwordReducer = (state = passwordState.password, action) => {
  createPassword();
  switch (action.type) {
    case "passw/setPassword":
      return (state = createPassword());
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

export const lowCaseChecked = () => {
  return {
    type: "passw/setPassword",
    payload: keys.lowerCase,
  };
};
