import component from "./component";
import propComponent from "./propComponent";

import { QNTitleDefaultProps } from "./interface";
import { IQNComponent } from "..";
import { ReactComponent as TitleSvg } from "@/assets/svg/title.svg";
export * from "./interface";

export const qnTitleType = "qnTitle";

const QNTitleMaterial: IQNComponent = {
  title: "标题",
  type: qnTitleType,
  icon: TitleSvg,
  component,
  propComponent,
  props: QNTitleDefaultProps,
};

export default QNTitleMaterial;
