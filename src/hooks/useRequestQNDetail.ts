import { useParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQNDetail } from "../api";
import { setQncList, setQncActiveId } from "../store/counter/qnc";
export const useRequestQNDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  async function _getQNDetail() {
    const res = await getQNDetail(id as string);
    return res.data;
  }
  const { loading, data, error, run } = useRequest(_getQNDetail, {
    manual: true,
  });

  useEffect(() => {
    if (!data) return;
    const { componentList = [] } = data;
    dispatch(setQncList(componentList));
    if (componentList.length) {
      dispatch(setQncActiveId(componentList[0]?.qn_id ?? ""));
    }
  }, [data]);

  useEffect(() => {
    run();
  }, [id]);
  return { loading, data, error };
};
