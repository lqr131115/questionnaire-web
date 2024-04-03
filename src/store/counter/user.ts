import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserInfo = {
  username: string;
  nickname: string;
  [key: string]: any;
};

interface UserState {
  token: string;
  info: UserInfo;
}

const initialState: UserState = {
  token: "Bearer admin",
  info: {
    username: "admin",
    nickname: "管理员",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state: UserState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserInfo: (state: UserState, action: PayloadAction<UserInfo>) => {
      state.info = action.payload;
    },
  },
});

export const { setToken, setUserInfo } = userSlice.actions;

export default userSlice.reducer;
