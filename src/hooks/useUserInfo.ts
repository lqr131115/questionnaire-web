import { useAppSelector } from "../store/hooks";

export const useUserInfo = () => {
  return useAppSelector((state) => state.user.info);
};
