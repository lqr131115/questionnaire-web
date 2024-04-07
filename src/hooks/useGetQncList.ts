import { useAppSelector } from "../store/hooks";

export const useGetQncList = () => {
  return useAppSelector((state) => state.qnc.list);
};
