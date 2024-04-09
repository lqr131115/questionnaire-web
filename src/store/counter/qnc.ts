import { produce } from "immer";
import { nanoid } from "nanoid";
import cloneDeep from "lodash.clonedeep";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { QNComponentType, QNComponentProps } from "@/components/QNComponents";
import { getNextActiveId } from "../utils";

// 服务端返回的数据类型 (不包括组件类型)
export type QNComponent = {
  qn_id: string;
  title: string;
  type: QNComponentType;
  props: QNComponentProps;
  hidden?: boolean;
  locked?: boolean;
  [key: string]: any;
};

type QNActionHistory = {
  oldId: string;
  oldList: QNComponent[];
};

type QNComponentState = {
  activeId: string;
  list: QNComponent[];
  history: QNActionHistory[];
};

const initialState: QNComponentState = {
  activeId: "",
  list: [],
  history: [],
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
    rollbackQncAction: produce((draft: QNComponentState) => {
      const { history } = draft;
      const top = history.pop();
      if (top) {
        const { oldId, oldList } = top;
        draft.list = oldList;
        draft.activeId = oldId;
        draft.history = [...history];
      }
    }),
    addQnc: produce(
      (draft: QNComponentState, action: PayloadAction<QNComponent>) => {
        const newComponent = action.payload;
        const { list, activeId } = draft;
        draft.history.push({ oldId: activeId, oldList: [...list] });
        const curActiveIdx = list.findIndex((c) => c.qn_id === activeId);
        if (~curActiveIdx) {
          draft.list.splice(curActiveIdx + 1, 0, newComponent);
        } else {
          draft.list.push(newComponent);
        }
        draft.activeId = newComponent.qn_id;
      },
    ),
    copyQnc: produce(
      (draft: QNComponentState, action: PayloadAction<{ qn_id: string }>) => {
        const { list, activeId } = draft;
        const { qn_id } = action.payload;
        const curIdx = draft.list.findIndex((c) => c.qn_id === qn_id);
        if (~curIdx) {
          draft.history.push({ oldId: activeId, oldList: [...list] });
          const curComponent = list[curIdx];
          const newComponent = { ...cloneDeep(curComponent), qn_id: nanoid() };
          draft.list.splice(curIdx + 1, 0, newComponent);
          draft.activeId = newComponent.qn_id;
        }
      },
    ),
    deleteActiveQnc: produce((draft: QNComponentState) => {
      const { list, activeId } = draft;
      const curActiveIdx = list.findIndex((c) => c.qn_id === activeId);
      if (~curActiveIdx) {
        draft.history.push({ oldId: activeId, oldList: [...list] });
        const nextActiveId = getNextActiveId(activeId, list);
        draft.list.splice(curActiveIdx, 1);
        draft.activeId = nextActiveId;
      }
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
    changeQncHidden: produce(
      (
        draft: QNComponentState,
        action: PayloadAction<{ qn_id: string; hidden: boolean }>,
      ) => {
        const { qn_id, hidden } = action.payload;
        const curComponent = draft.list.find((c) => c.qn_id === qn_id);
        draft.activeId = hidden ? getNextActiveId(qn_id, draft.list) : qn_id;
        if (curComponent) {
          curComponent.hidden = hidden;
        }
      },
    ),
    toggleQncLocked: produce(
      (draft: QNComponentState, action: PayloadAction<{ qn_id: string }>) => {
        const { qn_id } = action.payload;
        const curComponent = draft.list.find((c) => c.qn_id === qn_id);
        if (curComponent) {
          curComponent.locked = !curComponent.locked;
        }
      },
    ),
    resetQnc: produce((draft: QNComponentState) => {
      draft.activeId = "";
      draft.list = [];
      draft.history = [];
    }),
  },
});

export const {
  setQncList,
  setQncActiveId,
  resetQnc,
  deleteActiveQnc,
  addQnc,
  copyQnc,
  changeQncProps,
  changeQncHidden,
  toggleQncLocked,
  rollbackQncAction,
} = qncSlice.actions;

export default qncSlice.reducer;
