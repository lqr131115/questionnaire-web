import React, { FC, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useAppDispatch } from "@/store/hooks";
import { setPageSetting } from "@/store/counter/page";
const { TextArea } = Input;
export type PageSettingProps = {
  title: string;
  description: string;
  styles: string;
  scripts: string;
  onValuesChange: (changedValues: any, allValues: any) => void;
  onDrawerClose: () => void;
};

const PageSetting: FC<Partial<PageSettingProps>> = (props) => {
  const {
    title,
    description,
    styles = null,
    scripts,
    onValuesChange,
    onDrawerClose,
  } = props;
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  useEffect(() => {
    form.setFieldsValue({
      title,
      description,
      styles,
      scripts,
    });
  }, [title, description, styles, scripts]);

  const onFinish = (values: any) => {
    dispatch(setPageSetting(values));
    onDrawerClose && onDrawerClose();
  };
  return (
    <Form
      layout="vertical"
      form={form}
      onValuesChange={onValuesChange}
      onFinish={onFinish}
      initialValues={{ title, description, styles, scripts }}
    >
      <Form.Item
        label="标题"
        name="title"
        rules={[{ required: true, message: "标题不能为空" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="描述" name="description">
        <Input />
      </Form.Item>
      <Form.Item label="样式" name="styles">
        <TextArea />
      </Form.Item>
      <Form.Item label="脚本" name="scripts">
        <TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PageSetting;
