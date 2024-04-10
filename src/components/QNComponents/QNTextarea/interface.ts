export type QNTextAreaPropsType = {
  title: string;
  placeholder: string;
  defaultValue?: any; // any 避免和其他组件的 defaultValue 类型冲突 或者 定义一个新的类型 QNDefaultValueType = string | number | boolean | ...

  onValuesChange?: (changedValues: any, allValues: any) => void;
  disabled?: boolean;
};

export const QNTextAreaDefaultProps: QNTextAreaPropsType = {
  title: "多行输入",
  placeholder: "请输入",
  defaultValue: "",
};
