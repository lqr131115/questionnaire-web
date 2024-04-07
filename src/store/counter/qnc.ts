import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  QNComponentType,
  QNComponentProps,
} from "../../components/QNComponents";

interface IQNComponent {
  qn_id: string;
  title: string;
  type: QNComponentType;
  props: QNComponentProps;
  [key: string]: any;
}

type QNComponentState = {
  list: IQNComponent[];
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
      action: PayloadAction<IQNComponent[]>,
    ) => {
      state.list = action.payload;
    },
  },
});

export const { setQncList } = qncSlice.actions;

export default qncSlice.reducer;
