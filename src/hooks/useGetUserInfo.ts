import { useAppSelector } from "../store/hooks";

export const useGetUserInfo = () => {
  return useAppSelector((state) => state.user.info);
};
