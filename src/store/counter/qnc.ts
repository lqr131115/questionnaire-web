import { produce } from "immer";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { QNComponentType, QNComponentProps } from "@/components/QNComponents";

type QNComponent = {
  qn_id: string;
  title: string;
  type: QNComponentType;
  props: QNComponentProps;
  icon?: string;
  [key: string]: any;
};

type QNComponentState = {
  activeId: string;
  list: QNComponent[];
};

const initialState: QNComponentState = {
  activeId: "",
  list: [],
};

// qnc --> questionnaire Component
export const qncSlice = createSlice({
  name: "qnc",
  initialState,
  reducers: {
    setQncList: produce(
      (draft: QNComponentState, action: PayloadAction<QNComponent[]>) => {
        draft.list = action.payload;
      },
    ),
    setQncActiveId: produce(
      (draft: QNComponentState, action: PayloadAction<string>) => {
        draft.activeId = action.payload;
      },
    ),
    resetQnc: produce((draft: QNComponentState) => {
      draft.activeId = "";
      draft.list = [];
    }),
  },
});

export const { setQncList, setQncActiveId, resetQnc } = qncSlice.actions;

export default qncSlice.reducer;
