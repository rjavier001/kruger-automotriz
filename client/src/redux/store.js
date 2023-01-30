import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./features/themeModeSlice";
import appStateSlice from "./features/appStateSlice";
import cartSlice from "./features/cartSlice";

const store = configureStore({
  reducer: {
    themeMode: themeModeSlice,
    appState: appStateSlice,
    cart: cartSlice,
  },
});

export default store;
