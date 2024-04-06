export type QNInputPropsType = {
  title: string;
  placeholder: string;
  size: "large" | "middle" | "small";
};

export const QNInputDefaultProps: QNInputPropsType = {
  title: "Input",
  placeholder: "Please Input",
  size: "middle",
};
