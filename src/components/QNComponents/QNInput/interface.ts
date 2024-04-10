export type QNInputPropsType = {
  title: string;
  placeholder: string;
  size: "large" | "middle" | "small";
  defaultValue?: any; // any 避免和其他组件的 defaultValue 类型冲突 或者 定义一个新的类型 QNDefaultValueType = string | number | boolean | ...

  onValuesChange?: (changedValues: any, allValues: any) => void;
  disabled?: boolean;
};

export const QNInputDefaultProps: QNInputPropsType = {
  title: "单行输入",
  placeholder: "请输入",
  size: "middle",
};
