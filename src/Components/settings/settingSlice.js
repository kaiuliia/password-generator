const passwordState = "fghjkk";

//reducer

export const passwordReducer = (state = passwordState, action) => {
  state = "hhjj";
};

// action creators
export const generatePassword = () => {
  return {
    type: "password/setPassword",
    payload: passwordState,
  };
};
