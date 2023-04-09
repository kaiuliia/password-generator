import { combineReducers, createStore } from "redux";

import { passwordReducer } from "../Components/settings/settingSlice";

const rootReducer = combineReducers({
  pass: passwordReducer,
});

export const store = createStore(rootReducer);
