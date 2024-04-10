import React, { FC } from "react";
import { QNRadioDefaultProps, QNRadioPropsType } from "./interface";
import { Typography, Radio, Space } from "antd";
const { Paragraph } = Typography;
const { Group } = Radio;
const QNRadio: FC<Partial<QNRadioPropsType>> = (props) => {
  const { title, defaultValue, vertical, options } = {
    ...QNRadioDefaultProps,
    ...props,
  };
  return (
    <>
      <Paragraph strong>{title}</Paragraph>
      <Group value={defaultValue}>
        <Space direction={vertical ? "vertical" : "horizontal"}>
          {options.map((o) => (
            <Radio key={o.value} value={o.value}>
              {o.label}
            </Radio>
          ))}
        </Space>
      </Group>
    </>
  );
};

export default QNRadio;
