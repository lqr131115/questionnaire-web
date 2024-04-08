import { produce } from "immer";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { QNComponentType, QNComponentProps } from "@/components/QNComponents";

// 服务端返回的数据类型 (不包括组件类型)
type QNComponent = {
  qn_id: string;
  title: string;
  type: QNComponentType;
  props: QNComponentProps;
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
    addQnc: produce(
      (draft: QNComponentState, action: PayloadAction<QNComponent>) => {
        const newComponent = action.payload;
        const { list, activeId } = draft;
        const curActiveIdx = list.findIndex((c) => c.qn_id === activeId);
        if (~curActiveIdx) {
          const tempList = [...list];
          tempList.splice(curActiveIdx + 1, 0, newComponent);
          draft.list = tempList;
        } else {
          draft.list.push(newComponent);
        }
        setQncActiveId(newComponent.qn_id);
      },
    ),
    resetQnc: produce((draft: QNComponentState) => {
      draft.activeId = "";
      draft.list = [];
    }),
  },
});

export const { setQncList, setQncActiveId, resetQnc, addQnc } =
  qncSlice.actions;

export default qncSlice.reducer;
