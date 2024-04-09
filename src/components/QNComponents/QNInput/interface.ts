export type QNInputPropsType = {
  title: string;
  placeholder: string;
  content: string;
  size: "large" | "middle" | "small";

  onValuesChange?: (changedValues: any, allValues: any) => void;
  disabled?: boolean;
};

export const QNInputDefaultProps: QNInputPropsType = {
  title: "单行输入",
  content: "",
  placeholder: "请输入",
  size: "middle",
};
