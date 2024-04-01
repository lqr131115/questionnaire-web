import { useSearchParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { getQNList } from "../api";
import { SEARCH_LIST_PARAM_KEY } from "../constants";

type OptionType = {
  isStar: boolean;
  isDeleted: number;
};
export const useQNList = (options: Partial<OptionType> = {}) => {
  const { isStar, isDeleted = 0 } = options;
  const [searchParams] = useSearchParams();
  async function _getQNList() {
    const keyword = searchParams.get(SEARCH_LIST_PARAM_KEY) || "";
    return await getQNList({ keyword, isStar, isDeleted });
  }
  const { loading, data, error } = useRequest(_getQNList, {
    refreshDeps: [searchParams],
  });
  return { loading, data, error };
};
