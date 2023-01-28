import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./features/themeModeSlice";

const store = configureStore({
  reducer: {
    themeMode: themeModeSlice,
  },
});

export default store;
