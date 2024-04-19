import { useRequest } from "ahooks";
import { getStatList } from "../api";
type OptionType = {
  id: string;
  page: number;
  pageSize: number;
};

// TODO: 在 QNAnswer.tsx 使用 useRequest , 若多出使用 可以考虑修改并使用该hook
// run中 可以传递参数给_getStatList(opts)

export const useRequestStatList = (options: OptionType) => {
  async function _getStatList(opts: OptionType) {
    return await getStatList({ ...options, ...opts });
  }
  const { loading, data: res, error, run } = useRequest(_getStatList);
  return { loading, res, error, run };
};
