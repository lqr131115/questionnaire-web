import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

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

export const getToken = (state: RootState) => state.user.token;
export const getUserInfo = (state: RootState) => state.user.info;

export default userSlice.reducer;
