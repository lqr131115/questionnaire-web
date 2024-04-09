import React, { FC, useEffect } from "react";
import { Form, Input, Radio } from "antd";
import { QNParagraphPropsType } from "./interface";
const { TextArea } = Input;
const QNParagraphProp: FC<Partial<QNParagraphPropsType>> = (props) => {
  const { content, align, onValuesChange, disabled } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      content,
      align,
    });
  }, [content, align]);
  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{ content, align }}
      onValuesChange={onValuesChange}
      disabled={disabled}
    >
      <Form.Item
        label="内容"
        name="content"
        rules={[{ required: true, message: "段落内容不能为空" }]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item name="align" label="对齐方式">
        <Radio.Group>
          <Radio.Button value="start">左对齐</Radio.Button>
          <Radio.Button value="center">居中对齐</Radio.Button>
          <Radio.Button value="end">右对齐</Radio.Button>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default QNParagraphProp;
