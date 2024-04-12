import React, { FC, useEffect } from "react";
import { nanoid } from "nanoid";
import { Checkbox, Form, Input, Select, Space, Button } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { QNRadioDefaultProps, QNRadioPropsType, OptionType } from "./interface";
const { Option } = Select;
const { Compact } = Space;
const QNRadioProp: FC<Partial<QNRadioPropsType>> = (props) => {
  const { title, options, defaultValue, vertical, onValuesChange, disabled } = {
    ...QNRadioDefaultProps,
    ...props,
  };
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      title,
      options,
      defaultValue,
      vertical,
    });
  }, [title, options, defaultValue, vertical]);

  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={onValuesChange}
      initialValues={{ title, defaultValue, vertical }}
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
                    name={[name, "label"]}
                    style={{ width: "70%" }}
                    rules={[
                      { required: true, message: "选项不能为空" },
                      ({ getFieldsValue }) => ({
                        validator(_, value) {
                          const { options = [] } = getFieldsValue();
                          const exist = options.filter(
                            (opt: OptionType) => opt.label === value,
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
                  {fields.length > 2 && (
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

      {/* <Form.Item label="选项" className="my_item">
        <Space direction="vertical" style={{ width: "90%" }}>
          <Space direction="vertical" style={{ width: "100%" }}>
            {options.map((o) => {
              return (
                <Compact key={o.value} style={{ width: "100%" }}>
                  <Input
                    value={o.label}
                    onChange={(e) => handlePatchOpt(e, o.value)}
                  />
                  <Button
                    type="link"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelOpt(o.value)}
                  />
                </Compact>
              );
            })}
          </Space>
          <Button type="link" icon={<PlusOutlined />} onClick={handleAddOpt}>
            新增选项
          </Button>
        </Space>
      </Form.Item> */}
      <Form.Item name="defaultValue" label="默认值">
        <Select placeholder="请选择" allowClear>
          {options.map((o) => (
            <Option key={o.value} value={o.value}>
              {o.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="vertical" valuePropName="checked">
        <Checkbox>垂直排列</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default QNRadioProp;
