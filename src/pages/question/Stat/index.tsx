import React, { FC } from "react";
import { useTitle } from "ahooks";
import { Spin } from "antd";
import { useRequestQNDetail } from "../../../hooks";
const Stat: FC = () => {
  useTitle("问卷统计");
  const { loading, data: detail } = useRequestQNDetail();
  return (
    <>
      <h3>问卷统计</h3>
      <Spin spinning={loading} size="large">
        <div>{detail && (detail as any).title}</div>
      </Spin>
    </>
  );
};

export default Stat;
