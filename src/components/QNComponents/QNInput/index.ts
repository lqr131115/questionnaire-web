import component from "./component";
import { QNInputDefaultProps } from "./interface";
import { IQNComponent } from "..";
export * from "./interface";

const QNInputMaterial: IQNComponent = {
  title: "Input",
  type: "qnInput",
  component,
  props: QNInputDefaultProps,
};

export default QNInputMaterial;
