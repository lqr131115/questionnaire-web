import component from "./component";
import propComponent from "./propComponent";

import { QNParagraphDefaultProps } from "./interface";
import { IQNComponent } from "..";
import { ReactComponent as ParagraphSvg } from "@/assets/svg/paragraph.svg";
export * from "./interface";

const QNParagraphMaterial: IQNComponent = {
  title: "段落",
  type: "qnParagraph",
  icon: ParagraphSvg,
  component,
  propComponent,
  props: QNParagraphDefaultProps,
};

export default QNParagraphMaterial;
