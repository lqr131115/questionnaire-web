import { produce } from "immer";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PageSettingType = {
  title: string;
  description?: string;
  styles?: string;
  scripts?: string;
};

type PageState = {
  setting: PageSettingType;
};

const initialState: PageState = {
  setting: {
    title: "",
  },
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPageSetting: produce(
      (draft: PageState, action: PayloadAction<PageState>) => {
        draft.setting = action.payload.setting;
      },
    ),
  },
});

export const { setPageSetting } = pageSlice.actions;

export default pageSlice.reducer;
