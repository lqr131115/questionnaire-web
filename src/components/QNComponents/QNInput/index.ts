import component from "./component";
import { QNInputDefaultProps } from "./interface";
import { IQNComponent } from "..";
import { ReactComponent as InputSvg } from "@/assets/svg/input.svg";
export * from "./interface";

const QNInputMaterial: IQNComponent = {
  title: "单行文本",
  type: "qnInput",
  icon: InputSvg,
  component,
  props: QNInputDefaultProps,
};

export default QNInputMaterial;
