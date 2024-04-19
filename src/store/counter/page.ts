import { produce } from "immer";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PageInfoType = {
  title: string;
  description?: string;
  styles?: string;
  scripts?: string;
  [key: string]: any;
};

type PageInfoState = {
  title: string;
  description?: string;
  styles?: string;
  scripts?: string;
  [key: string]: any;
};

const initialState: PageInfoState = {
  title: "",
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPageInfo: produce(
      (draft: PageInfoState, action: PayloadAction<PageInfoState>) => {
        for (const key in action.payload) {
          draft[key] = action.payload[key];
        }
      },
    ),
  },
});

export const { setPageInfo } = pageSlice.actions;

export default pageSlice.reducer;
