import React, { FC } from "react";
import { useTitle } from "ahooks";
import { Spin } from "antd";
import useQNDetail from "../../../hooks/useQNDetail";
const Edit: FC = () => {
  useTitle("问卷编辑");
  const { loading, data: detail } = useQNDetail();
  return (
    <>
      <h3>问卷编辑</h3>
      <Spin spinning={loading} size="large">
        <div>{detail && (detail as any).title}</div>
      </Spin>
    </>
  );
};

export default Edit;
