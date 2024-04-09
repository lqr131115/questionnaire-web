import { produce } from "immer";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { QNComponentType, QNComponentProps } from "@/components/QNComponents";
import { getNextActiveId } from "../utils";

// 服务端返回的数据类型 (不包括组件类型)
export type QNComponent = {
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
          draft.list.splice(curActiveIdx + 1, 0, newComponent);
        } else {
          draft.list.push(newComponent);
        }
        draft.activeId = newComponent.qn_id;
      },
    ),
    deleteActiveQnc: produce((draft: QNComponentState) => {
      const { list, activeId } = draft;
      const curActiveIdx = list.findIndex((c) => c.qn_id === activeId);
      if (~curActiveIdx) {
        const nextActiveId = getNextActiveId(activeId, list);
        draft.list.splice(curActiveIdx, 1);
        draft.activeId = nextActiveId;
      }
    }),
    resetQnc: produce((draft: QNComponentState) => {
      draft.activeId = "";
      draft.list = [];
    }),
    changeQncProps: produce(
      (
        draft: QNComponentState,
        action: PayloadAction<{ qn_id: string; newProps: QNComponentProps }>,
      ) => {
        const { qn_id, newProps } = action.payload;
        const curActiveIdx = draft.list.findIndex((c) => c.qn_id === qn_id);
        if (~curActiveIdx) {
          draft.list[curActiveIdx].props = newProps;
        }
      },
    ),
  },
});

export const {
  setQncList,
  setQncActiveId,
  resetQnc,
  deleteActiveQnc,
  addQnc,
  changeQncProps,
} = qncSlice.actions;

export default qncSlice.reducer;
