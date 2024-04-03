import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

interface UserState {
  token: string;
}

const initialState: UserState = {
  token: "admin",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state: UserState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = userSlice.actions;

export const getToken = (state: RootState) => state.user.token;

export default userSlice.reducer;
