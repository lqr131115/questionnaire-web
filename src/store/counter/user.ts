import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserInfo = {
  username: string;
  nickname: string;
  [key: string]: any;
};

interface UserState {
  info: UserInfo;
}

const initialState: UserState = {
  info: {
    username: "",
    nickname: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state: UserState, action: PayloadAction<UserInfo>) => {
      state.info = action.payload;
    },
    logout: (state: UserState) => {
      state.info = initialState.info;
    },
  },
});

export const { setUserInfo, logout } = userSlice.actions;

export default userSlice.reducer;
