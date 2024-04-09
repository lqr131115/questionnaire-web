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

  const handleMove = (direction: "up" | "down") => {
    if (!activeId) return;
    const idx = list.findIndex((m) => m.qn_id === activeId);
    if (~idx) {
      const nextIdx = direction === "up" ? idx - 1 : idx + 1;
      if (nextIdx >= 0 && nextIdx < list.length) {
        const nextId = list[nextIdx].qn_id;
        dispatch(setQncActiveId(nextId));
      }
    }
  };

  const handleDelete = () => {
    dispatch(deleteActiveQnc());
  };

  const handleHidden = () => {
    dispatch(changeQncHidden({ qn_id: activeId, hidden: true }));
  };

  const handleToggleLock = () => {
    dispatch(toggleQncLocked({ qn_id: activeId }));
  };

  const handleCopy = () => {
    dispatch(copyQnc({ qn_id: activeId }));
  };

  useKeyPress(["uparrow"], () => handleMove("up"));
  useKeyPress(["downarrow"], () => handleMove("down"));
  useKeyPress(["backspace", "delete"], handleDelete);
  useKeyPress(["alt.h"], handleHidden);
  useKeyPress(["alt.l"], handleToggleLock);
  useKeyPress(["ctrl.c"], handleCopy);
};
