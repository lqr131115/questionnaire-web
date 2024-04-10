import component from "./component";
import propComponent from "./propComponent";
import { QNTextAreaDefaultProps } from "./interface";
import { IQNComponent } from "..";
import { ReactComponent as TextAreaSvg } from "@/assets/svg/textarea.svg";
export * from "./interface";

const QNTextAreaMaterial: IQNComponent = {
  title: "多行文本",
  type: "qnTextArea",
  icon: TextAreaSvg,
  component,
  propComponent,
  props: QNTextAreaDefaultProps,
};

export default QNTextAreaMaterial;
