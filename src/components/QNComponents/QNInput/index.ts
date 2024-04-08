import component from "./component";
import propComponent from "./propComponent";
import { QNInputDefaultProps } from "./interface";
import { IQNComponent } from "..";
import { ReactComponent as InputSvg } from "@/assets/svg/input.svg";
export * from "./interface";

const QNInputMaterial: IQNComponent = {
  title: "单行文本",
  type: "qnInput",
  icon: InputSvg,
  component, // 画布
  propComponent, // RightPanel 属性面板
  props: QNInputDefaultProps,
};

export default QNInputMaterial;
