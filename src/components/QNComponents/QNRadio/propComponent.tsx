import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Checkbox, Form, Input, Select, Space, Button } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import cloneDeep from "lodash.clonedeep";
import { QNRadioDefaultProps, QNRadioPropsType } from "./interface";
const { Option } = Select;
const { Compact } = Space;
const QNRadioProp: FC<Partial<QNRadioPropsType>> = (props) => {
  const {
    title,
    options: defaultOpts,
    defaultValue,
    vertical,
    onValuesChange,
    disabled,
  } = {
    ...QNRadioDefaultProps,
    ...props,
  };
  const [form] = Form.useForm();
  const [options, setOptions] = useState(defaultOpts);
  const [changedValues, setChangedValues] = useState({});
  useEffect(() => {
    form.setFieldsValue({
      title,
      defaultValue,
      vertical,
    });
  }, [title, defaultValue, vertical]);
  useEffect(() => {
    handleValuesChange(changedValues, { ...form.getFieldsValue(), options });
  }, [options]);
  const handleAddOpt = () => {
    setOptions([
      ...options,
      {
        value: nanoid(),
        label: "",
      },
    ]);
  };
  const handleDelOpt = (v: string) => {
    setOptions([...options].filter((o) => o.value !== v));
  };
  const handlePatchOpt = (e: ChangeEvent, v: string) => {
    const curIdx = options.findIndex((o) => o.value === v);
    if (~curIdx) {
      const label = (e.target as any).value;
      const tempOpts = cloneDeep(options);
      tempOpts[curIdx].label = label;
      setOptions(tempOpts);
    }
  };

  const handleValuesChange = (changedValues: any, allValues: any) => {
    setChangedValues(changedValues);
    onValuesChange && onValuesChange(changedValues, { ...allValues, options });
  };
  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={handleValuesChange}
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
      <Form.Item label="选项" className="my_item">
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
      </Form.Item>
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
