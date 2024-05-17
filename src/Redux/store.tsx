import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import carSlice from "./carSlice";

export const store = configureStore({
    reducer: { car: carSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useStoreDispatch: () => AppDispatch = useDispatch;
