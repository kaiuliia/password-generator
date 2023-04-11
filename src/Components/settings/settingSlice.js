const passwordState = "fghjkk";
const keys = {
  upperCaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "@#$%^&*()_+~|}{[]></-=",
};

const letters = "ABCDEFGHIJKLMN";
//reducer

export const passwordReducer = (state = passwordState, action) => {
  let newPass = [];
  for (let i = 0; i <= 7; i++) {
    newPass.push(letters[Math.floor(Math.random() * letters.length)]);
  }
  switch (action.type) {
    case "passw/setPassword":
      return (state = newPass);
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
