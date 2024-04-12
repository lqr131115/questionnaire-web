import React, { FC, useEffect } from "react";
import { nanoid } from "nanoid";
import { Checkbox, Form, Input, Space, Button } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import {
  QNCheckboxDefaultProps,
  QNCheckboxPropsType,
  CheckboxOptionType,
} from "./interface";
const { Compact } = Space;
const QNCheckboxProp: FC<Partial<QNCheckboxPropsType>> = (props) => {
  const { title, options, vertical, onValuesChange, disabled } = {
    ...QNCheckboxDefaultProps,
    ...props,
  };
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      title,
      options,
      vertical,
    });
  }, [title, options, vertical]);

  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={onValuesChange}
      initialValues={{ title, vertical }}
      disabled={disabled}
    >
      <Form.Item
        name="title"
        label="标题"
        rules={[{ required: true, message: "标题不能为空" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="选项">
        <Form.List name="options">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...rest }) => (
                <Compact key={key} style={{ width: "100%" }}>
                  <Form.Item
                    {...rest}
                    style={{ marginRight: 10 }}
                    name={[name, "checked"]}
                    valuePropName="checked"
                  >
                    <Checkbox />
                  </Form.Item>
                  <Form.Item
                    {...rest}
                    name={[name, "label"]}
                    style={{ width: "70%" }}
                    rules={[
                      { required: true, message: "选项不能为空" },
                      ({ getFieldsValue }) => ({
                        validator(_, value) {
                          const { options = [] } = getFieldsValue();
                          const exist = options.filter(
                            (opt: CheckboxOptionType) => opt.label === value,
                          );
                          if (exist.length !== 1) {
                            return Promise.reject(new Error("选项不能重复"));
                          }
                          return Promise.resolve();
                        },
                      }),
                    ]}
                  >
                    <Input placeholder="请输入" />
                  </Form.Item>
                  {fields.length > 1 && (
                    <Form.Item>
                      <Button
                        type="link"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => remove(name)}
                      />
                    </Form.Item>
                  )}
                </Compact>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() =>
                    add({
                      value: nanoid(),
                      label: "",
                      checked: false,
                    })
                  }
                  icon={<PlusOutlined />}
                >
                  新增选项
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>
      <Form.Item name="vertical" valuePropName="checked">
        <Checkbox>垂直排列</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default QNCheckboxProp;
