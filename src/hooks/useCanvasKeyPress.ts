import { useKeyPress } from "ahooks";
import {
  QNComponent,
  setQncActiveId,
  deleteActiveQnc,
  toggleQncLocked,
  changeQncHidden,
  copyQnc,
} from "@/store/counter/qnc";
import { useAppDispatch } from "@/store/hooks";
export const useCanvasKeyPress = (list: QNComponent[], activeId: string) => {
  const dispatch = useAppDispatch();
  // 上移
  useKeyPress(["uparrow"], () => {
    if (!activeId) {
      return;
    }
    const idx = list.findIndex((m) => m.qn_id === activeId);
    if (~idx) {
      if (idx === 0) {
        return;
      }
      const nextId = list[idx - 1].qn_id;
      dispatch(setQncActiveId(nextId));
    }
  });
  // 下移
  useKeyPress(["downarrow"], () => {
    if (!activeId) {
      return;
    }
    const idx = list.findIndex((m) => m.qn_id === activeId);
    if (~idx) {
      if (idx === list.length - 1) {
        return;
      }
      const nextId = list[idx + 1].qn_id;
      dispatch(setQncActiveId(nextId));
    }
  });
  //  Delete
  useKeyPress(["backspace", "delete"], () => {
    dispatch(deleteActiveQnc());
  });
  // hidden ctrl + h 浏览器快捷键占用
  useKeyPress(["alt.h"], () => {
    dispatch(changeQncHidden({ qn_id: activeId, hidden: true }));
  });
  // lock & unlock ctrl + l 浏览器快捷键占用
  useKeyPress(["alt.l"], () => {
    dispatch(toggleQncLocked({ qn_id: activeId }));
  });
  // copy
  useKeyPress(["ctrl.c"], () => {
    dispatch(copyQnc({ qn_id: activeId }));
  });
};
