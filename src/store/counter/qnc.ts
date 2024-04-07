import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  QNComponentType,
  QNComponentProps,
} from "../../components/QNComponents";

type QNComponent = {
  qn_id: string;
  title: string;
  type: QNComponentType;
  props: QNComponentProps;
  [key: string]: any;
};

type QNComponentState = {
  list: QNComponent[];
};

const initialState: QNComponentState = {
  list: [],
};

// qnc --> questionnaire Component
export const qncSlice = createSlice({
  name: "qnc",
  initialState,
  reducers: {
    setQncList: (
      state: QNComponentState,
      action: PayloadAction<QNComponent[]>,
    ) => {
      state.list = action.payload;
    },
  },
});

export const { setQncList } = qncSlice.actions;

export default qncSlice.reducer;
