import QNTitleMaterial, { QNTitlePropsType } from "./QNTitle";
import QNInputMaterial, { QNInputPropsType } from "./QNInput";

export type QNComponentProps = Partial<QNTitlePropsType & QNInputPropsType>;
export type QNComponentType = "qnTitle" | "qnInput"; // 前后端一致

// 单个物料协议
export interface IQNComponent {
  title: string;
  type: QNComponentType;
  component: React.FC<QNComponentProps>;
  props: QNComponentProps;
  icon?: string;
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
