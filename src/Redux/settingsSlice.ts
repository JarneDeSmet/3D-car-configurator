import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    savePopup: false as boolean,
    infoPopUp: false as boolean,
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setSavePopup: (state, action) => {
            state.savePopup = action.payload;
        },
        setInfoPopUp: (state, action) => {
            state.infoPopUp = action.payload;
        },
    },
});

export const { setSavePopup, setInfoPopUp } = settingsSlice.actions;
export default settingsSlice.reducer;
