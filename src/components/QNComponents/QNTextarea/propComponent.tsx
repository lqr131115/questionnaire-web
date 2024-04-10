import React, { FC, useEffect } from "react";
import { Form, Input } from "antd";
import { QNTextAreaPropsType } from "./interface";
const { TextArea } = Input;
const QNTextAreaProp: FC<Partial<QNTextAreaPropsType>> = (props) => {
  const { title, defaultValue, placeholder, onValuesChange, disabled } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      title,
      defaultValue,
      placeholder,
    });
  }, [title, defaultValue, placeholder]);

  return (
    <Form
      layout="vertical"
      form={form}
      onValuesChange={onValuesChange}
      initialValues={{ title, defaultValue, placeholder }}
      disabled={disabled}
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
      <Form.Item label="默认值" name="defaultValue">
        <TextArea />
      </Form.Item>
    </Form>
  );
};

export default QNTextAreaProp;
