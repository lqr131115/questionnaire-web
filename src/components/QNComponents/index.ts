import QNTitleMaterial, { QNTitlePropsType } from "./QNTitle";
import QNParagraphMaterial, { QNParagraphPropsType } from "./QNParagraph";
import QNInfoMaterial, { QNInfoPropsType } from "./QNInfo";
import QNInputNumberMaterial, { QNInputNumberPropsType } from "./QNInputNumber";
import QNTextAreaMaterial, { QNTextAreaPropsType } from "./QNTextarea";
import QNInputMaterial, { QNInputPropsType } from "./QNInput";

export type QNComponentProps = Partial<
  QNTitlePropsType &
    QNParagraphPropsType &
    QNInfoPropsType &
    QNInputNumberPropsType &
    QNTextAreaPropsType &
    QNInputPropsType
>;

// 前后端一致
export type QNComponentType =
  | "qnTitle"
  | "qnParagraph"
  | "qnInfo"
  | "qnInputNumber"
  | "qnInput"
  | "qnTextArea";

// 单个物料协议 (前端定义的, 包括组件类型)
export interface IQNComponent {
  title: string;
  type: QNComponentType;
  component: React.FC<QNComponentProps>; // 画布中显示的组件
  propComponent: React.FC<QNComponentProps>; // 激活组件的属性面板
  props: QNComponentProps;
  [key: string]: any;
}

const qncMaterialList: IQNComponent[] = [
  QNTitleMaterial,
  QNParagraphMaterial,
  QNInfoMaterial,
  QNInputNumberMaterial,
  QNTextAreaMaterial,
  QNInputMaterial,
];

export const qncMaterialGroup = [
  {
    groupId: "text",
    groupName: "文本",
    components: [QNTitleMaterial, QNParagraphMaterial, QNInfoMaterial],
  },
  {
    groupId: "input",
    groupName: "输入",
    components: [QNInputNumberMaterial, QNInputMaterial, QNTextAreaMaterial],
  },
  {
    groupId: "other",
    groupName: "其他",
    components: [],
  },
];

export const getMaterialByType = (
  type: QNComponentType,
): IQNComponent | undefined => {
  return qncMaterialList.find((item) => item.type === type);
};
