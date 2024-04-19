import { useRequestStatList } from "@/hooks";
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
type QNAnswerProps = {
  type: string;
};

const QNAnswer: FC<QNAnswerProps> = (props) => {
  const { type } = props;
  const { id = "" } = useParams();
  const { loading } = useRequestStatList({ id });
  return (
    <>
      <Spin spinning={loading} style={{ marginTop: 20 }}>
        <span>{type}</span>
      </Spin>
    </>
  );
};

export default QNAnswer;
