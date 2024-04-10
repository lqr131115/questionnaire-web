import React, { FC } from "react";
import { QNInfoPropsType } from "./interface";
import { Form, Input } from "antd";

const QNInfoProp: FC<Partial<QNInfoPropsType>> = (props) => {
  const { content, title, onValuesChange, disabled } = props;
  const [from] = Form.useForm();
  return (
    <Form
      form={from}
      initialValues={{ content, title }}
      onValuesChange={onValuesChange}
      disabled={disabled}
      layout="vertical"
    >
      <Form.Item
        label="标题"
        name="title"
        rules={[{ required: true, message: "标题不能为空" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="内容" name="content">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default QNInfoProp;
