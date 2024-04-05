import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRequest } from "ahooks";
import { useGetUserInfo } from "./useGetUserInfo";
import { setUserInfo } from "../store/counter/user";
import { getUserInfo } from "../api";

export const useRequestUserInfo = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { run } = useRequest(getUserInfo, {
    manual: true,
    onSuccess(res: any) {
      const { username, nickname } = res?.data || {};
      dispatch(setUserInfo({ username, nickname }));
    },
    onFinally() {
      setLoading(false);
    },
  });
  const { username } = useGetUserInfo();
  useEffect(() => {
    if (username) {
      setLoading(false);
      return;
    }
    run();
  }, [username]);
  return { loading };
};
