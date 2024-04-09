import { QNComponent } from "./counter/qnc";

export const getNextActiveId = (
  removeId: string,
  list: QNComponent[],
): string => {
  let nextId = "";
  const visibleList = list.filter((c) => !c.hidden);
  const curIdx = visibleList.findIndex((c) => c.qn_id === removeId);
  if (~curIdx) {
    if (visibleList.length === 1) {
      return nextId;
    }
    if (curIdx === visibleList.length - 1) {
      nextId = visibleList[curIdx - 1].qn_id;
    } else {
      nextId = visibleList[curIdx + 1].qn_id;
    }
  }
  return nextId;
};
