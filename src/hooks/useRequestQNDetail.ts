import { useParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQNDetail } from "../api";
import { setQncList, setQncActiveId } from "../store/counter/qnc";
import { setPageInfo } from "../store/counter/page";
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
    const {
      componentList = [],
      title,
      description,
      css,
      scripts,
      isPublished,
    } = data;
    dispatch(setQncList(componentList));
    dispatch(
      setPageInfo({ title, description, styles: css, scripts, isPublished }),
    );
    if (componentList.length) {
      dispatch(setQncActiveId(componentList[0]?.qn_id ?? ""));
    }
  }, [data]);

  useEffect(() => {
    run();
  }, [id]);
  return { loading, data, error };
};
