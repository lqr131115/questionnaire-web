import component from "./component";
import propComponent from "./propComponent";
import { QNTextAreaDefaultProps } from "./interface";
import { IQNComponent } from "..";
import { ReactComponent as TextAreaSvg } from "@/assets/svg/textarea.svg";
export * from "./interface";

export const qnTextAreaType = "qnTextArea";

const QNTextAreaMaterial: IQNComponent = {
  title: "多行文本",
  type: qnTextAreaType,
  icon: TextAreaSvg,
  component,
  propComponent,
  props: QNTextAreaDefaultProps,
};

export default QNTextAreaMaterial;
