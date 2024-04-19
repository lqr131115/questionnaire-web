import { useRequest } from "ahooks";
import { getStatList } from "../api";
type OptionType = {
  id: string;
};
export const useRequestStatList = (options: OptionType) => {
  const { id } = options;
  async function _getStatList() {
    return await getStatList(id);
  }
  const { loading, data, error } = useRequest(_getStatList);
  return { loading, data, error };
};
