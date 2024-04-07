import { useAppSelector } from "../store/hooks";

export const useGetQncList = () => {
  const { list, activeId } = useAppSelector((state) => state.qnc);
  return { list, activeId };
};
