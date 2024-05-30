import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    savePopup: false as boolean,
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setSavePopup: (state, action) => {
            state.savePopup = action.payload;
        },
    },
});

export const { setSavePopup } = settingsSlice.actions;
export default settingsSlice.reducer;
