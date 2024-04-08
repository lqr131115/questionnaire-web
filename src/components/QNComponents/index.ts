import QNTitleMaterial, { QNTitlePropsType } from "./QNTitle";
import QNInputMaterial, { QNInputPropsType } from "./QNInput";

export type QNComponentProps = Partial<QNTitlePropsType & QNInputPropsType>;
export type QNComponentType = "qnTitle" | "qnInput"; // 前后端一致

// 单个物料协议 (前端定义的, 包括组件类型)
export interface IQNComponent {
  title: string;
  type: QNComponentType;
  component: React.FC<QNComponentProps>; // 画布中显示的组件
  propComponent: React.FC<QNComponentProps>; // 激活组件的属性面板
  props: QNComponentProps;
  [key: string]: any;
}

const qncMaterialList: IQNComponent[] = [QNTitleMaterial, QNInputMaterial];

export const qncMaterialGroup = [
  {
    groupId: "text",
    groupName: "文本",
    components: [QNTitleMaterial],
  },
  {
    groupId: "input",
    groupName: "输入",
    components: [QNInputMaterial],
  },
];

export const getMaterialByType = (
  type: QNComponentType,
): IQNComponent | undefined => {
  return qncMaterialList.find((item) => item.type === type);
};
