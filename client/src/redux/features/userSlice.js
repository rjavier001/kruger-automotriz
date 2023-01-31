import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
    listHistory: [],
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
  },
});

export const { setUser, setlistHistory, addHistory, removeHistory } =
  userSlice.actions;

export default userSlice.reducer;
