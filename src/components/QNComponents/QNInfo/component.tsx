import React, { FC } from "react";
import { Typography } from "antd";
import { QNInfoPropsType, QNInfoDefaultProps } from "./interface";
const { Title, Text } = Typography;

const QNInfo: FC<Partial<QNInfoPropsType>> = (props) => {
  const { title, content = "" } = { ...QNInfoDefaultProps, ...props };
  return (
    <div style={{ textAlign: "center" }}>
      <Title level={1} style={{ margin: 0, marginBottom: 5 }}>
        {title}
      </Title>
      <Text>{content}</Text>
    </div>
  );
};

export default QNInfo;
