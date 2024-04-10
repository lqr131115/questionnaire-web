import React, { FC } from "react";
import { Typography, Input } from "antd";
import { QNInputNumberPropsType, QNInputNumberDefaultProps } from "./interface";

const { Paragraph } = Typography;

const QNInputNumber: FC<Partial<QNInputNumberPropsType>> = (props) => {
  const { title, defaultValue, placeholder } = {
    ...QNInputNumberDefaultProps,
    ...props,
  };
  return (
    <>
      <Paragraph strong>{title}</Paragraph>
      <Input placeholder={placeholder} value={defaultValue} />
    </>
  );
};

export default QNInputNumber;
