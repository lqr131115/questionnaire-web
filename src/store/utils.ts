import { QNComponent } from "./counter/qnc";

export const getNextActiveId = (
  removeId: string,
  list: QNComponent[],
): string => {
  let nextId = "";
  const curIdx = list.findIndex((c) => c.qn_id === removeId);
  if (~curIdx) {
    if (list.length === 1) {
      return nextId;
    }
    if (curIdx === list.length - 1) {
      nextId = list[curIdx - 1].qn_id;
    } else {
      nextId = list[curIdx + 1].qn_id;
    }
  }
  return nextId;
};
