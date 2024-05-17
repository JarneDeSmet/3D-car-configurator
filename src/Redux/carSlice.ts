import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    color: "red" as string,
    rims: "rims3" as string,
};

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        setColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload;
        },
    },
});
export const { setColor } = carSlice.actions;

export default carSlice.reducer;
