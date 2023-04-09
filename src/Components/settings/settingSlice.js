const passwordState = "fghjkk";

// action creators
export const generatePassword = () => {
  return {
    type: "password/setPassword",
    payload: passwordState,
  };
};
