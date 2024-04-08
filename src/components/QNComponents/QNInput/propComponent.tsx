import React, { FC, useEffect } from "react";
import { Form, Input, Radio } from "antd";
import { QNInputPropsType } from "./interface";

const QNInputProp: FC<Partial<QNInputPropsType>> = (props) => {
  const { title, content, placeholder, size, onValuesChange } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      title,
      content,
      placeholder,
      size,
    });
  }, [title, content, placeholder, size]);

  return (
    <Form
      layout="vertical"
      form={form}
      onValuesChange={onValuesChange}
      initialValues={{ title, content, placeholder, size }}
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
      <Form.Item label="提示" name="placeholder">
        <Input />
      </Form.Item>
      <Form.Item name="size" label="尺寸">
        <Radio.Group>
          <Radio value="large">大</Radio>
          <Radio value="middle">中</Radio>
          <Radio value="small">小</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default QNInputProp;
