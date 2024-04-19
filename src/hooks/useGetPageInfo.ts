import { useAppSelector } from "../store/hooks";

export const useGetPageInfo = () => {
  const info = useAppSelector((state) => state.page);
  return info;
};
