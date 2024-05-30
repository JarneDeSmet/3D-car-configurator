import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import carSlice from "./carSlice";
import settingsSlice from "./settingsSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: { car: carSlice, settings: settingsSlice, user: userSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useStoreDispatch: () => AppDispatch = useDispatch;
