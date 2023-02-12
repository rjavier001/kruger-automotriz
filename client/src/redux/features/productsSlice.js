import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "Products",
    initialState: {
        saveData: false,
    },
    reducers: {
        setSaveData: (state, action) => {
            state.saveData = action.payload;
        },
    },
});

export const {setSaveData} = productsSlice.actions;

export default productsSlice.reducer;
