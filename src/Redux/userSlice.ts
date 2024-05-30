import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { User } from "firebase/auth";
import { auth } from "../firebase";

const initialState = {
    user: null as User | null,
    saveConfigurations: [] as never[],
};

type loginPayload = {
    email: string;
    password: string;
};

export const userLogin = createAsyncThunk("user/login", async ({ email, password }: loginPayload, thunkAPI) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        return userCredential.user;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        documentChanged: (state, action: PayloadAction<never[]>) => {
            // Update the array in the Redux store
            state.saveConfigurations = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.fulfilled, (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
        });
    },
});

export default userSlice.reducer;
