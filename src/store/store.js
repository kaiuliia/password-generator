import { configureStore } from "@reduxjs/toolkit";

import { passwordReducer } from "../Components/settings/settingSlice";

export default configureStore({
  reducer: {
    passw: passwordReducer,
  },
});
