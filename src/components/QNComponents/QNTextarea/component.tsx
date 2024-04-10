import React, { FC } from "react";
import { Input, Typography } from "antd";
import { QNTextAreaPropsType, QNTextAreaDefaultProps } from "./interface";

const { Paragraph } = Typography;
const { TextArea } = Input;

const QNTextArea: FC<Partial<QNTextAreaPropsType>> = (props) => {
  const { title, placeholder, defaultValue } = {
    ...QNTextAreaDefaultProps,
    ...props,
  };
  return (
    <>
      <Paragraph strong>{title}</Paragraph>
      <TextArea placeholder={placeholder} value={defaultValue} />
    </>
  );
};

export default QNTextArea;
