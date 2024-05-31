import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, limitToFirst, limitToLast, query, ref} from "firebase/database";
import { db } from "../../firebase/firebase";

export const getNanniesData = createAsyncThunk(
    "nannies/getNanniesData",
    async (limit, thunkAPI) => {
        const nanniesQuery = query(ref(db, '/'), limitToFirst(limit))
    
        try {
            const data = await get(nanniesQuery);
            return data.val();
        } catch (error) {
            console.log(error.message)
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);
export const getLastData = createAsyncThunk(
    "nannies/getLastData",
    async (_, thunkAPI) => {
        const nanniesQuery = query(ref(db, '/'), limitToLast(1))
    
        try {
            const data = await get(nanniesQuery);
            return data.val();
        } catch (error) {
            console.log(error.message)
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);
