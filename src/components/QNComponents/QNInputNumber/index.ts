import component from "./component";
import propComponent from "./propComponent";
import { IQNComponent } from "..";
import { QNInputNumberDefaultProps } from "./interface";
import { ReactComponent as InputNumberSvg } from "@/assets/svg/inputnumber.svg";
export * from "./interface";

const QNInputNumberMaterial: IQNComponent = {
  title: "数字",
  type: "qnInputNumber",
  icon: InputNumberSvg,
  component,
  propComponent,
  props: QNInputNumberDefaultProps,
};

export default QNInputNumberMaterial;
