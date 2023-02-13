import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./features/themeModeSlice";
import appStateSlice from "./features/appStateSlice";
import globalLoadingSlice from "./features/globalLoadingSlice";
import cartSlice from "./features/cartSlice";
import userSlice from "./features/userSlice";
import authModalSlice from "./features/authModalSlice";
import productsSlice from "./features/productsSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    themeMode: themeModeSlice,
    authModal: authModalSlice,
    appState: appStateSlice,
    globalLoading: globalLoadingSlice,
    cart: cartSlice,
    products: productsSlice,
  },
});

export default store;
