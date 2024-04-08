import React, { FC, useEffect } from "react";
import { Form, Input, Radio } from "antd";
import { QNInputPropsType } from "./interface";

const QNInputProp: FC<Partial<QNInputPropsType>> = (props) => {
  const { title, placeholder, size } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      title,
      placeholder,
      size,
    });
  }, [title, placeholder, size]);
  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{ title, placeholder, size }}
    >
      <Form.Item
        label="标题"
        name="title"
        rules={[{ required: true, message: "标题不能为空" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="提示" name="placeholder">
        <Input />
      </Form.Item>
      <Form.Item name="size" label="尺寸">
        <Radio.Group>
          <Radio value="large">大</Radio>
          <Radio value="middle">中等</Radio>
          <Radio value="small">小</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default QNInputProp;
