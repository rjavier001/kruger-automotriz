import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./features/themeModeSlice";
import appStateSlice from "./features/appStateSlice";

const store = configureStore({
  reducer: {
    themeMode: themeModeSlice,
    appState: appStateSlice
  },
});

export default store;
