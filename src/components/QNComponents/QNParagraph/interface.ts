export type QNParagraphPropsType = {
  content: string;
  align: "start" | "center" | "end";

  onValuesChange?: (changedValues: any, allValues: any) => void;
  disabled?: boolean;
};

export const QNParagraphDefaultProps: QNParagraphPropsType = {
  content: "段落默认值",
  align: "start",
};
