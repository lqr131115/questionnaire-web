export type QNInfoPropsType = {
  title: string;
  content: string;

  onValuesChange?: (changedValues: any, allValues: any) => void;
  disabled?: boolean;
};

export const QNInfoDefaultProps: QNInfoPropsType = {
  title: "标题",
  content: "内容",
};
