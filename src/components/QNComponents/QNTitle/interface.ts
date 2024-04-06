export type QNTitlePropsType = {
  text: string;
  level: 1 | 2 | 3 | 4 | 5;
  align: "start" | "center" | "end";
};

export const QNTitleDefaultProps: QNTitlePropsType = {
  text: "Title",
  level: 1,
  align: "start",
};
