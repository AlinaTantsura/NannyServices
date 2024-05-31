import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ email, password, name }, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      return auth.currentUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
    "user/logInUser",
    async ({ email, password }, thunkAPI) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
            console.log(auth.currentUser)
            return auth.currentUser;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.messsage);
        }
    }
);

export const logOutUser = createAsyncThunk(
    "user/logOutUser",
    async (_, thunkAPI) => {
        try {
            await signOut(auth);
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.messsage);
        }
    }
);

