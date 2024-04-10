import component from "./component";
import propComponent from "./propComponent";
import { IQNComponent } from "..";
import { QNRadioDefaultProps } from "./interface";
import { ReactComponent as RadioSvg } from "@/assets/svg/radio.svg";
export * from "./interface";

const QNRadioMaterial: IQNComponent = {
  title: "单选",
  type: "qnRadio",
  icon: RadioSvg,
  component,
  propComponent,
  props: QNRadioDefaultProps,
};

export default QNRadioMaterial;
