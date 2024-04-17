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
  setting: PageInfoType;
};

const initialState: PageInfoState = {
  setting: {
    title: "",
  },
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPageSetting: produce(
      (draft: PageInfoState, action: PayloadAction<PageInfoType>) => {
        draft.setting = action.payload;
      },
    ),
  },
});

export const { setPageSetting } = pageSlice.actions;

export default pageSlice.reducer;
