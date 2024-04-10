export type QNInputNumberPropsType = {
  title: string;
  placeholder: string;
  defaultValue?: any;

  onValuesChange?: (changedValues: any, allValues: any) => void;
  disabled?: boolean;
};

export const QNInputNumberDefaultProps: QNInputNumberPropsType = {
  title: "数字",
  placeholder: "请输入数字",
};
