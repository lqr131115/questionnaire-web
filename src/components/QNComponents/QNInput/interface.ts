export type QNInputPropsType = {
  title: string;
  placeholder: string;
  size: "large" | "middle" | "small";
};

export const QNInputDefaultProps: QNInputPropsType = {
  title: "单行输入",
  placeholder: "请输入",
  size: "middle",
};
