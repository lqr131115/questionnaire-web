import React, { FC } from "react";
import { useTitle } from "ahooks";
import { Spin } from "antd";
import useQNDetail from "../../../hooks/useQNDetail";
const Stat: FC = () => {
  useTitle("问卷统计");
  const { detail, loading } = useQNDetail();
  return (
    <>
      <h3>问卷统计</h3>
      <Spin spinning={loading} size="large">
        <div>{(detail as any).title}</div>
      </Spin>
    </>
  );
};

export default Stat;
