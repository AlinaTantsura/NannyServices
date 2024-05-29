import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref } from "firebase/database";
import { db } from "../../firebase/firebase";

export const getNanniesData = createAsyncThunk(
    "nannies/getNanniesData",
    async (_, thunkAPI) => {
        const nanniesRef = ref(db, '/')
        try {
            const data = await get(nanniesRef);
            return data.val();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);
