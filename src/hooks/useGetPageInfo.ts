import { useAppSelector } from "../store/hooks";

export const useGetPageInfo = () => {
  const { setting } = useAppSelector((state) => state.page);
  return { setting };
};
