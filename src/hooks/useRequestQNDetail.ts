import { useParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { getQNDetail } from "../api";
export const useRequestQNDetail = () => {
  const { id } = useParams();
  async function _getQNDetail() {
    const res = await getQNDetail(id as string);
    return res.data;
  }
  const { loading, data, error } = useRequest(_getQNDetail);
  return { loading, data, error };
};
