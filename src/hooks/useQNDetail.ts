import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQNDetail } from "../api";
const useQNDetail = () => {
  const params = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getQNDetail(params.id as string)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => console.log("useQNDetail", err))
      .finally(() => setLoading(false));
  }, []);
  return { detail, loading };
};

export default useQNDetail;
