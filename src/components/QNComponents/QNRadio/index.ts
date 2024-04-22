import component from "./component";
import propComponent from "./propComponent";
import statComponent from "./statComponent";
import { IQNComponent } from "..";
import { QNRadioDefaultProps } from "./interface";
import { ReactComponent as RadioSvg } from "@/assets/svg/radio.svg";
export * from "./interface";

export const qnRadioType = "qnRadio";

const QNRadioMaterial: IQNComponent = {
  title: "单选",
  type: "qnRadio",
  icon: RadioSvg,
  component,
  propComponent,
  statComponent,
  props: QNRadioDefaultProps,
};

export default QNRadioMaterial;
