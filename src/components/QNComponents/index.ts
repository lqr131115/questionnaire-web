import QNTitleMaterial, { QNTitlePropsType } from "./QNTitle";
import QNParagraphMaterial, { QNParagraphPropsType } from "./QNParagraph";
import QNInfoMaterial, { QNInfoPropsType } from "./QNInfo";
import QNInputNumberMaterial, { QNInputNumberPropsType } from "./QNInputNumber";
import QNTextAreaMaterial, { QNTextAreaPropsType } from "./QNTextarea";
import QNInputMaterial, { QNInputPropsType } from "./QNInput";
import QNRadioMaterial, { QNRadioPropsType } from "./QNRadio";
import QNCheckboxMaterial, { QNCheckboxPropsType } from "./QNCheckbox";

export type QNComponentProps = Partial<
  QNTitlePropsType &
    QNParagraphPropsType &
    QNInfoPropsType &
    QNInputNumberPropsType &
    QNTextAreaPropsType &
    QNInputPropsType &
    QNRadioPropsType &
    QNCheckboxPropsType
>;

// 前后端一致
export type QNComponentType =
  | "qnTitle"
  | "qnParagraph"
  | "qnInfo"
  | "qnInputNumber"
  | "qnInput"
  | "qnTextArea"
  | "qnRadio"
  | "qnCheckbox";

// 单个物料协议 (前端定义的, 包括组件类型)
export interface IQNComponent {
  title: string;
  type: QNComponentType;
  component: React.FC<QNComponentProps>; // 画布中显示的组件
  propComponent: React.FC<QNComponentProps>; // 激活组件在属性面板显示的内容
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
  QNRadioMaterial,
  QNCheckboxMaterial,
];

export const textQncMaterialGroup = [
  QNTitleMaterial,
  QNParagraphMaterial,
  QNInfoMaterial,
];

export const textQncMaterialGroupType = textQncMaterialGroup.map((m) => m.type);

export const qncMaterialGroup = [
  {
    groupId: "text",
    groupName: "文本",
    components: textQncMaterialGroup,
  },
  {
    groupId: "input",
    groupName: "输入",
    components: [QNInputNumberMaterial, QNInputMaterial, QNTextAreaMaterial],
  },
  {
    groupId: "choice",
    groupName: "选择",
    components: [QNRadioMaterial, QNCheckboxMaterial],
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
