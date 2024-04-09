import React, { FC } from "react";
import { Typography } from "antd";
import { QNTitlePropsType, QNTitleDefaultProps } from "./interface";
const { Title } = Typography;

const QNTitle: FC<Partial<QNTitlePropsType>> = (props) => {
  const { text, level, align } = { ...QNTitleDefaultProps, ...props };
  return (
    <Title level={level} style={{ textAlign: align, margin: 0 }}>
      {text}
    </Title>
  );
};

export default QNTitle;
