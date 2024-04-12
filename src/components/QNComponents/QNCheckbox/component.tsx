import React, { FC } from "react";
import { QNCheckboxDefaultProps, QNCheckboxPropsType } from "./interface";
import { Typography, Checkbox, Space } from "antd";
const { Paragraph } = Typography;
const QNCheckbox: FC<Partial<QNCheckboxPropsType>> = (props) => {
  const { title, vertical, options } = {
    ...QNCheckboxDefaultProps,
    ...props,
  };
  return (
    <>
      <Paragraph strong>{title}</Paragraph>
      <Space direction={vertical ? "vertical" : "horizontal"}>
        {options.map((o) => (
          <Checkbox key={o.value} value={o.value} checked={o.checked}>
            {o.label}
          </Checkbox>
        ))}
      </Space>
    </>
  );
};

export default QNCheckbox;
