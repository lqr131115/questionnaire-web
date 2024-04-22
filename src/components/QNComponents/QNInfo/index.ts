import { IQNComponent } from "..";
import component from "./component";
import { QNInfoDefaultProps } from "./interface";
import propComponent from "./propComponent";
import { ReactComponent as InfoSvg } from "@/assets/svg/info.svg";
export * from "./interface";

export const qnInfoType = "qnInfo";

const QNInfoMaterial: IQNComponent = {
  title: "信息",
  type: qnInfoType,
  icon: InfoSvg,
  component,
  propComponent,
  props: QNInfoDefaultProps,
};

export default QNInfoMaterial;
