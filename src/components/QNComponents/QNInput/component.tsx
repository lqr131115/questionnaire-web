import React, { FC } from "react";
import { Input, Typography } from "antd";
import { QNInputPropsType, QNInputDefaultProps } from "./interface";

const { Paragraph } = Typography;

const QNInput: FC<Partial<QNInputPropsType>> = (props) => {
  const { title, placeholder, size, defaultValue } = {
    ...QNInputDefaultProps,
    ...props,
  };
  return (
    <>
      <Paragraph strong>{title}</Paragraph>
      <Input placeholder={placeholder} size={size} value={defaultValue} />
    </>
  );
};

export default QNInput;
