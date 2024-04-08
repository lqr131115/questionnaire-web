import component from "./component";
import { QNTitleDefaultProps } from "./interface";
import { IQNComponent } from "..";
import { ReactComponent as TitleSvg } from "@/assets/svg/title.svg";
export * from "./interface";

const QNTitleMaterial: IQNComponent = {
  title: "标题",
  type: "qnTitle",
  icon: TitleSvg,
  component,
  props: QNTitleDefaultProps,
};

export default QNTitleMaterial;
