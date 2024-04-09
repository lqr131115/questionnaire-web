import { useAppSelector } from "../store/hooks";

export const useGetQncInfo = () => {
  const { list, activeId, history } = useAppSelector((state) => state.qnc);
  const activeQnc = list.find((item) => item.qn_id === activeId);
  return { list, activeId, activeQnc, history };
};
