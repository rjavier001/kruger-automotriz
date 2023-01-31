import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./features/themeModeSlice";
import appStateSlice from "./features/appStateSlice";
import cartSlice from "./features/cartSlice";
import userSlice from "./features/userSlice";
import authModalSlice from "./features/authModalSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    themeMode: themeModeSlice,
    authModal: authModalSlice,
    appState: appStateSlice,
    cart: cartSlice,
  },
});

export default store;
