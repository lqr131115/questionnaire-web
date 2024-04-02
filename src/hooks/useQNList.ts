import { useSearchParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { getQNList } from "../api";
import {
  SEARCH_LIST_KEYWORD_KEY,
  SEARCH_LIST_PAGE_KEY,
  SEARCH_LIST_PAGESIZE_KEY,
  SEARCH_LIST_DEFAULT_PAGESIZE,
} from "../constants";

type OptionType = {
  isStar: boolean;
  isDeleted: number;
};
export const useQNList = (options: Partial<OptionType> = {}) => {
  const { isStar, isDeleted = 0 } = options;
  const [searchParams] = useSearchParams();
  async function _getQNList() {
    const keyword = searchParams.get(SEARCH_LIST_KEYWORD_KEY) || "";

    const page = parseInt(searchParams.get(SEARCH_LIST_PAGE_KEY) || "1");
    const pageSize = parseInt(
      searchParams.get(SEARCH_LIST_PAGESIZE_KEY) ||
        `${SEARCH_LIST_DEFAULT_PAGESIZE}`,
    );
    return await getQNList({ keyword, isStar, isDeleted, page, pageSize });
  }
  const { loading, data, error, refresh } = useRequest(_getQNList, {
    refreshDeps: [searchParams],
  });
  return { loading, data, error, refresh };
};
