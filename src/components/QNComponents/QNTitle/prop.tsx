import React, { FC, useEffect } from "react";
import { Form, Input, Radio, Select } from "antd";
import { QNTitlePropsType } from "./interface";

const QNTitleProp: FC<Partial<QNTitlePropsType>> = (props) => {
  const { text, level, align } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      text,
      level,
      align,
    });
  }, [text, level, align]);
  return (
    <Form layout="vertical" form={form} initialValues={{ text, level, align }}>
      <Form.Item
        label="标题"
        name="text"
        rules={[{ required: true, message: "标题不能为空" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="等级" name="level">
        <Select>
          <Select.Option value="1">H1</Select.Option>
          <Select.Option value="2">H2</Select.Option>
          <Select.Option value="3">H3</Select.Option>
          <Select.Option value="4">H4</Select.Option>
          <Select.Option value="5">H5</Select.Option>
        </Select>
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

export default QNTitleProp;
