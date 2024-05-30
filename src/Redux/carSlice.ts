import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarDataType } from "../utils/carData";

const initialState = {
    id: "supra" as string,
    color: "red-Glossy" as string,
    rims: "19InchBlack" as string,
    engine: "3.0Twin-scrollTurbo" as string,
    sportPackage: false as boolean,
};

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        setColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload;
        },
        setRims: (state, action: PayloadAction<string>) => {
            state.rims = action.payload;
        },
        setEngine: (state, action: PayloadAction<string>) => {
            state.engine = action.payload;
        },
        setCarId: (state, action: PayloadAction<CarDataType | undefined>) => {
            if (!action.payload) return;
            const color = `${action.payload.possibleColors[0].colors[0].name}-${action.payload.possibleColors[0].type}`;

            state.id = action.payload.id;
            state.color = color;
            state.rims = action.payload.possibleRims[0].id;
            state.engine = action.payload.possibleEngines[0].id;
            state.sportPackage = false;
        },
        setSportPackage: (state, action: PayloadAction<boolean>) => {
            state.sportPackage = action.payload;
        },
    },
});
export const { setSportPackage, setColor, setCarId, setRims, setEngine } = carSlice.actions;

export default carSlice.reducer;
