import component from "./component";
import { QNTitleDefaultProps } from "./interface";
import { IQNComponent } from "..";

export * from "./interface";

const QNTitleMaterial: IQNComponent = {
  title: "Title",
  type: "qnTitle",
  component,
  props: QNTitleDefaultProps,
};

export default QNTitleMaterial;
