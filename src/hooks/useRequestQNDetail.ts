import { useParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQNDetail } from "../api";
import { setQncList, setQncActiveId } from "../store/counter/qnc";
import { setPageSetting } from "../store/counter/page";
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
    const { componentList = [], setting } = data;
    dispatch(setQncList(componentList));
    dispatch(setPageSetting(setting));
    if (componentList.length) {
      dispatch(setQncActiveId(componentList[0]?.qn_id ?? ""));
    }
  }, [data]);

  useEffect(() => {
    run();
  }, [id]);
  return { loading, data, error };
};
