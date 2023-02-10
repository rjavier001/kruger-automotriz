import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
    userData: {},
    listHistory: [],
    userOrderId: null,
  },
  reducers: {
    setUser: (state, action) => {
      if (action.payload === null) {
        localStorage.removeItem("actkn");
      } else {
        if (action.payload.token)
          localStorage.setItem("actkn", action.payload.token);
      }
      state.user = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setlistHistory: (state, action) => {
      state.listHistory = action.payload;
    },
    removeHistory: (state, action) => {
      const { mediaId } = action.payload;
      state.listHistory = [...state.listHistory].filter(
        (e) => e.mediaId.toString() !== mediaId.toString()
      );
    },
    addHistory: (state, action) => {
      state.listHistory = [action.payload, ...state.listHistory];
    },
    setOrderId: (state, action) => {
      state.userOrderId = action.payload;
    },
  },
});

export const {
  setUser,
  setUserData,
  setlistHistory,
  addHistory,
  removeHistory,
  setOrderId,
} = userSlice.actions;

export default userSlice.reducer;
