export type QNTitlePropsType = {
  text: string;
  level: 1 | 2 | 3 | 4 | 5;
  align: "start" | "center" | "end";

  onValuesChange?: (changedValues: any, allValues: any) => void;
  disabled?: boolean;
};

export const QNTitleDefaultProps: QNTitlePropsType = {
  text: "标题",
  level: 1,
  align: "start",
};
